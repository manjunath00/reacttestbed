import React, { useState } from 'react';

import Checkbox from './Checkbox';

function App() {
  return (
    <div>
      <Checkbox value='optionA' label='optionA' />
      <Checkbox value='optionB' label='optionB' />
      <Checkbox value='optionC' label='optionC' />
      <Checkbox value='optionD' label='optionD' />
    </div>
  )
}

export default App;
