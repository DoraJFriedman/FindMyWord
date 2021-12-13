import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning" id="meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <strong>Definition:</strong>
            <div className="definition">{definition.definition}</div>
            <br />
            <div className="example" id="example">
              <em>{definition.example}</em>
            </div>
            <br />
            <Synonyms synonyms={definition.synonyms} />
            <br />
          </div>
        );
      })}
    </div>
  );
}
