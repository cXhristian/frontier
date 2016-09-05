import React, { Component, PropTypes } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

class ArticleImage extends Component {
  constructor(props) {
    super(props);

    this.editMode = false;
  }
  _crop() {
    // console.log(this.refs.cropper.getCroppedCanvas().toDataURL());
  }

  viewRender() {
    return (
      <img src={ this.props.url } alt="" />
    )
  }

  editRender() {
    const { url } = this.props;
    return (
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
          crop={this._crop.bind(this)} />
    );
  }

  render() {
    return (
      <div className="Article-image" >
      { this.editMode ? this.editRender() : this.viewRender() }
      </div>
    )
  }
}

ArticleImage.propTypes = {
  url: PropTypes.string.isRequired
}

export default ArticleImage;
