import React, { PropTypes } from 'react'

import '../css/Sidebar.css';
import Icon from '../components/Icon';
import UnUsedContentContainer from '../containers/UnUsedContentContainer';



const Sidebar = ({contentTypes, content, toggle, active}) => (
  <div className={"Sidebar-wrapper " + (active ? "Sidebar-wrapper-active" : "Sidebar-wrapper-inactive")}>
    <ul className="side-nav">
      <li className="Sidebar-hamburger-icon" ><Icon size="2x" name="bars" onClick={toggle} /></li>

      {
        contentTypes.map( contentType => {
          return <div key={ contentType }>
            <li><a className="subheader">{ contentType + 's' }</a></li>
            {
                Object.keys(content[contentType]).map( key => {
                  return <UnUsedContentContainer key={key} content={content[contentType][key]}/>
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

export default Sidebar;
