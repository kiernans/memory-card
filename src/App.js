import React, { useState } from "react";
import Card from './components/Card';
import Header from "./components/Header";
import './styles/App.css'

const App = () => {

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="App">
      <Header score={score} bestScore={bestScore}/>
      <Card score={score} bestScore={bestScore}/>
    </div>
  );
}

export default App;
