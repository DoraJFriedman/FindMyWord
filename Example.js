import React from "react";

export default function Example(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <ul key={index}>
            <li className="definition">{definition.definition}</li>
          </ul>
        );
      })}
    </div>
  );
}
