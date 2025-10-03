import React, {useState, useEffect} from "react";
import UserInput from "./components/UserInput"

function App() {
  const apiKey = "f09a800d64284e08a6c122740250210";
  const baseURL = "https://api.weatherapi.com/v1/";



  //states
  const [userLocation, setUserLocation] = useState("");
  const [weatherData, setWeatherData] = useState("");

  //handler functions 
  const showData = (...userData) => {
    console.log("inside parent's showData handler");
    console.log("This is the user data : ", userData);
    setUserLocation(userData);

  }

  console.log("user location 22", userLocation);

  const finalURL = baseURL+"current.json"+`?key=${apiKey}&q=${userLocation}`;
  //baseUrl+endpoint+?apiKey&parameters
  console.log("final url", finalURL);

  //api calling to get the request , data fetching (side-effects) happens in useEffect
  useEffect(()=>{
    if(!userLocation) return;
    const getData = async() => {
      try{
        const response = await fetch(finalURL);
        const data = await response.json();
        console.log("data 35",data);
        setWeatherData(data);
      } 
      catch {
        console.log("error encountered");
      }
    }
    getData();
  }, [userLocation])

  console.log("weather data", weatherData);


  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl text-sky-700">Weather App</h1>
      <UserInput onFormSubmit={showData} />
      <div className="flex flex-col justify-center items-center">
        {weatherData ? <>
          <h2 className="font-bold text-xl">{weatherData.location.name}, {weatherData.location.region}, {weatherData.location.country}</h2>
          <p>Temp in Celcius : {weatherData.current.temp_c}</p>
          <p>Humidity : {weatherData.current.humidity}</p>
          <p>Time : {weatherData.location.localtime}</p>
        </> :<>No data</>}
      </div>
    </div>
  )
}

export default App
