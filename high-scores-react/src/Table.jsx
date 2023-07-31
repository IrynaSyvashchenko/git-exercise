import React from "react";


const TableOfScore = ({allCountryScores}) => {
    return (
        <>
{allCountryScores.map((element) => {
    return(
<div key={element.name} className="score-per-country">
    <h2>HIGH SCORES: {element.name}</h2>
<div className="table">
    {element.scores.map((name) => {
        return (
            <div className="table-name" key={name.n}>
            <div className="name">{name.n}</div>
            <div className="score">{name.s}</div>
            </div>
        )
    })}
</div>
</div>)
})}
</>
    )
}

export default TableOfScore;


