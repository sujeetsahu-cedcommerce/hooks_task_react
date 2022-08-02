import React from 'react'
import { useState } from 'react';
import { useMemo } from 'react';
function DelayComponent() {
    const [counter1,setCounter1] = useState(0);
    const [counter2,setCounter2] = useState(0);
    
    const increment1 = () => {
        setCounter1(counter1+1);
    }

    const increment2 = () => {
        setCounter2(counter2+1);
    }
    
    const is_even = useMemo(() => {
        let i=0;
        while (i<=2000000000) i++
        return counter1%2===0;
    },[counter1])

  return (
    <div style={{marginTop:"50px"}}>
        <div>
            <button onClick={increment1}>increment 1 - {counter1}</button>
            <span>{is_even ? 'even' : 'odd'}</span>
        </div>
        <div>
            <button onClick={increment2}>increment 2 - {counter2}</button>
        </div>
    </div>
  )
}

export default DelayComponent