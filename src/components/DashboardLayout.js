import React from 'react';
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';

const Header = () => {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

const SideBar = () => {
  return (
    <div style={{ backgroundColor: 'red', width: 200, height: '100vh' }}></div>
  );
};

const DashboardContent = styled.div`
  background-color: aquamarine;
  margin: 0;
  flex: 1;
`;

const DashboardLayout = () => {
  return (
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
        <SideBar />
        <DashboardContent>HELLO</DashboardContent>
      </div>
    </div>
  );
};

export default DashboardLayout;
