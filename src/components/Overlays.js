import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

// import theme from 'modules/theme';
import {
  Overlay,
  OverlayTrigger,
  Popover,
  ListGroup,
  Container,
  Button,
} from 'react-bootstrap';

/**
 * Example of use:
 * const options = [{ title: 'View', onClick: () => {} }];
 * render:
 * <div>
 *    <OptionMenu contentComponent={renderOptionsListPopover({ options })} />
 * </div>
 */

// color: ${theme.palette.primary};
const IconStyled = styled(FontAwesomeIcon)``;

const OptionMenu = ({ contentComponent }) => {
  return (
    <OverlayTrigger
      trigger={['hover', 'focus']}
      placement="right"
      overlay={contentComponent}
    >
      <Button variant="white" className="btn-transparent">
        <IconStyled icon={faEllipsisH} style={{ fontSize: 20 }} />
      </Button>
    </OverlayTrigger>
  );
};

const renderOptionsListPopover = ({ options }) => (
  <Popover id="popover-basic" style={{ width: 150 }}>
    <Popover.Content style={{ padding: 0 }}>
      <ListGroup>
        {(options || []).map((option, index) => (
          <ListGroup.Item key={index} action onClick={option.onClick}>
            {option.title}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Popover.Content>
  </Popover>
);

function OverlayWithPopoverContent(props) {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <div onClick={handleClick}>
        {props.children}
      </div>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref.current}
        containerPadding={0}
      >
        <Popover id="popover-contained">
          {/* <Popover.Title as="h3">Popover bottom</Popover.Title> */}
          <Popover.Content style={{ padding: 0, border: 'none' }}>
            {props.popoverContent}
          </Popover.Content>
        </Popover>
      </Overlay>
    </div>
  );
}

export { OptionMenu, renderOptionsListPopover, OverlayWithPopoverContent };
