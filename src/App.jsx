
import { useState } from "react";
import AppForm from "./form/AppForm";

function App() {
  const [message, setMsg] = useState([])
  return (
     // <>
    //   <NavBar />
    //   <Meme />
    // </>
    <AppForm/>
  );
}

export default App;
