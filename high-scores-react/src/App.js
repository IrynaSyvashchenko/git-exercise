
import './App.css';
import React from "react";
import TableOfScore from './Table';
import allCountryScores from './scores';

function App() {
  return (
    <div className="App">
 <h1>Hight Scores per Country</h1>
    <TableOfScore allCountryScores = {allCountryScores} />
    </div>
  );
}

export default App;
