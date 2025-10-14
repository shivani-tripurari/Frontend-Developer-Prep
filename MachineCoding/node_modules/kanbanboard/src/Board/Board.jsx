import React, {useState} from "react";
import Column from "./Column";

const Board = ({taskList, goBack}) => {
    console.log("The list of tasks in board component", taskList)
    const todoTask = taskList.filter(item => item.Category === "to-do");
    const inpTask = taskList.filter(item => item.Category === "in-progress");
    const completedTask = taskList.filter(item => item.Category === "completed");
    console.log("todo filter", todoTask)
    console.log("inp filter", inpTask)
    console.log("completed filter", completedTask)
    console.log("title i am sending", todoTask.filter(item=>item.Category))
    return(
        <>
            <h2 className="text-3xl text-amber-300">This is board component</h2>
            <div className="flex justify-evenly items-center">
                <Column taskData={todoTask} title="To-Do"/>
                <Column taskData={inpTask} title="In-Progress"/>
                <Column taskData={completedTask} title="Completed"/>
            </div>
            <button onClick={goBack}>Add a new task</button>
        </>
    )
}

export default Board;

/*
- getting all taskList from parent
- filter on basis of category
- display in separate columns 
*/