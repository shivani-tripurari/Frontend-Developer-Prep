const randomColor = () => {
    let colorRange = '0123456789ABCDEF'
    let hex = '#'
    for(let i=0; i<6; i++){
        hex += colorRange[Math.floor(Math.random()*16)]
    }
    return hex;
}
//console.log(randomColor())
let intervalId;
const changeColor = () => { 
    if(!intervalId){
        const newColor = () => document.body.style.backgroundColor = randomColor();
        intervalId = setInterval(newColor,1500);
    }
}
const stopColor=()=>{
    clearInterval(intervalId);
    intervalId=null;
}

const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');

startBtn.addEventListener('click',changeColor);
stopBtn.addEventListener('click',stopColor);


