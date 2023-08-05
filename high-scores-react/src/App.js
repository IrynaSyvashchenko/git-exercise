
import './App.css';
import React, {useState} from "react";
import TableOfScore from './Table';
import allCountryScores from './scores';
import Button from './Button';
import TableWorldWide from './TableWorldWide';

function App() {
  const [sort, setSort] = useState(true);
  return (
    <div className="App">
       <h1>Hight Scores of World</h1>
       <Button sort = {sort} setSort={setSort}/>
       <TableWorldWide allCountryScores = {allCountryScores} sort={sort}/>

 <h1>Hight Scores per Country</h1>
    <TableOfScore allCountryScores = {allCountryScores} sort={sort}/>
    </div>
  );
}

export default App;
