import { useState } from "react"
import Header from "./Header"
import Body from "./Body"
import "./AppData.css"


export default function AppData () {
    const [contactName, setContactName] = useState("samson")
    return(
        <>
        <Header name={contactName} setContactName={setContactName}/>
        <Body name={contactName} setContactName= {setContactName}/>
        </>
    )
}