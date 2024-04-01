import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

function Dictionary() {
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
        <button>Search</button>
      </form>
      <div className="definition">
        {Array.isArray(meanings) &&
          meanings.map((meaning, index) => (
            <div key={index}>
              <h3>{index + 1} .</h3>

              <div className="results">
                <p className="category">Definition: </p>
                <p className="majordef">
                  <b>
                    {""}
                    {Array.isArray(meaning.definition)
                      ? meaning.definition.join(",")
                      : meaning.definition || "None"}
                  </b>
                </p>
              </div>
              <div className="results">
                <p className="category">Part of Speech: </p>
                <p>
                  {""}
                  {Array.isArray(meaning.partOfSpeech)
                    ? meaning.partOfSpeech.join(",")
                    : meaning.partOfSpeech || "None"}
                </p>
              </div>
              <div className="results">
                <p className="category">Example: </p>
                <p>
                  {""}
                  {Array.isArray(meaning.example)
                    ? meaning.example.join(",")
                    : meaning.example || "None"}
                </p>
              </div>
              <div className="results">
                <p className="category">Synonyms:</p>
                <p>
                  {""}
                  {Array.isArray(meaning.synonyms)
                    ? meaning.synonyms.join(",")
                    : meaning.synonyms || "None"}
                </p>
              </div>
              <div className="results">
                <p className="category">Antonyms:</p>
                <p>
                  {""}
                  {Array.isArray(meaning.antonyms)
                    ? meaning.antonyms.join(",")
                    : meaning.antonyms || "None"}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Dictionary;
