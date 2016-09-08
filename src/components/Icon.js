import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Icon = ({ className, fixedWidth, name, size, ...other }) => {
  const iconClass = classNames({
    [className]: className,
    'Icon': true,
    'fa': true,
    [`fa-${name}`]: true,
    [`fa-${size}`]: size,
    'fa-fw': fixedWidth
  });
  return <i className={ iconClass } { ...other } aria-hidden="true"></i>;
};

Icon.propTypes = {
  className: PropTypes.string,
  fixedWidth: PropTypes.bool,
  name: PropTypes.string.isRequired,
  size: PropTypes.string
};

export default Icon;
