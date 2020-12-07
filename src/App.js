import React, { useState } from 'react';

import CheckboxGroup from './CheckboxGroup';

function App() {
  const [values, setValues] = useState([]);

  const handleChange = (value) => {
    console.log('value ', value);
    setValues(value);
  }

  const props = {
    label: 'This is checkbox Group',
    description: 'This is description',
    options: [{
      value: 'OptionA',
      label: 'OptionA'
    }, {
      value: 'OptionB',
      label: 'OptionB'
    }, {
      value: 'OptionC',
      label: 'OptionC'
    }, {
      value: 'OptionD',
      label: 'OptionD'
    }, ]
  }

  // console.log('value ', values);

  return (
    <div>
      <CheckboxGroup {...props} onChange={handleChange} selectedValues={values} />
    </div>
  )
}

export default App;

/* 
https://github.com/trendmicro-frontend/react-checkbox/tree/master/src
https://trendmicro-frontend.github.io/react-checkbox/
*/