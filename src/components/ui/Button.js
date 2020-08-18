import * as React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import theme from 'styled-theming';

import colors, { blendHexColors, shadeHexColor } from '../../config/colors';

const backgroundColor = theme.variants('mode', 'variant', {
  default: { light: colors.gray500, dark: colors.gray500 },
  primary: { light: colors.primary, dark: colors.gray500 },
  secondary: { light: colors.secondary, dark: colors.gray500 },
  success: { light: colors.success, dark: colors.gray500 },
  warning: { light: colors.warning, dark: colors.gray500 },
  danger: { light: colors.danger, dark: colors.gray500 },
});

const ThemedButton = styled(Button)`
  background-color: ${backgroundColor};
  border-radius: 20px;
`;

ThemedButton.propTypes = {
  variant: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
  ]),
};

ThemedButton.defaultProps = {
  variant: 'default',
};

export default ThemedButton;
