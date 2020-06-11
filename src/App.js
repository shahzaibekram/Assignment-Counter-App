import React, {useState} from 'react';
import './App.css';

function App() {
  let[count, setCount]=useState(0)

  // *********Change light***********
  let[isMorning, setMorning]=useState(true)

  return (
    <div className= {`box ${isMorning ? 'daylight' : ''}`}>
      <h1>DayTime {isMorning ? 'Morning' : 'Night'}  </h1>

      {/* *********Counter******* */}
      <h1>Hello = {count} </h1>
      <button onClick={ ()=>setCount(count +1) }>Increment</button>

      <button onClick={ ()=>setCount(count -1)}>Decrement</button>
      
      <button onClick={ ()=> setMorning (!isMorning) }>Update day</button>
    </div>
  );
}

export default App;
