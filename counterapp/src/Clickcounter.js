
import React from 'react'
import { useState } from 'react';
const ClickCounter = () => {
  const [count, setCount] = useState('');
  return (
    <div>
    <center>
    <button className="count" onClick={()=>setCount(count+1)}>
    Increment
    </button>
  <button className="count" onClick={()=>setCount(count-1)}>
    decrement
    </button> 
    <div className='box'>
    <p>{count}</p></div>
    
    <button className="count" onClick={()=>setCount('enter a number')}>
    reset
    </button>
    </center>
    
    </div>
  )
}

export default ClickCounter
