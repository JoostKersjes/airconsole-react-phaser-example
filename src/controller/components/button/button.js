import React from 'react';
import PropTypes from 'prop-types';

import { isMobile } from '../../helpers/is-mobile';

const Button = ({ children, onDownEvent, onUpEvent }) => {
  // Define event listeners for mobile and browser
  const eventListeners = isMobile()
    ? {
        onTouchStart: onDownEvent,
        onTouchEnd: onUpEvent
      }
    : {
        onMouseDown: onDownEvent,
        onMouseUp: onUpEvent
      };

  return (
    <div className="controller-button" {...eventListeners}>
      {children}
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onDownEvent: PropTypes.func,
  onUpEvent: PropTypes.func
};

export default Button;
