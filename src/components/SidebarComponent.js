import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = ({admissionNo}) => {
  return (
    
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            {admissionNo}
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/news" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">News & Events</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Reporting</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/fees" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Fees</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/units"  activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">Units</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/examinations"  activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">Examinations</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/hostels" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">Hostel Booking</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/messaging"  activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">Messages</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/repository"  activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">Repository</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/evaluation"  activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">Evaluation</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/clearance"  activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">Clearance</CDBSidebarMenuItem>
            </NavLink>

          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Copyright &copy; Dev Ngecu
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
   
  );
};

export default Sidebar;