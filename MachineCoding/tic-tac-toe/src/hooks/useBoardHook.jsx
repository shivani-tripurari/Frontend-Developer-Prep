import { useState } from "react";

//initially just using 3X3 grid
const initialBoard = Array(9).fill(null);

const useBoardHook = () => {
    const [board, setBoard] = useState(initialBoard);
    const [isPlayerX, isSetPlayerX] = useState(true);

    // just using hard coded cases now
    const winnerCases = [
        [0,4,8] , [2,4,6],
        [0,1,2] , [3,4,5] , [6,7,8],
        [0,3,6] , [1,4,7] , [2,5,8]
    ]

    const handleCheckWinner = (currBoard) => {
        console.log("inside winner check handler", currBoard);
        //loop over winningCases array and destucture indices and compare with board 
        for(let idx = 0; idx<winnerCases.length; idx++){
            const [i,j,k] = winnerCases[idx];
            if(board[i] && board[i]===board[j] && board[i]===board[k]){
                return board[i];
            }
        }
        return null;
    }

    const handleCellClick = (i) => {
        console.log("inside cell click handler", i);
        console.log("player X", isPlayerX);

        //change board-cells when clicked
        const newBoard = [...board];
        newBoard[i] = isPlayerX ? "X" : "O";
        setBoard(newBoard);

        //toggle player
        isSetPlayerX((prev)=>!prev);

        //check for winning condition
        const winner = handleCheckWinner(newBoard);
        console.log("winner is : ", winner);
    }

    const handleDisplayMessage = () => {
        const winner = handleCheckWinner(board);
        //displays winning message
        if(winner){
            return `Player ${winner} wins !`;
        }
        //displays draw message -> all cells filled
        if(!board.includes(null)){
            return `It's a draw !`;
        }
        //to display turn of player 
        return `Player ${isPlayerX ? "X" : "O"} turn...`

    }

    const handleReset = () => {
        console.log("resetting game");
        setBoard(initialBoard);
        isSetPlayerX(true);
    }

    return {board, handleCellClick, handleDisplayMessage, handleReset}

}

export default useBoardHook;

/**
 * All logic inside this file
 * - local states : board, player
 * - functions : 
 *   - handleCellClick 
 *   - handleCheckWinner
 *   - handleDisplayMessage
 *   - handleReset
 */