import React, { useEffect } from "react";
import { useState } from "react";
const CurrentTimeClockdown = () => {
  var timer;
  const [hr, sethr] = useState(new Date().getHours());
  const [min, setmin] = useState(new Date().getMinutes());
  const [sec, setsec] = useState(new Date().getSeconds());

  const clickhere = () => {
    timer = setInterval(() => {
      setsec((sec) => sec - 1);
    }, 1000);
  };

  useEffect(() => {
    console.log(sec);
    if (sec < 1) {
      setsec(59);
      setmin(min - 1);
    }
    if (min < 1) {
      setsec(59);
      setmin(59);
      sethr(hr - 1);
    }

    if(hr===0 && min===0 && sec ===0){
      setsec(59);
      setmin(59);
      sethr(23);
    }
  }, [sec]);

  return (
    <>
      <div>
        {hr}:{min}:{sec}
      </div>
      <button onClick={clickhere}>Start</button>
    </>
  );
};

export default CurrentTimeClockdown;
