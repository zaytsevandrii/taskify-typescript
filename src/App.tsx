import React from 'react';

import './App.css';
import InputField from './components/InputField';

const App:React.FC=()=>{
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField/>
    </div>
  );
}
//20-09
export default App;
