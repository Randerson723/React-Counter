import React, { useState } from "react";



export default function Display(){
  const [count, setScore] = useState(0); // Returns an arry(stateVariable, getStateVariable)

  const incrementCount = (incrementor) => {
    setScore(count + incrementor);
  }
  return(
    <div>
      <h1>Contact</h1>
      <button onClick={() => incrementCount(1)}>Up</button>  
      <button onClick={() => setScore(count+1)}>Save Score</button>
      <button onClick={() => incrementCount(-1)}>Down</button>
      <h1>Counter:{count}</h1>
    </div>
  )
}