import React, {useState} from "react";

const Chips = () => {
   
    //local states
    const [inputValue, setInputValue] = useState("");
    const [chips, setChips] = useState([]);

    //handler functions 
    const handleChange = (e) => {
        // console.log("event ", e);
        setInputValue(e.target.value.trim());
    }
    console.log("input value", inputValue);

    const handleEnter = (e) => {
        console.log("event of enter ", e);
        //no whitespaces, no empty strings
        if(inputValue !== ""){
            if(e.key==="Enter"){
                setChips(prev => [...prev, inputValue]);
                //resetting the input
                setInputValue("");
            }
        }
    }
    console.log("chips ", chips);

    const handleDelete = (idx) => {
        console.log("delete clicked", idx);

        //removing element from that particular index from chips array
        //always do changes in a copy of original array
        const newChips = [...chips];
        newChips.splice(idx, 1);
        setChips(newChips);
        console.log("new array ", newChips);
    }
 
    return(
        <div className="flex flex-col justify-center items-center mt-20">
            <input
                type="text"
                placeholder="Type something..."
                className="border-3 border-sky-300 rounded-md p-3"
                value={inputValue}
                onChange={(e)=>handleChange(e)}
                onKeyDown={(e)=>handleEnter(e)}
            />
            <div className="mt-10 flex justify-start items-start gap-3">
                {chips.map((item,idx)=>{
                    return(
                        <div 
                            className="bg-sky-100 rounded-lg p-1"
                            key={idx}
                        >
                            {item}<button className="p-1 text-red-700" onClick={()=>handleDelete(idx)}>X</button>
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}

export default Chips;


/**
 * Approach : 
 * - first create a basic ui skeleton (input box)
 * - render the inputs as chips under the input-box
 * - chip should have X nest to it  -> clicking it removes it
 * - no white-spaces, empty strings should be allowed
 */