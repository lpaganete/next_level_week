import React, { useState } from 'react';
import './App.css';

import Header from './Header';

function App() {
  const [counter, setCounter] = useState(0);

  function hendleButtonClick() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <Header title="Hello World"/>
      <Header title="Hello World 2"/>

      <h1>{counter}</h1>
      <h1>{counter * 10}</h1>     
      <button type="button" onClick={hendleButtonClick}>Aumentar</button> 
    </div>

  );
}

export default App;
