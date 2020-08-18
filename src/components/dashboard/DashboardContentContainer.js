import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const ContentHeaderContainer = styled.div`
  display: flex;
  flex: 1;
  margin-bottom: 10px;
  // align-items: center;
  height: 40;
`;

const DashboardContentContainer = styled(Container)`
  width: ${props => `${props.sizepercentage}%` || '100%'};
  margin: 0px !important; // !important it's need it for different screen sizes
  padding: 0px !important;
  // min-width: 1000px;
  // height: 100vh;
  flex: 1;
  background-color: white;
`;

export default DashboardContentContainer;
