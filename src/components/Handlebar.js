import React, { PropTypes } from 'react';

const Handlebar = ({ newArticleGroup, deleteArticleGroup }) => {

    return(
        <div className="ArticleGroup-handlebar" >
            <div className="handlebar-icon-container">
            <i className="fa fa-trash-o fa-2x" onClick={deleteArticleGroup}/>
            </div>
            <div className="handlebar-icon-container">
            <i className="fa fa-plus fa-2x" onClick={newArticleGroup}/>
            </div>
        </div>);
}

Handlebar.propTypes = {
    deleteArticleGroup: PropTypes.func.isRequired,
    newArticleGroup: PropTypes.func.isRequired
}

export default Handlebar;
