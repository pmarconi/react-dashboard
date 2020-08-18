import React from 'react';
import { Nav, Container, ListGroup } from 'react-bootstrap';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { logout } from '../../store/actions/authentication';
import { toggleSidebar } from '../../store/actions/general';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBell,
  faUser,
  faMailBulk,
  faIdCard,
  faChartLine,
  faSignOutAlt,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/wayne-logo.png';
import defaultAvatar from '../../assets/default-avatar.png';
import Image from './../ui/Image';

import { OverlayWithPopoverContent } from '../Overlays';
import Notifications from './Notifications';

import { device } from '../../utils/media';

const UserActionsContainer = styled.div`
  min-height: 200px;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UserOptions = (props) => {
  return (
    <UserActionsContainer>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 15,
        }}
      >
        <Image
          src={defaultAvatar}
          roundedCircle
          style={{ width: 60, height: 60 }}
        />
        <span>Pablo Marconi</span>
        <small>pablo.marconi.ar@gmail.com</small>
      </div>
      <ListGroup style={{ width: '100%' }}>
        <ListGroup.Item>
          <FontAwesomeIcon icon={faIdCard} />
          <span style={{ margin: 8 }}>Profile</span>
        </ListGroup.Item>
        <ListGroup.Item>
          <FontAwesomeIcon icon={faChartLine} />
          <span style={{ margin: 8 }}>Activity</span>
        </ListGroup.Item>
        <ListGroup.Item onClick={props.onLogout}>
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span style={{ margin: 8 }}>Logout</span>
        </ListGroup.Item>
      </ListGroup>
    </UserActionsContainer>
  );
};

const HeaderContainer = styled.div`
  height: 50px;
  padding: 0px;
  //   margin: 0px;
  //   width: 100%;
  background-color: white;
  //  border-bottom: 1px solid #f6f6f6;
`;

const MenuIconContainer = styled.div`
  display: inline;
  @media ${device.mobileL} {
    display: none;
  }
`;

const Header = (props) => {
  const onLogout = () => props.logout();
  const onToggleSidebar = () => props.toggleSidebar();



  return (
    <HeaderContainer>
      <MenuIconContainer onClick={onToggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </MenuIconContainer>
      <Nav style={{ float: 'right' }}>
        <Nav.Item>
          <Nav.Link>
            <OverlayWithPopoverContent popoverContent={<Notifications />}>
              <FontAwesomeIcon icon={faBell} />
            </OverlayWithPopoverContent>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <OverlayWithPopoverContent popoverContent={<div>SOME CONTENT</div>}>
              <FontAwesomeIcon icon={faMailBulk} />
            </OverlayWithPopoverContent>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <OverlayWithPopoverContent
              popoverContent={<UserOptions onLogout={onLogout} />}
            >
              <Image
                src={defaultAvatar}
                roundedCircle
                style={{ width: 30, height: 30 }}
              />
            </OverlayWithPopoverContent>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </HeaderContainer>
  );
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout()),
    toggleSidebar: () => dispatch(toggleSidebar()),
  };
}

const ConnectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header);

export default ConnectedHeader;
