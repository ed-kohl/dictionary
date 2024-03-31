import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Imagedisplay from "./Imagedisplay.js";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [meanings, setMeanings] = useState("");

  function handleResponse(response) {
    setMeanings(response.data.meanings);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=f08f864ef6a33151ee24fc3db63obtbb`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);

    console.log(keyword);
  }

  return (
    <div className="Dictionary">
      <h1>Dictionary</h1>
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
      </form>
      <div className="definition">
        {Array.isArray(meanings) &&
          meanings.map((meaning, index) => (
            <div key={index}>
              <h2>{index + 1} .</h2>
              <p>Part of Speech: {meaning.partOfSpeech}</p>
              <p>Definition: {meaning.definition}</p>
              <p>Example: {meaning.example}</p>
              <p>
                Synonyms:{" "}
                {meaning.synonyms ? meaning.synonyms.join(", ") : "None"}
              </p>
              <p>
                Antonyms:{" "}
                {meaning.antonyms ? meaning.antonyms.join(", ") : "None"}
              </p>
              <p>
                <Imagedisplay />
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
