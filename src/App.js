import React, { useState } from "react";
import Card from './components/Card';
import Header from "./components/Header";
import './styles/App.css'

const App = () => {

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const incrementScore = () => {
    setScore(score + 1);
  };

  const updateBestScore = () => {
    setBestScore(score);
  };

  return (
    <div className="App">
      <Header score={score} bestScore={bestScore}/>
      <Card score={score} 
            bestScore={bestScore} 
            incrementScore={incrementScore} 
            updateBestScore={updateBestScore}/>
    </div>
  );
}

export default App;
