import React from "react"
import Board from "./components/Board"

function App() {


  return (
    <>
      <div className="flex flex-col justify-center items-center" >
        <h1 className="font-bold text-3xl text-indigo-700 text-center mt-20 p-10">Tic-Tac-Toe</h1>
        <Board/>
      </div>
    </>
  )
}

export default App
