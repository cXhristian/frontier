import React, { PropTypes } from 'react';
import '../css/Handlebar.css'

const Handlebar = ({ newArticleGroup, deleteArticleGroup }) => {
    return(
        <div className="Handlebar" >
            <div className="Icon">
            <i className="fa fa-trash-o fa-2x" onClick={deleteArticleGroup}/>
            </div>
            <div className="Icon">
            <i className="fa fa-plus fa-2x" onClick={newArticleGroup}/>
            </div>
        </div>);
}

Handlebar.propTypes = {
    deleteArticleGroup: PropTypes.func.isRequired,
    newArticleGroup: PropTypes.func.isRequired
}

export default Handlebar;
