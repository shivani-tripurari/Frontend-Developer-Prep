import React, {useState, useEffect} from "react";

const ProgressBar = (props) => {

    const {progress} = props;
    //local states
    const[animatedProgress, setAnimatedProgress] = useState(0);

    //to add a delay
    useEffect(()=>{
        setTimeout(()=>{
            setAnimatedProgress(progress)
        }, 1000);
    }, [progress])


    return(
        <div className="w-96 rounded-full overflow-x-hidden border border-sky-300 p-1">
            <div className="pr-3 bg-sky-300 rounded-full text-right p-1 transition duration-700 ease-in" style={{transform:`translateX(${animatedProgress-100}%)`}}>{animatedProgress}%</div>
        </div>
    )
}

export default ProgressBar;