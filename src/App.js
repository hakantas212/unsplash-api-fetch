import React, { useState, useEffect } from "react";

import "./index.css";
import axios from "axios";
import Photos from "./components/Photos";

function App() {
  const [images, setImages] = useState();
  const accessKey =
    "d5aeca2e0d9de8c9724b8ccffa6e1c7f0b9eefd73acc42ce1d64be3b421f8ad9";

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    axios
      .get(
        `https://api.unsplash.com/users/hakantas212/photos/?&per_page=50&client_id=${accessKey}`
      )
      .then(res => {
        setImages(res.data);
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <div>
        <Photos images={images} />
      </div>
    </div>
  );
}

export default App;
