import React,{useState} from "react"
import { checkboxData } from "./data/checkboxData"
import Checkboxes from "./components/Checkboxes"

function App() {

  console.log("data", checkboxData);
  
  //loacl states
  //the structure should be id : true/false
  const[checked, setChecked] = useState({})
  console.log("what are checked ", checked);

  return (
    <>
      <Checkboxes localData={checkboxData} globalData={checkboxData} checked={checked} setChecked={setChecked} />
    </>
  )
}

export default App
