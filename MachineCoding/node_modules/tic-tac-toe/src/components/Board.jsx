import React, {useState} from "react";
import useBoardHook from "../hooks/useBoardHook";

const Board = () => {

    const {board, handleCellClick, handleDisplayMessage, handleReset} = useBoardHook();
    console.log("board", board);
    // console.log(handleDisplayMessage);

    return(
        <div className="w-40 h-40 ">
            <div className="w-full h-full grid grid-cols-3 gap-1">
                {board.map((cell,i)=>{
                    return(
                        <div
                            className="p-1 rounded bg-yellow-100 text-center"
                            key={i}
                            onClick={()=>handleCellClick(i)}
                        >
                            {cell}
                        </div>
                    )
                })}
            </div>
            <p className="font-bold text-3xl mt-10">{handleDisplayMessage()}</p>
            <button className="rounded p-3 bg-indigo-300" onClick={()=>handleReset()}>Restart</button>
        </div>
    )

}

export default Board;


/**
 * winning coditions : 
 * - diagonal cases : [0,4,8] , [2,4,6]
 * - row cases : [0,1,2] , [3,4,5] , [6,7,8]
 * - col cases : [0,3,6] , [1,4,7] , [2,5,8]
 * 
 * -> if one player makes a row/col/diagonal -> player wins -> game ends
 * 
 * draw conditions : 
 * - no matches, all cells filled 
 */