import { useState } from "react"

export default function Box(props) {
    const [on, setOn] = useState(props.on)

    const style = {
        backgroundColor: on ? "#4287f5" : "white"
    }
    const toggle = () => {  
        setOn((prevOn) => !prevOn)
    }
    return (
        <div onClick={toggle} style={style} className="box"></div>
    )
}