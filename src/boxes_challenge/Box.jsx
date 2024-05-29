import { useState } from "react"

export default function Box(props) {

    const style = {
        backgroundColor: props.on ? "#4287f5" : "white"
    }
    return (
        <div onClick={props.toggle} style={style} className="box"></div>
    )
}