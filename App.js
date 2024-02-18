
import './App.css';
import React, { useState } from 'react';
import './style.css';

function App()
{
    const[count,setCount]=useState(0);
    function decHandler()
    {
      setCount(count-1);
    }
    
    function incHandler()
    {
      setCount(count+1);
    }
    function resetHandler()
    {
      setCount(0);
    }

  return(
    <div className='top'>
      
        <h1>Increment && Decrement</h1>    
    <div className='main'>
      <button onClick={decHandler} className='dec'>-</button>
      <div className='count'>{count}</div>
      <button onClick={incHandler} className='inc'>+</button>
    </div>
    <button className='reset' onClick={resetHandler}>reset</button>
    </div>
  );
}

export default App;