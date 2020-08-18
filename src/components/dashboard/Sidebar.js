import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/wayne-logo.png';
import { connect } from 'react-redux';
import { device } from '../../utils/media';
import { useMediaQuery } from 'react-responsive';

import { toggleSidebar } from '../../store/actions/general';

const SIDEBAR_WIDTH = 270;

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  height: 100vh;
  width: ${SIDEBAR_WIDTH}px;
  //   background-color: #f6f6f6;
  background-color: slategrey;
  //   @media (max-width: 425px) {
  //     display: none;
  //   }
`;

const SidebarMenu = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  list-style: none;
  width: 100%;
`;

const SidebarMenuItem = styled.li`
  width: 100%;
`;

const Icon = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
  float: left;
  margin-right: 10px;
`;
// const Icon = styled.svg`
//   width: 20px;
//   height: 20px;
//   float: left;
//   margin-right: 10px;
// `;

const SidebarMenuItemLabel = styled.p`
  margin-top: 0;
  font-family: 'Open Sans', sans-serif;
  line-height: 1.5;
  font-weight: 900;
`;

const Sidebar = (props) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  });
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)',
  });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  return (
    <SidebarContainer
      style={
        isTabletOrMobile
          ? {
              position: 'fixed',
              left: !!props.isSidebarOpen ? 0 : -SIDEBAR_WIDTH,
            }
          : {}
      }
    >
      {isTabletOrMobile && <div onClick={props.toggleSidebar}>Cerrar</div>}
      <br />
      <img style={{ width: '50%', margin: '0 auto' }} src={logo} />
      <hr />
      <br />
      <SidebarMenu>
        <SidebarMenuItem>
          <Link to="/">
            <Icon icon={faTachometerAlt} />
            <SidebarMenuItemLabel>Home</SidebarMenuItemLabel>
          </Link>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <Link to="/events">
            <Icon icon={faCoffee} />
            <SidebarMenuItemLabel>Events</SidebarMenuItemLabel>
          </Link>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarContainer>
  );
};

function mapStateToProps(state) {
  return {
    isSidebarOpen: state.general.isSidebarOpen,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleSidebar: () => dispatch(toggleSidebar()),
  };
}

const ConnectedSidebar = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default ConnectedSidebar;
