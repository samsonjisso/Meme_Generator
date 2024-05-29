import { useState } from "react";

export default function Joke(props) {
  const [isShown, setShow] = useState(false);
  const toggleShow = () => {
    setShow((prevShow) => !prevShow);
  };
  return (
    <div>
      <h1>{props.setup}</h1>
      {isShown && <h3>{props.punchline}</h3>}
      <button onClick={toggleShow}>{isShown ? "Hide" : "Show"} punchline</button>
      <hr />
    </div>
  );
}
