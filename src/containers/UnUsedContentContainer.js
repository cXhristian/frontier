import React from 'react';
import { DragSource } from 'react-dnd';
import UnUsedContent from '../components/UnUsedContent';
import * as ItemTypes from '../constants/ItemTypes';

/* Specify props to inject into component */
const collectContentProps = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}

/* Implement drag contract */
const contentDragSource =  {
  beginDrag: (props) => {
    return {
      content: props.content
    };
  }
}

class UnUsedContentContainer extends React.Component {
  render(){
    const {connectDragSource, connectDragPreview} = this.props;
    return (
      connectDragPreview(connectDragSource(<div><UnUsedContent content={this.props.content} /></div>))
    )
  }
}

UnUsedContentContainer = DragSource(ItemTypes.CONTENT, contentDragSource, collectContentProps)(UnUsedContentContainer);
export default UnUsedContentContainer;
