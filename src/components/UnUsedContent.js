import React from 'react';

const UnUsedContent = ({content}) => {

  return(
  <li className="Sidebar-selectable">
    <a href="#!">{ content.title }</a>
  </li>
  );
}

module.exports = UnUsedContent;
