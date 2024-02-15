import React from "react";
import "./styling/SideBarMenu.css";
import { Outlet } from "react-router-dom";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

function HistoricalSidebarMenu() {
  return (
    <div className="sidebar-container">
      <CDBSidebar textColor="white" backgroundColor="rgb(36, 36, 36)">
        <CDBSidebarHeader
          prefix={<i className="fa fa-bars fa-large" hover="red"></i>}
        >
          Historical Data
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink
              exact
              to="/historical-data/general"
              activeClassName="activeClicked"
            >
            
            </NavLink>
            <NavLink
              exact
              to="/historical-data/upload"
              activeClassName="activeClicked"
            >
              
            </NavLink>
            
          </CDBSidebarMenu>
        </CDBSidebarContent>
        {/* <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div className="sidebar-footer">Sidebar Footer</div>
        </CDBSidebarFooter> */}
      </CDBSidebar>
      <Outlet />
    </div>
  );
}

export default HistoricalSidebarMenu;
