import React, { PropTypes } from 'react'
import { connect } from 'react-redux';
import { ARTICLE, VIDEO, LIVE } from '../constants/ArticleTypes';
import '../css/Sidebar.css';
import Icon from '../components/Icon';
import UnUsedContentContainer from '../containers/UnUsedContentContainer';

const mapStateToProps = ({articles}) => {
  const content = {};
  const contentTypes = [ARTICLE, VIDEO, LIVE];

  contentTypes.forEach( type => {
    content[type] = Object.keys(articles)
      .filter(key => articles[key].type === type)
      .map(key => articles[key]);
  });

  return {
    contentTypes,
    content
  };
}

const mapDispatchToProps = () => {
  return {
    toggleSidebar: () => {
      const sidebarClasses = document.getElementById("sidebar").classList;
      if(sidebarClasses.contains("Sidebar-wrapper-active")){
        sidebarClasses.remove("Sidebar-wrapper-active");
        sidebarClasses.add("Sidebar-wrapper-inactive");
      }
      else{
        sidebarClasses.remove("Sidebar-wrapper-inactive");
        sidebarClasses.add("Sidebar-wrapper-active");
      }

    }
  }
}

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

module.exports = connect(mapStateToProps, mapDispatchToProps)(Sidebar);
