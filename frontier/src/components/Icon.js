import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Icon = ({ fixedWidth, icon, size }) => {
  const iconClass = classNames({
    'Icon': true,
    'fa': true,
    [`fa-${icon}`]: true,
    [`fa-${size}`]: size,
    'fa-fw': fixedWidth
  });
  return <i className={ iconClass } aria-hidden="true"></i>;
};

Icon.propTypes = {
  fixedWidth: PropTypes.bool,
  icon: PropTypes.string.isRequired,
  size: PropTypes.string
};

export default Icon;
