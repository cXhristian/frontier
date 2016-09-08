import React, { Component } from 'react';
import Handlebar from '../components/Handlebar';
import { deleteArticleGroup, newArticleGroup } from '../actionCreators';
import { connect } from 'react-redux';

const DEFAULT_ALIGNMENT = 'left';

const mapDispatchToProps = (dispatch, props) => {
    return {
        deleteArticleGroup: () => {
            dispatch(deleteArticleGroup(props.groupId))
        },
        newArticleGroup: () => {
            dispatch(newArticleGroup(9, props.index, DEFAULT_ALIGNMENT)) // newId, index of this articleGroup, align
        }
    }
}

const mapStateToProps = (state, props) => {
    return {
        groupId: props.groupId,
        index: state.groupOrder.indexOf(props.groupId)
    }
}

class HandlebarContainer extends Component {
    render(){
        return(
            <Handlebar
            deleteArticleGroup={this.props.deleteArticleGroup}
            newArticleGroup={this.props.newArticleGroup}
             />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HandlebarContainer)
