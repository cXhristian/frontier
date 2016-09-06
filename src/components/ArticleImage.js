import React, { Component, PropTypes } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

class ArticleImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cropMode: false,
      editMode: true
    };
  }

  cropEnd() {
    console.log(this.cropper.getData());
  }

  toggleCropMode() {
    console.log('yo');
    this.setState({
      cropMode: !this.state.cropMode
    });
  }

  viewRender() {
    return (
      <img src={ this.props.url } alt="" />
    )
  }

  editRender() {
    const { url } = this.props;
    if(this.state.cropMode) {
      return (
        <div>
        <Cropper
          ref='cropper'
          viewMode={ 3 }
          dragMode='move'
          autoCropArea={ 1 }
          restore={ false }
          modal={ false }
          highlight={false }
          cropBoxMovable={ false }
          cropBoxResizable={ false }
          toggleDragModeOnDblclick={ false }
          guides={ false }
          src={ url }
          cropend={ this.cropEnd.bind(this) }
        />
        </div>
      );
    }
    else {
      return (
        <div onClick={ this.toggleCropMode.bind(this) }>
          { this.viewRender() }
        </div>
      );
    }
  }

  render() {
    return (
      <div className="Article-image" >
      { this.state.editMode ? this.editRender() : this.viewRender() }
      </div>
    )
  }
}

ArticleImage.propTypes = {
  url: PropTypes.string.isRequired
}

export default ArticleImage;
