import React, { useState } from 'react'
import { useContext } from 'react'
import { ContextData } from './App'
function ComponentD() {
    const [username ,setUserName] = useState(useContext(ContextData));
    console.log(useContext(ContextData));
  return (
    <div>
        <h1>{username}</h1>
    </div>
  )
}

export default ComponentD