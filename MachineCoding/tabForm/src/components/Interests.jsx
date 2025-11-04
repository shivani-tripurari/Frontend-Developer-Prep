import React from "react";

const Interests = ({data, setData}) => {


    //handler function
    const handleCheckboxChange = (e) => {
        setData((prev)=>({
            ...prev,
            interests : e.target.checked ? 
                        [...prev.interests, e.target.name] : 
                        prev.interests.filter((i)=>i!==e.target.name)

        }))
    }

    return(
        <div className="flex flex-col justify-start items-start p-4">
            <label> 
                <input
                    type="checkbox"
                    name="travelling"
                    className="font-bold"
                    checked={data.interests.includes("travelling")}
                    onChange={(e)=>handleCheckboxChange(e)}
                /> 
                Travelling
            </label>
            <label> 
                <input
                    type="checkbox"
                    name="music"
                    className="font-bold"
                    checked={data.interests.includes("music")}
                    onChange={(e)=>handleCheckboxChange(e)}
                /> 
                Music
            </label>
            <label> 
                <input
                    type="checkbox"
                    name="selfCare"
                    className="font-bold"
                    checked={data.interests.includes("selfCare")}
                    onChange={(e)=>handleCheckboxChange(e)}
                /> 
                Self Care
            </label>
        </div>
    )
}

export default Interests;