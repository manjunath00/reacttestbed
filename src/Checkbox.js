import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Checkbox(props) {
  const { checked, label, value, onChange } = props;
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (e) => {
    const { value } = e.target;
    if (e.target.checked) {
      setIsChecked(e.target.value);
    } else {
      setIsChecked(null);
    }

    if(onChange) {
      onChange(value, e);
    }
  }

  return (
    <div>
      <input type="checkbox" value={value} onChange={handleChange} checked={isChecked}/>
      <label>{label}</label>
    </div>
  );
} 

export default Checkbox;

Checkbox.protoTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.number,
}