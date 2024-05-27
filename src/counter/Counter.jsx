import { useState } from "react"
import "./CounterCss.css"

export default function Counter(props) {
    

    return (
        <div className="counter--container">
            <button onClick={props.minus}>-</button>
            <h1>{props.count}</h1>
            <button onClick={props.add}>+</button>
        </div>
    )
}