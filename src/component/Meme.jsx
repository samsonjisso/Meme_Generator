import { useState } from "react";
import memeData from "../memeData";

export default function Meme() {
  const [meme, setMeme] = useState(
    {
      topText: "",
      bottomText: "",
      url:"/assets/image_1.jpeg"
    }
  )
  const [memeImages, setMemeImage] = useState(memeData.data.meme);
  const getRandomElement = () => {
    const memeArray = memeImages;
    const randomIndex = Math.floor(Math.random() * memeArray.length); 
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        url: `${memeArray[randomIndex].URL}`
      }
    })
  };
  return (
    <main>
      <div className="form">
        <input
          placeholder="Top Text"
          className="form--inputs"
          type="text"
        ></input>
        <input
          placeholder="Bottom Text"
          className="form--inputs"
          type="text"
        ></input>   
        <button onClick={getRandomElement} className="form--button">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="random--image--container"> 
      <img src={meme.url} className="random--image" alt="Image" />
      </div>
    </main>
  );
}
