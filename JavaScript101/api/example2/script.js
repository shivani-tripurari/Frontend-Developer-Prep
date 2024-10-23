const button = document.getElementById('city-search');
const input = document.getElementById('city-input');
const cityLocation = document.getElementById('city-location');
const temp = document.getElementById('city-temp');
const cond = document.getElementById('city-cond');
const condIcon = document.getElementById('cond-icon');

async function getData(cityName){  //fetch ---> async-await
   const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=274f9384b79d415a8b2133519242310&q=${cityName}&aqi=yes`);
   return await data.json();    // we are converting the recieved promise into json
}

button.addEventListener('click', async ()=>{  //we are calling getData i.e, async js hence, use async before callback function and use await before function call
    const cityValue = input.value;
    const result = await getData(cityValue);
    cityLocation.innerText = `Location : ${result.location.name}, ${result.location.region}, ${result.location.country}`;
    temp.innerHTML = `Temperature: ${result.current.temp_c} C`;
    cond.innerHTML = `Condition : ${result.current.condition.text}`;
    condIcon.src = `https:${result.current.condition.icon}`;
});