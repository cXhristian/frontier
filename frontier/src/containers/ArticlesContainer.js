import React, { Component } from 'react';
import { connect } from 'react-redux';
import Articles from '../components/Articles';

class ArticlesContainer extends Component {
  render() {
    return (
      <Articles { ...this.props } />
    );
  }
}

const mapStateToProps = ({ groupOrder }) => {
  return {
    articleGroups: groupOrder
  }
}

export default connect(mapStateToProps)(ArticlesContainer);
