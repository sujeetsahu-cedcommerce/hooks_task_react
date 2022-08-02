import React, { useState } from 'react'

function CounterIncrementDecrement() {
    const [count,setCount] = useState(0);
     
  return (
    <div>
        <div>{count}</div>
        <button onClick={()=>{setCount(count+1)}}>+</button>
        <button onClick={()=>{setCount(count-1)}}>-</button>
        <button onClick={()=>{setCount(0)}}>reset</button>
    </div>
  )
}

export default CounterIncrementDecrement