import { useState } from "react";
import useCopyToClipboard from "use-copy-to-clipboard-hook"

function App() {

  const {copied, copy} = useCopyToClipboard();
  //local states
  const[text, setText] = useState("");

  //local handlers
  const handleOnChange = (e) => {
    setText(e.target.value);
  }

  return (
    <div className="m-24 flex flex-col">
      <h1 className="my-10 font-bold text-3xl">Try to copy using the button</h1>
      <input
        placeholder="Type something to copy..."
        className="p-3 border border-sky-300 rounded"
        value={text}
        onChange={(e)=>handleOnChange(e)}
      />
      <button
        onClick={()=>copy(text)}
        className="p-1 rounded bg-sky-300 text-white"
      >Copy</button>
      {copied && <>Copied!!! {text}</>}
    </div>
  )
}

export default App
