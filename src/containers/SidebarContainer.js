import Sidebar from '../components/Sidebar';
import { connect } from 'react-redux';
import { ARTICLE, VIDEO, LIVE } from '../constants/ArticleTypes';
import React from 'react';

const mapStateToProps = ({articles, articleGroups}) => {
  const content = {};
  const contentTypes = [ARTICLE, VIDEO, LIVE];

  // Find all used article IDs by going through articleGroups
  const usedArticleIds = Object.keys(articleGroups)
    .map( groupKey => articleGroups[groupKey].articles )
    .reduce( (list, articleKeys) => list.concat(articleKeys) ,[]);

  console.log("Used article ids", usedArticleIds);

  // Get un-used article IDs
  const unUsedArticleKeys = Object.keys(articles)
    .filter(key => usedArticleIds.indexOf(parseInt(key, 10)) === -1);

  console.log("Un-used article keys ", unUsedArticleKeys);

  // Categorize by type
  contentTypes.forEach( type => {
    content[type] = unUsedArticleKeys
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

class SidebarContainer extends React.Component {
  render(){
    return (
      <Sidebar
        contentTypes={this.props.contentTypes}
        content={this.props.content}
        toggleSidebar={this.props.toggleSidebar} />
    )
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);
