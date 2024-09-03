//Immediately Invoked Function Expressions

(function one(){
    console.log(`DB Connected !`);
})()

;((name)=>{
    console.log(`Wlcome ${name}`);
})("Shilulu")

//;(example=((n1,n2)=>n1+n2))(3,4) --->not executing!