import { useState } from 'react'
import UserInput from './UserInput'
import Board from './Board/Board';
import './App.css'

function App() {

  //states
  const [showBoard, setShowBoard] = useState(false);
  const [taskList, setTaskList] = useState([])

  //handler functions
  //1. Adding tasks to task list
  const handleAddTask = (taskData) => {
    console.log("Adding the task data coming from child to taskList");
    setTaskList(prev=>[...prev, taskData])

    setShowBoard(true)
  }
  console.log("Tasks list : ", taskList)
  //2. Sending these tasks to board
  const handleSendTask = () => {
    console.log("inside handle send task function")
  }
  //3. On going back to form from board
  const onHandleBack = () => {
    setShowBoard(false)
  }

  return (
    <>
      <h1 className='font-bold text-3xl text-red-700'>Testing node modules</h1>
      {showBoard ? (
        <Board taskList={taskList} goBack={onHandleBack}/>
      ) : (
        <UserInput onFormSubmit={handleAddTask}/>
      )}
    </>
  )
}

export default App


/*
  approach : 
    - parent component (toggles between form, board)
    - UserInput, Board sibbling elements
    - Data(task data) from UserInput is sent to Parent -> stores in task list -> sends to board -> Task data shown in board
    -   
*/