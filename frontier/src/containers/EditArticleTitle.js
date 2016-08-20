import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editTitle } from '../actionCreators';
import ArticleTitle from '../components/ArticleTitle';

class EditArticleTitle extends Component {
  constructor(props) {
    super(props);

    this.state = { editing: false, text: props.text };
    this.editMode = this.editMode.bind(this);
    this.saveTitle = this.saveTitle.bind(this);
    this.updateText = this.updateText.bind(this);
  }

  editMode() {
    this.setState({
      editing: true,
      text: this.state.text
    });
  }

  saveTitle() {
    this.props.dispatch(editTitle(this.props.id, this.state.text));
    this.setState({
      editing: false,
      text: this.state.text
    });
  }

  updateText(e) {
    this.setState({
      editing: true,
      text: e.target.value
    })
  }

  render() {
    return (
      <div className="Article-title-edit">
      {
        this.state.editing ?
          <input type="text" value={ this.state.text } onChange={ this.updateText } onBlur={ this.saveTitle } />
        :
          <span onClick={ this.editMode }><ArticleTitle { ...this.props } /></span>
      }
      </div>
    );
  }
}

export default connect()(EditArticleTitle);
