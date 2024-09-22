
# Real-Time Traffic Monitoring (RTTM) System

## Table of Contents

- [About the Project](#about-the-project)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
    - [Quick Setup Guide](#quick-setup-guide)
    - [Database Setup](#database-setup)
    - [Environment Preparation](#environment-preparation)
    - [Running the Scripts/Datapoints Server](#running-the-scriptsdatapoints-server)
    - [Running the 2D Camera Server](#running-the-2d-camera-server)
    - [Running the Application](#running-the-application)
- [Features](#features)
- [Contributing](#contributing)

## About the Project

Vehicle detection is crucial for analyzing traffic flow data to enhance planning in intelligent transportation systems. Machine Learning technology has increasingly been utilized for vehicle detection in both 2D real-time traffic flow videos and 3D point clouds. However, adverse weather conditions such as fog, rain, snow, extreme wind, and others pose challenges for 2D vehicle detection. 3D LiDAR point clouds offer more resistance to these conditions. While much research on 3D vehicle detection has focused on autonomous driving with LiDAR cameras on vehicles, there is a research gap in real-time vehicle detection for intelligent transportation with stationary LiDAR cameras on highways/freeways. This project aims to develop a system that collects real-time traffic flow data through 3D LiDAR cameras, processes the data for vehicle detection and classification, and provides a web-based service that enables real-time vehicle tracking, classification, and statistical traffic flow data visualization.

## Frontend
- React
- Bootstrap

## Backend
- Node.js
- Express
- PostgreSQL

## Containerization:
- Docker
- Docker Compose

## Other Technologies:
- Firebase
- Python

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Docker Desktop installed on your macOS. Download it from [Docker Desktop](https://www.docker.com/products/docker-desktop/).
- Git installed on your machine.

#### Quick Setup with Docker

Follow these steps to set up and run the RTTM system using Docker and Docker Compose.

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/CalTransProject/rttm.git
   ```

2. **Navigate to the backend API directory:**

   ```bash
   cd rttm/backend/api
   ```

3. **Make sure Docker Desktop is running:**

   Make sure the Docker Desktop application is running.

4. **Build and Start the Containers:**

   Use Docker Compose to build and start all the necessary services.

   ```bash
   docker-compose up --build
   ```

   This command will:

   - Build Docker images for the frontend, backend, and other services.
   - Start PostgreSQL, the backend server, the frontend application, and any other defined services.
   - Set up networks and volumes as specified in the `docker-compose.yml` file.

5. **Install and run the frontend**

   At this point, we have setup the backend through Docker, and all we need to do is run the frontend. **Navigate to the frontend directory** and run this command.

   ```bash
   npm install
   ```

   and then 

   ```bash
   npm start
   ```

6. **Access the Application:**

   Once all services are up and running, you can access the RTTM web application by navigating to `http://localhost:3000` in your web browser.


#### Running the Application

With Docker Compose handling the setup, running the application is straightforward.

1. **Start All Services:**

   ```bash
   docker-compose up
   ```

   To run in detached mode (in the background):

   ```bash
   docker-compose up -d
   ```

2. **Stopping the Services:**

   To stop all running containers:

   ```bash
   docker-compose down
   ```

### Running the 2D Camera Server

1. Navigate to the server directory:

```bash
cd website/scriptsServer
```

2. Start the camera server (ensure the camera is attached):

```bash
python server2DCamera.py
```

## Default Login Credentials
```bash
username: rttm45304@gmail.com
password: 1234abcd
```

## Features

- Traffic Camera Management
- Real-Time Data Processing
- Predictive Traffic Analysis
- Historical Data Visualization
- User-friendly Interface and Responsive Design
- User Management

## Contributing

Interested in contributing to the RTTM project? Here's how you can help:

1. Fork the Project

2. Create a feature branch:

```bash
git checkout -b feature/ANewFeature
```

3. Commit your changes:

```bash
git commit -m 'Added ANewFeature'
```

4. Push to the branch:

```bash
git push origin feature/ANewFeature
```

5. Open a Pull Request
