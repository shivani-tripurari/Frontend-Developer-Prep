import React from "react";

const Settings = ({data,setData}) => {

    //handler functions
    const handleRadio = (e, item) => {
        setData((prev)=>({
            ...prev,
            [item] : e.target.name
        }))
    }

    return(
        <div className="flex flex-col justify-start items-start p-4">
            <div className="flex justify-start items-start gap-4">
                <label>Mode : </label>
                <label> Dark 
                    <input
                        type="radio"
                        name="dark"
                        checked={data.mode === "dark"}
                        onChange={(e)=>handleRadio(e, "mode")}
                    /> 
                </label>
                <label> Light 
                    <input
                        type="radio"
                        name="light"
                        checked={data.mode === "light"}
                        onChange={(e)=>handleRadio(e, "mode")}
                    /> 
                </label>
            </div>
            <div className="flex justify-start items-start gap-4">
                <label>Notifications : </label>
                <label> Yes 
                    <input
                        type="radio"
                        name="yes"
                        checked={data.allowNotifications === "yes"}
                        onChange={(e)=>handleRadio(e, "allowNotifications")}
                    /> 
                </label>
                <label> No 
                    <input
                        type="radio"
                        name="no"
                        checked={data.allowNotifications === "no"}
                        onChange={(e)=>handleRadio(e, "allowNotifications")}
                    /> 
                </label>
            </div>
        </div>
    )
}

export default Settings;