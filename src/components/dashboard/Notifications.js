import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/wayne-logo.png';

import isEmpty from 'lodash/isEmpty';

const NotificationsContainer = styled.div`
  height: 200px;
  width: 150px;
`;

const EmptyNotificationsContainer = styled.div`
  height: 200px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EmptyNotifications = () => {
  return (
    <EmptyNotificationsContainer>
      <small>No Notifications</small>
    </EmptyNotificationsContainer>
  );
};

const Notifications = ({ data = [] }) => {
  if (isEmpty(data)) return <EmptyNotifications />;
  return <NotificationsContainer></NotificationsContainer>;
};

export default Notifications;
