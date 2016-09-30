import React, { Component, PropTypes } from 'react';
import { connect} from 'react-redux';
import Cropper from 'react-cropper';
import EditMenu from '../components/EditMenu';
import { cropArticleImage } from '../actionCreators';
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
    this.ready = this.ready.bind(this);
  }

  saveCrop() {
    const { id, dispatch } = this.props;
    dispatch(cropArticleImage(id, this.refs.cropper.getCanvasData()));
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
    let style = {};
    if(this.props.imageWidth !== undefined) {
      style = {
        width: this.props.imageWidth,
        height: this.props.imageHeight,
        marginLeft: this.props.imageOffsetX,
        marginTop: this.props.imageOffsetY
      };
    }
    return (
      <img style={ style } src={ this.props.url } alt="" />
    );
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
          <EditMenu onSave={ this.saveCrop.bind(this) } />
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

export default connect()(ArticleImage);
