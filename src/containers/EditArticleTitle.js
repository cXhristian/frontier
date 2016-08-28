import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editTitle } from '../actionCreators';
import ArticleTitle from '../components/ArticleTitle';
import Icon from '../components/Icon';
import '../css/EditArticleTitle.css';

class EditArticleTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      text: props.text,
      fontSize: props.fontSize
    };
    this.editMode = this.editMode.bind(this);
    this.saveTitle = this.saveTitle.bind(this);
    this.updateText = this.updateText.bind(this);
    this.updateFontSize = this.updateFontSize.bind(this);
  }

  editMode() {
    this.setState({
      editing: true,
      text: this.state.text
    });
  }

  saveTitle(e) {
    this.props.dispatch(editTitle(this.props.id, this.state.text, this.state.fontSize));
    this.setState({
      editing: false
    });
  }

  updateText(e) {
    this.setState({
      editing: true,
      text: e.target.value
    })
  }

  updateFontSize(e) {
    this.setState({
      fontSize: e.target.value
    })
  }

  render() {
    if(this.state.editing) {
      const { fontSize, text } = this.state;
      return (
        <div className="Article-title-edit">
          <div className="Article-title-edit-menu">
            <div className="Article-title-edit-menu-element Article-title-edit-size">
              <Icon name="font" />
              <input value={ fontSize } onChange={ this.updateFontSize }
                min="10" max="100" type="number" />
            </div>
            <div onClick={ this.saveTitle }
              className="Article-title-edit-menu-element Article-title-edit-save">
              <Icon name="check" /> Save
            </div>
          </div>
          <input autoFocus type="text" value={ text }
            onChange={ this.updateText } style={{ fontSize: `${fontSize}px` }} />
        </div>
      );
    } else {
      return <span style={ { cursor: 'pointer' } } onClick={ this.editMode }><ArticleTitle { ...this.props } /></span>
    }
  }
}

export default connect()(EditArticleTitle);
