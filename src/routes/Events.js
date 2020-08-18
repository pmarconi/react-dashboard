import React from 'react';

import DashboardContentContainer from './../components/dashboard/DashboardContentContainer';

class EventsRoutes extends React.PureComponent {
  render() {
    return (
      <DashboardContentContainer sizepercentage={80}>
        <div>EVENTS</div>
      </DashboardContentContainer>
    );
  }
}

export default EventsRoutes;
