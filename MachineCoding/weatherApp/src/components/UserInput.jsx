import React, {useState} from "react";

const UserInput = ({onFormSubmit}) => {


    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");


    //input change handler 
    const handleCityChange = (e) => {
        console.log("inside input change handler");
        //event object destructuring
        const {name, value} = e.target;
        console.log("event object", e.target.value)
        //setting location with user's input
        setCity(value);
    }

        const handleCountryChange = (e) => {
        console.log("inside input change handler");
        //event object destructuring
        const {name, value} = e.target;
        console.log("event object", e.target.value)
        //setting location with user's input
        setCountry(value);
    }

    console.log("location : ", city, country);

    //submit handler function 
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("inside submit handler");
        onFormSubmit(city, country);
        setCity("");
        setCountry("");
    }

    return(
        <>
            <h2>This is user input form</h2>
            <div className="border rounded-sm p-3 m-1">
                <form className="flex flex-col justify-center items-center">
                    <label className="font-bold text-sm">Enter the city</label>
                    <input 
                        placeholder="City..."
                        className="border border-sky-300 rounded-md p-1"
                        onChange={handleCityChange}
                        name="City"
                        value={city}
                    />
                    <label className="font-bold text-sm">Enter the country</label>
                    <input
                        name="Country"
                        placeholder="Country..."
                        className="border border-sky-300 rounded-md p-1"
                        onChange={handleCountryChange}
                        value={country}
                    />
                    <button onClick={handleSubmit}>
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
}

export default UserInput

/*
approach : 
- get city/location from user form
- use that city in api call 
*/