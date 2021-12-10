import React from "react";
import { Route, Routes } from "react-router-dom";
import Display from "./Display";
import Scoreboard from "./Scoreboard"


export default function Main() {
  return (
    <div>
      <main className="container">
        <Routes>
          <Route path="/" element={ <Display /> } />
          <Route path="/scoreboard" element={ <Scoreboard /> } />
        </Routes>
      </main>
    </div>
  );
}