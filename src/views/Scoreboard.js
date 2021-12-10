import React, { useState } from "react";


export default function Game() {
  const [score, setScore] = useState(0); // Returns an arry(stateVariable, getStateVariable)

  const incrementScore = (incrementor) => {
    setScore(score + incrementor);
  };


  return (
    <div>
      <h2>Counter:{score}</h2>
      <button onClick={() => incrementScore(1)}>Increase Score</button>
      <button onClick={() => setScore(1)}>Save Score</button>
    </div>
  );
}
