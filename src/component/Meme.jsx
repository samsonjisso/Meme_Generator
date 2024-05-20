import memeData from "../memeData";

function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

export default function Meme() {
  var randomImage;
  var randomizer = () => {
    var obj = getRandomElement(memeData.data.meme);
    randomImage = obj.URL;
    console.log(randomImage);
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
        <button onClick={randomizer} className="form--button">
          Get a new meme image 🖼
        </button>
      </div>
      <img src={randomImage} alt="Image"/>

    </main>
  );
}
