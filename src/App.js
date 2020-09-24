import React , {useState}from 'react';
import Message from './message'
import './App.css';

function App() {
  let [count, setcount] = useState(0);
  let [isMorning, setMoring] = useState(true);
  return(
    <div className={`box ${isMorning ? "time" : ''}`}>
      <h3 >Have A Good {isMorning ? 'Morning' : 'Night'}</h3>
      <Message counter={count}/>
      <button onClick={()=>setcount(++count)}>counter</button>
      <button onClick={()=> setMoring(!isMorning)}>Update DayTime</button>
    </div>
  );
  
}

export default App;
