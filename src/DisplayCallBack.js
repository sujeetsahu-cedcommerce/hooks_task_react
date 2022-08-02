import React, { useState } from "react";

function DisplayCallBack({getItem}) {
  const [item, set_items] = useState([]);
  React.useEffect(() => {
    console.log("updating...");
    set_items(getItem());
  }, [getItem]);
  
  return (
    <div>
      <ul>
        {item.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayCallBack;
