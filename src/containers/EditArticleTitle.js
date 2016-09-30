import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editTitle } from '../actionCreators';
import ArticleTitle from '../components/ArticleTitle';
import EditMenu from '../components/EditMenu';
import EditMenuElement from '../components/EditMenuElement';
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
    this.cancelEdit = this.cancelEdit.bind(this);
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

  cancelEdit() {
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
          <EditMenu onSave={ this.saveTitle } onCancel={ this.cancelEdit }>
            <EditMenuElement icon="font" value={ fontSize } onChange={ this.updateFontSize } />
          </EditMenu>
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
