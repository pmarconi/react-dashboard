import React from 'react';

import DashboardContentContainer from './../components/dashboard/DashboardContentContainer';

class HomeRoutes extends React.PureComponent {
  render() {
    return (
      <DashboardContentContainer sizepercentage={80}>
        <div>HOME</div>
      </DashboardContentContainer>
    );
  }
}

export default HomeRoutes;
