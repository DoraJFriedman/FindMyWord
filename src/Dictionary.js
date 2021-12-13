import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    // documentation: https://dictionaryapi.dev/e
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionResponse);

    let pexelsApiKey =
      "563492ad6f9170000100000170417bcd117d4bb5a063281ed69d6407";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <div className="header-box">
            <h1>Find My Word</h1>
            <center>
              <h2>What word do you want to look up?</h2>
            </center>
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                onChange={handleKeywordChange}
                defaultValue={props.defaultKeyword}
              />
            </form>
            <div className="hint">
              suggested words: coffee, magic, plant, bicycle...
            </div>
          </div>
        </section>
        <section class="lovely">
          <Results results={results} />
          <Photos photos={photos} />
        </section>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
