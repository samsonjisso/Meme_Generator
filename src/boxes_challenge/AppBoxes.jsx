import { useState } from "react";
import boxes from "./boxes";
import "./AppBoxes.css";
import Box from "./Box";

export default function AppBoxes() {
  const [squares, setSquares] = useState(boxes);
  const toggle = (id) => {
    setSquares((prevSquares) => {
     return prevSquares.map((square) => (square.id === id) ? {...square, on: !square.on} : square)
    });
  };
  const squareElements = squares.map((square) => (
    <Box key={square.id} on={square.on} toggle={() => toggle(square.id)} />
  ));
  return <>{squareElements}</>;
}
