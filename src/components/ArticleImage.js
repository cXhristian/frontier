import React, { Component, PropTypes } from 'react';
import Cropper from 'react-cropper';
import EditMenu from '../components/EditMenu';
import classNames from 'classnames';
import 'cropperjs/dist/cropper.css';
import '../css/ArticleImage.css';

class ArticleImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cropMode: false,
      editMode: true,
      height: null
    };
  }

  saveCrop() {
    console.log(this.refs.cropper.getData(true));
    this.setState({
      cropMode: false
    });
  }

  enableCropMode() {
    this.setState({
      cropMode: true,
      height: this.refs.image.clientHeight
    });
  }

  viewRender() {
    return (
      <img src={ this.props.url } alt="" />
    );
  }

  editRender() {
    const { url } = this.props;
    if(this.state.cropMode) {
      return (
        <div className="ArticleImage-cropper">
          <EditMenu onSave={ this.saveCrop.bind(this) } />
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
            style={{ height: this.state.height }}
            src={ url }
          />
        </div>
      );
    }
    else {
      return (
        <div onClick={ this.enableCropMode.bind(this) }>
          { this.viewRender() }
        </div>
      );
    }
  }

  render() {
    const imageClass = classNames('ArticleImage', {
      'ArticleImage--crop': this.state.cropMode
    });
    return (
      <div ref="image" className={ imageClass } >
      { this.state.editMode ? this.editRender() : this.viewRender() }
      </div>
    )
  }
}

ArticleImage.propTypes = {
  url: PropTypes.string.isRequired
}

export default ArticleImage;
