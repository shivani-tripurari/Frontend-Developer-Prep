import React, {useState, useEffect} from "react";
import { tabConfig, initialFormData, errorValidation } from "../../utils/config";

const TabComponent = () => {
    //local states
    const [activeTab, setActiveTab] = useState(0);
    const [formData, setFormData] = useState(initialFormData);
    const [error, setError] = useState(
        {
            name : "",
            age : "",
            email : "",
            interests : [],
        }
    );
    
    const ActiveComponent = tabConfig[activeTab].component
    
    //form validations
    useEffect(()=>{
        const newError = {
            name : !formData.name || formData.name.length < 2 ? errorValidation.name : "",
            age : !formData.age || formData.age < 18 ? errorValidation.age : "",
            email : !formData.email || !formData.email.includes("@") ? errorValidation.email : "",
            interests : !formData.interests ? errorValidation.interests : ""
        };
        setError(newError);
    }, [formData])

    const hasErrors = Object.values(error).some(err => err !== "");

    //handler functions
    const handleActiveTab = (idx) => {
        setActiveTab(idx);
    }
    const handlePrev = () => {
        if(!hasErrors){
            setActiveTab(prev => prev-1);
        }
    }
    const handleNext = () => {
        if(!hasErrors){
            setActiveTab(prev => prev+1);
        }
    }
    const handleOnSubmit = () => {
        console.log("final data ", formData);
    }

    

    return(
        <div className="mt-10 p-3 w-screen h-screen ">
            <div className="flex justify-start items-start">
                {tabConfig.map((item,idx)=>{
                    return(
                        <div 
                            key={idx} 
                            className="border-2 border-green-600 p-3 cursor-pointer"
                            onClick={()=>handleActiveTab(idx)}
                        >
                                {item.name}
                        </div>
                    )
                })}
            </div>
            <div className="border-2 border-green-600 h-1/2 w-2/3">
                <ActiveComponent data={formData} setData = {setFormData} error={error} /> 
            </div>
            <div className="flex w-2/3 justify-center items-center gap-4">
                {activeTab > 0 && <button onClick={()=>handlePrev()} className="p-1 bg-green-300 text-green-700">Prev</button>}
                {activeTab < tabConfig.length - 1 && <button onClick={()=>handleNext()} className="p-1 bg-green-300 text-green-700">Next</button>}
                {activeTab === tabConfig.length - 1 && <button onClick={()=>handleOnSubmit()} className="p-1 bg-green-700 text-green-300">Submit</button>}
            </div>
        </div>
    )
}

export default TabComponent;