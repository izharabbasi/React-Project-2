import React , {useState}from 'react';
import './App.css';

function App() {
  let [count, setcount] = useState(0)

  return (
    <div>
      <h3>The value of counter is: {count}</h3>
      <button onClick={()=> setcount(++count)}>Next Count</button>
      
    </div>
  );
}

export default App;
