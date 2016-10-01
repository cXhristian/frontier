import Sidebar from '../components/Sidebar';
import { connect } from 'react-redux';
import { ARTICLE, VIDEO, LIVE } from '../constants/ArticleTypes';
import React from 'react';

const mapStateToProps = ({articles, articleGroups}) => {
  const content = {};
  const contentTypes = [ARTICLE, VIDEO, LIVE];

  /* Find all used article IDs by going through articleGroups */
  const usedArticleIds = Object.keys(articleGroups)
    .map( groupKey => articleGroups[groupKey].articles )
    .reduce( (list, articleKeys) => list.concat(articleKeys) ,[]);

  /* Get un-used article IDs */
  const unUsedArticleKeys = Object.keys(articles)
    .filter(key => usedArticleIds.indexOf(parseInt(key, 10)) === -1);

  /* Categorize by type */
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

class SidebarContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      active: false
    };
  }

  toggle(){
    this.setState({
      active: !this.state.active
    });
  }

  render(){
    return (
      <Sidebar
        contentTypes={this.props.contentTypes}
        content={this.props.content}
        toggle={this.toggle.bind(this)}
        active={this.state.active}
         />
    )
  }
};

export default connect(mapStateToProps)(SidebarContainer);
