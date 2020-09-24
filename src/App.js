import React , {useState}from 'react';
import Message from './message'
import './App.css';

function App() {
  let [count, setcount] = useState(0);
  let [isMorning, setMorning] = useState(false);

  return (
    <div className={`box ${isMorning ? 'time': ''}`}>
      <h3>GoodNight {isMorning ? 'Morning': 'Night'}</h3>
      <Message  counter={count}/>
      <button onClick={()=> setcount(++count)}>Next Count</button>
      <button onClick={()=> setMorning(!isMorning)}>Update</button>
      
    </div>
  );
}

export default App;
