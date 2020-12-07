import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Checkbox from './Checkbox';

const CheckboxGroup = (props) => {
  const { options = [], selectedValues = [], description, label, onChange} = props;
  const [values, setValues] = useState(selectedValues);

  const handleChange = (value, e) => {
    const currentValue = value;
    let allValues = []
      if (e.target.checked) {
        allValues = [...values, currentValue];
      } else {
        allValues = values.filter(item => item !== currentValue);
      }
      setValues(allValues);
      onChange(allValues);
  }

  return (
    <div>
      <p>{label}</p>
      <p>{description}</p>
      <div>
        {(options.map(item => <Checkbox {...item} key={item.value} checked={values.includes(item.value)} onChange={handleChange}/>))}
      </div>
    </div>
  )
}

export default CheckboxGroup;

CheckboxGroup.protoTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  selectedValues: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
}
