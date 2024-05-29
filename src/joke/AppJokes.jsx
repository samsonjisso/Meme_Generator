import { useState } from "react";
import jokesData from "./jokes";
import Joke from "./Joke";

export default function AppJokes() {
  const [jokes, setJokes] = useState(jokesData);
  const jokeLines = jokes.map((joke) => <Joke setup={joke.setup} punchline={joke.punchline} />);
  return <>{jokeLines}</>;
}
