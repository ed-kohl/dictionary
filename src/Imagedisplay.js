import React from "react";
import "./Imagedisplay.css";

/*let [images, setImages] = useState("");

let imageUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=f08f864ef6a33151ee24fc3db63obtbb`;
axios.get(imageUrl).then(handleImageResponse);*/

export default function Imagedisplay() {
  return (
    <div className="Imagedisplay">
      <img src="https://via.placeholder.com/150" alt="placeholder" />
    </div>
  );
}
