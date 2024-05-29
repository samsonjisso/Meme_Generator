import { useState } from "react";
import jokesData from "./jokes";

export default function AppJokes() {
  const [jokes, setJokes] = useState(jokesData);
  const [isShown, setShow] = useState(false);
  const toggleShow  = () => {
    setShow(prevShow => !prevShow)
  }
  const jokeLines = jokes.map((joke) => {
    return (
      <div>
        <h1>{joke.setup}</h1>
        <h3>{isShown ? joke.punchline : ""}</h3>
        <button onClick={toggleShow}>show</button>
        <hr />
      </div>
    );
  });
  return <>{jokeLines}</>;
}
