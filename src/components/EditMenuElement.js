import React from 'react';
import Icon from '../components/Icon';

const EditMenuElement = ({ icon, value, onChange }) => (
  <div className="EditMenu-element">
    <Icon name={ icon } />
    <input value={ value } onChange={ onChange }
      min="10" max="100" type="number" />
  </div>
);

export default EditMenuElement;
