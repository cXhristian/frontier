import React from 'react';
import Icon from '../components/Icon';
import '../css/EditMenu.css';

const EditMenu = ({ children, onSave, onCancel }) => (
  <div className="EditMenu">
    { children }
    <div onClick={ onSave }
      className="EditMenu-element EditMenu-save">
      <Icon name="check" /> Save
    </div>
    <div onClick={ onCancel }
      className="EditMenu-element EditMenu-cancel">
      <Icon name="times" /> Cancel
    </div>
  </div>
)

export default EditMenu;
