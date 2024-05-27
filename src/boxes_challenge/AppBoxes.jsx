import { useState } from "react";
import boxes from "./boxes";
import "./AppBoxes.css"
import Box from "./Box";

export default function AppBoxes() {
  const [squares, setSquares] = useState(boxes);
  const squareElements = squares.map(square => <Box key={square.id} on={square.on}/>)
  return (<>{squareElements}</>);
}
