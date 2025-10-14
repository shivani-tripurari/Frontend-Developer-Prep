import React, {useState} from "react";

const Column = ({taskData, title}) => {
    console.log("what title is coming", title)
    return(
        <div className="flex flex-col justify-center items-center">
            <h3 className="font-bold text-xl text-red-700">{title}</h3>
            {taskData.map((data, i)=>(
                <div className="flex flex-col justify-center items-center">
                    <p key={i}>{data.Title}</p>
                    <p key={i}>{data.Description}</p>
                    <p key={i}>{data.Category}</p>
                </div>
            ))}
        </div>
    )
}

export default Column;