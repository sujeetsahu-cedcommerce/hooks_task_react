import React from "react";
import { useMemo } from "react";
import { useState } from "react";
function UseMemoToggleTheme() {
  const [input_value, set_input_value] = useState(0);
  const [theme_value, set_theme_value] = useState("gray");

  const value = useMemo(() => {
    return input_value;
  }, [input_value]);

  const toggle_theme = () => {
    if(theme_value === "gray"){
      set_theme_value("white");
    }
    else{
      set_theme_value("gray");
    }
  }

  return (
    <div style={{border:"1px solid black",width:"50vw",margin:"auto",height:"40vh",backgroundColor:theme_value}}>
      <input type="number" value={input_value} onChange={(event) => set_input_value(event.target.value)}></input>
      <div>
         <button onClick={toggle_theme}>Toggle theme</button>
      </div>
      <div>{value}</div>
      <div>{Number(value) + 1}</div>
      <div>{Number(value) + 2}</div>
    </div>
  );
}

export default UseMemoToggleTheme;
