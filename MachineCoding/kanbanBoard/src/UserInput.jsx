import React, {useState} from "react";
import formConfig from "./data/formConfig";

const UserInput = ({onFormSubmit}) => {
    // console.log("Form config", formConfig)
    //states
    const [formData, setFormData] = useState({
        Title: "",
        Description:"",
        Category:"to-do"
    })
    //handler functions
    const handleInputChange = (e) => {
        console.log("inside handle input change function");
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]:value
        }))
    }
      console.log("User entered form data", formData) 
    const handleOnSubmit = (e) => {
        //this send form data to parent 
        e.preventDefault();
        console.log("Entered on submit function");
        console.log("User entered form data", formData)   
        onFormSubmit(formData)
        setFormData({
            Title:"",
            Description:"",
            Category:"to-do"
        })

    }

    return(
        <>
            <div className="flex justify-center items-center">
                <form onSubmit={handleOnSubmit}>
                    {formConfig.map((data, index) => (
                        <div key={index}>
                            {data.type === "select" ? (
                            <>
                                <label>{data.label}</label>
                                <select
                                name={data.name}
                                onChange={handleInputChange}
                                value={formData[data.name]}
                                >
                                <option value="">{data.placeholder}</option>
                                {data.options.map((opt, i) => (
                                    <option value={opt.value} key={i}>
                                    {opt.label}
                                    </option>
                                ))}
                                </select>
                            </>
                            ) : (
                            <>
                                <label>{data.label}</label>
                                <input
                                placeholder={data.placeholder}
                                type={data.type}
                                name={data.name}
                                onChange={handleInputChange}
                                value={formData[data.name]}
                                />
                            </>
                            )}
                        </div>
                        ))}

                    <div className="flex justify-center items-center gap-3">
                        <button type="submit">Submit</button>
                        <button type="button">Cancel</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default UserInput;