import React, { PropTypes } from 'react';
import Icon from './Icon';
import '../css/Handlebar.css'

const Handlebar = ({ newArticleGroup, deleteArticleGroup }) => {
    return(
        <div className="Handlebar" >
            <Icon size="2x" name="trash" onClick={ deleteArticleGroup } />
            <Icon size="2x" name="plus" onClick={ newArticleGroup } />
        </div>);
}

Handlebar.propTypes = {
    deleteArticleGroup: PropTypes.func.isRequired,
    newArticleGroup: PropTypes.func.isRequired
}

export default Handlebar;
