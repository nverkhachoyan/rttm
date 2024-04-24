import React, { useState, useEffect } from 'react';
import './styling/general.css';
import StackedAreaHist from '../subcomponents/sub-graph/StackedAreaHist';
import PieChartHist from '../subcomponents/sub-graph/PieChartHist';
import StackedBarHist from '../subcomponents/sub-graph/StackedBarHist';
import DensityHist from '../subcomponents/sub-graph/DensityHist';
import HeatMapHist from '../subcomponents/sub-graph/HeatMapHist';

const HistoricalGeneral = () => {
  const [dataType, setDataType] = useState('per-second');
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      try {
        const url = dataType === 'per-second' 
          ? `http://localhost:3000/api/per-second-data?limit=100`
          : `http://localhost:3000/api/per-hour-data?limit=24`;
        
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(`Failed to fetch ${dataType} data. Please try again later.`);
      }
    };
    
    fetchData();
  }, [dataType]);

  const getStackedBarData = () => {
    const processedData = {};
    data.forEach((item) => {
      Object.entries(item.LaneVehicleCounts).forEach(([lane, count]) => {
        if (!processedData[lane]) {
          processedData[lane] = [];
        }
        processedData[lane].push(count);
      });
    });
    return processedData;
  };

  const getStackedAreaData = () => {
    return {
      labels: data.map((item) => new Date(item.Timestamp * 1000).toLocaleString()),
      datasets: [
        {
          label: 'Vehicle Count',
          data: data.map((item) => item.TotalVehicles),
        },
        {
          label: 'Average Speed',
          data: data.map((item) => item.AverageSpeed),
        },
      ],
    };
  };

  const getPieChartData = () => {
    const vehicleTypeCounts = data.reduce((acc, item) => {
      Object.entries(item.VehicleTypeCounts).forEach(([type, count]) => {
        acc[type] = (acc[type] || 0) + count;
      });
      return acc;
    }, {});
    return {
      labels: Object.keys(vehicleTypeCounts),
      datasets: [
        {
          data: Object.values(vehicleTypeCounts),
        },
      ],
    };
  };

  const getDensityData = () => {
    return data.map((item) => ({
      value: item.Density,
    }));
  };

  return (
    <div className="GeneralSection">
      <h1>Traffic Data Analysis</h1>
      <div>
        <button onClick={() => setDataType('per-second')}>Per Second</button>
        <button onClick={() => setDataType('per-hour')}>Per Hour</button>
      </div>
      {error && <p className="error">{error}</p>}
      {data.length > 0 && !error && (
        <div className="container-fluid d-flex flex-column align-items-center">
          <div className="row row-cols-1 row-cols-md-2 g-3 w-100">
            {[
              { title: "Stacked Area Chart", description: "Depicts vehicle counts and average speed over time, highlighting temporal trends.", Component: StackedAreaHist, data: getStackedAreaData() },
              { title: "Pie Chart", description: "Breaks down vehicle counts by lane, useful for spotting congestion.", Component: PieChartHist, data: getPieChartData() },
              { title: "Stacked Bar Chart", description: "Breaks down vehicle counts by lane, useful for spotting congestion.", Component: StackedBarHist, data: getStackedBarData() },
              { title: "Density Chart", description: "Tracks the density of vehicles, a key indicator of traffic flow efficiency", Component: DensityHist, data: getDensityData() },
              { title: "Heatmap", description: "Visualizes vehicle density over time, with color intensity reflecting density levels", Component: HeatMapHist, data: getDensityData() }
            ].map(({ title, description, Component, data }) => (
              <div className="col" key={title}>
                <div className="box">
                  <h2>{title}</h2>
                  <Component data={data} />
                  <p className="small-text">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HistoricalGeneral;