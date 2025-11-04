import React, {useState} from "react";

const Profile = ({data,setData, error}) => {

    //handler function 
    // taking item parameter to dynamically update only the key that's changing
    const handleOnChange = (e, item) => {
        setData((prev)=>({
            ...prev,
            [item]:e.target.value
        }))

    }

    return(
        <div className="flex flex-col justify-start items-start p-4">
            <label>Name : 
                <input 
                    className="border p-1"
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={(e)=>handleOnChange(e,"name")}
                />
            </label>
            {error.name && 
                <h3 className="py-1 font-semibold text-red-600">{error.name}</h3>
            }
            <label>Age : 
                <input 
                    className="border p-1"
                    type="number"
                    name="age"
                    value={data.age}
                    onChange={(e)=>handleOnChange(e, "age")}
                />
            </label>
            {error.age && 
                <h3 className="py-1 font-semibold text-red-600">{error.age}</h3>
            }
            <label>E-mail : 
                <input 
                    className="border p-1"
                    type="text"
                    name="email"
                    value={data.email}
                    onChange={(e)=>handleOnChange(e, "email")}
                />
            </label>
            {error.email && 
                <h3 className="py-1 font-semibold text-red-600">{error.email}</h3>
            }
        </div>
    )
}

export default Profile;