import React from 'react';
import PropTypes from 'prop-types';

/** A super lame button that says Hello with a custom message. */
function Button({message}) {
  return <button>Hello {message}</button>
}

Button.propTypes = {
  /** Message to display */
  message: PropTypes.string
};

Button.defaultProps = {
  message: 'World'
};

export default Button;
