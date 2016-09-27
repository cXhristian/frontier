import React, { PropTypes } from 'react'

import '../css/Sidebar.css';
import Icon from '../components/Icon';
import UnUsedContentContainer from '../containers/UnUsedContentContainer';



const Sidebar = ({contentTypes, content, toggleSidebar}) => (
  <div className="Sidebar-wrapper" id="sidebar">
    <ul id="slide-out" className="side-nav">
      <li className="Sidebar-hamburger-icon" ><Icon size="2x" name="bars" onClick={toggleSidebar} /></li>

      {
        contentTypes.map( contentType => {
          return <div key={ contentType }>
            <li><a className="subheader">{ contentType + 's' }</a></li>
            {
                Object.keys(content[contentType]).map( key => {
                  return <UnUsedContentContainer key={key} content={content[contentType][key]}/>
                  //return <li key={key} className="Sidebar-selectable" ><a href="#!">{ content[contentType][key].title }</a></li>
                })
            }
          </div>
        })
      }

    </ul>
  </div>
);

Sidebar.propTypes = {
  contentTypes : PropTypes.arrayOf(PropTypes.string).isRequired,
  content: PropTypes.object.isRequired
}

module.exports = Sidebar;
