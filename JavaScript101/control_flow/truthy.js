//falsy : null, undefined, NAN, "", 0, -0, false
//truthy : true, rest all except falsy , "0", " ", "false", [], {}, function(){}

const arr = ['shilulu', 'vilulu', 17, 29, 12];
const objEg ={
    //usename: "Shilulu"
}
if(arr.length){
    console.log(`Executed ${arr}`);
}
if(Object.keys(objEg)){
    console.log(`Executed `);
}
else{
    console.log("Executed none");
    
}


//nullish coalescing operator (??)
val1 = null ?? 10 ?? 20;
console.log(val1);
console.log(val1);

//ternary operator
shopping =(price)=>{
    price>=69 ? console.log(`Buy it ${price}`) : console.log("Dont buy it"); 
}
shopping(100);