import React from 'react';
import Icon from '../components/Icon';
import '../css/EditMenu.css';

const EditMenu = ({ children, onSave }) => (
  <div className="EditMenu">
    { children }
    <div onClick={ onSave }
      className="EditMenu-element EditMenu-save">
      <Icon name="check" /> Save
    </div>
  </div>
)

export default EditMenu;
