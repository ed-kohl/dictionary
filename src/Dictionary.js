import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [meanings, setMeanings] = useState("");
  let [images, setImages] = useState("");

  function handleResponse(response) {
    setMeanings(response.data.meanings);
  }

  function handleImageResponse(response) {
    if (
      response.data &&
      response.data.photos &&
      Array.isArray(response.data.photos)
    ) {
      const imageUrls = response.data.photos
        .map((photo) => photo.url)
        .slice(0, 3); // Take only the first 3 URLs
      setImages(imageUrls);
    } else {
      console.error("No images in response", response);
      setImages([]);
    }
  }
  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=f08f864ef6a33151ee24fc3db63obtbb`;
    axios.get(apiUrl).then(handleResponse);

    let imageUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=f08f864ef6a33151ee24fc3db63obtbb`;
    axios.get(imageUrl).then(handleImageResponse);
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
                {meaning.antonyms ? meaning.synonyms.join(", ") : "None"}
              </p>
              <div>
                {/* ... rest of your component code ... */}

                {images.map((imageUrl, index) => (
                  <img key={index} src={imageUrl} alt="" />
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
