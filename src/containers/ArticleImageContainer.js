import React, { Component } from 'react';
import { connect} from 'react-redux';
import Cropper from 'react-cropper';
import EditMenu from '../components/EditMenu';
import ArticleImage from '../components/ArticleImage';
import { cropArticleImage } from '../actionCreators';
import 'cropperjs/dist/cropper.css';

class ArticleImageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cropMode: false,
      editMode: true,
      height: null
    };
    this.cancelCrop = this.cancelCrop.bind(this);
    this.enableCropMode = this.enableCropMode.bind(this)
    this.ready = this.ready.bind(this);
    this.saveCrop = this.saveCrop.bind(this);
  }

  saveCrop() {
    const { id, dispatch } = this.props;
    dispatch(cropArticleImage(id, this.refs.cropper.getCanvasData()));
    this.setState({
      cropMode: false
    });
  }

  cancelCrop() {
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
    return <ArticleImage { ...this.props } />;
  }

  ready() {
    this.refs.cropper.setCanvasData({
      left: this.props.imageOffsetX,
      top: this.props.imageOffsetY,
      width: this.props.imageWidth,
      height: this.props.imageHeight
    });
  }

  editRender() {
    const { url } = this.props;
    if(this.state.cropMode) {
      return (
        <div className="ArticleImage-cropper">
          <EditMenu onSave={ this.saveCrop } onCancel={ this.cancelCrop } />
          <Cropper
            ref='cropper'
            viewMode={ 3 }
            dragMode='move'
            autoCrop={ false }
            restore={ false }
            modal={ false }
            highlight={false }
            cropBoxMovable={ false }
            cropBoxResizable={ false }
            toggleDragModeOnDblclick={ false }
            guides={ false }
            style={{ height: this.state.height }}
            src={ url }
            ready={ this.ready }
          />
        </div>
      );
    }
    else {
      return (
        <div ref="image" className="ArticleImage-wrapper" onClick={ this.enableCropMode }>
          { this.viewRender() }
        </div>
      );
    }
  }

  render() {
    return this.state.editMode ? this.editRender() : this.viewRender();
  }
}

ArticleImageContainer.propTypes = ArticleImage.propTypes;

export default connect()(ArticleImageContainer);
