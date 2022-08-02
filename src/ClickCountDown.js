import React, { useState} from 'react'

const ClickCountDown = () => {
    const [count,setCount] = useState(0);
  return (
    <div>
        <div>
          <button onClick={() =>setCount(count+1)}>{count}</button>
        </div>
    </div>
  )
}

export default ClickCountDown