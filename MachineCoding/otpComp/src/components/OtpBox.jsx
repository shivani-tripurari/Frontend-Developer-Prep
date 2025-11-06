import React, {useState, useRef, useEffect} from "react";
import { OTP_SIZE } from "../utils/constants";
const OtpBox = ({inputArr, setInputArr}) => {

    console.log("what is parent sending ", inputArr, setInputArr);

    //useRef
    const refArr = useRef([]);

    //runs only once the initial render (on mount)
    useEffect(()=>{
        refArr.current[0].focus();
    }, [])

    //handler functions 
    const handleOnChange = (e,index) => {

        const value = e.target.value.trim().slice(-1);
        if(isNaN(value)) return;
        //copying original array
        const newArr = [...inputArr];
        //setting newVal to newArr
        newArr[index] = value;
        //setting it to inputArr
        setInputArr(newArr);

        //now, after typing in one box, focus should shift to next box
        if(value !== ''){
            refArr.current[index+1]?.focus();
        } 

    }

    const handleBackspace = (e, index) => {
        console.log("event ", e);
        if(e.key === "Backspace" && e.target.value === ""){
            refArr.current[index-1]?.focus();
        }
    }

    const handleOnSubmit = () => {
        console.log("this is a valid otp ", inputArr);
    }

    console.log("our input array ", inputArr);

    return(
        <div className="flex flex-col justify-center items-center">
            <div className="flex gap-10 justify-center items-center mt-10">
                {inputArr.map((item, idx)=>{
                    return(
                        <input
                            key={idx}
                            value={item}
                            className="h-16 w-16 p-3 m-1 text-center border"
                            onChange={(e)=>handleOnChange(e, idx)}
                            ref={(elem)=>(refArr.current[idx]=elem)}
                            onKeyDown={(e)=>handleBackspace(e, idx)}
                        />
                    )
                })}
            </div>
            <button 
                onClick={()=>handleOnSubmit()}
                className="bg-green-600 font-bold text-white p-3 mt-10">
                Validate
            </button>
        </div>
    )
}

export default OtpBox;


/**
 * Approach - 
 * - build skeleton ui
 * - by default, focus should be on first box (when input is empty)
 * - after typing in one box, focus, cursor should shift to next box
 * - dont allow alphabets, special chars, spaces
 * - manage backspace handling
 */