import React, { useState } from 'react';

function App({ checked, label, value}) {
  const [isChecked, setIsChecked] = useState(checked);

  const onChange = (e) => {
    console.log('e ', e.target.value);
    if (e.target.checked) {
      setIsChecked(e.target.value);
    } else {
      setIsChecked(null);
    }
  }


  return (
    <div>
      <input type="checkbox" value={value} onChange={onChange} checked={isChecked}/>
      <label>{label}</label>
    </div>
  );
} 

export default App;
