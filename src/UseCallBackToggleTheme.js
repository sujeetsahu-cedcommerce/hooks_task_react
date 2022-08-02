import React, { useCallback } from 'react'
import DisplayCallBack from './DisplayCallBack';
import { useState } from 'react';
function UseCallBackToggleTheme() {
    const[num,set_num] = useState(0);
    const[theme,set_theme] = useState("gray");
    
    const getItem = useCallback(() => {
      return[Number(num),Number(num)+1,Number(num)+2]
    },[num]) 

    const toggle = () => {
      if(theme === 'gray'){
        set_theme("white");
      }
      else{
        set_theme("gray");
      }
    }

    return (
        <div style={{border:"1px solid black",width:"50vw",margin:"auto",height:"40vh",backgroundColor:theme}}>
          <input type="number" onChange={(event)=>set_num(event.target.value)}></input>
          <div>
             <button onClick={toggle}>Toggle theme</button>
          </div>
          <DisplayCallBack getItem={getItem}/>
        </div>
      );
}

export default UseCallBackToggleTheme