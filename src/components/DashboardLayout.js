import React from 'react';
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

import { logout } from './../store/actions/authentication';

import Sidebar from './dashboard/Sidebar';
import Header from './dashboard/Header';


import DashboardRoutes from '../routes/Dashboard';

const DashboardLayout = () => {
  return (
    <div style={{ height: '100vh', display: 'flex' }}>
      <Sidebar />
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#f6f6f6',
        }}
      >
        <Header />
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <br/>
          <DashboardRoutes />
        </div>
        {/* <div style={{ height: 50 }}>
          <span>Made with ♥ - </span>
          <span>©2020</span>
        </div> */}
      </div>
    </div>
  );
};

export default DashboardLayout;
