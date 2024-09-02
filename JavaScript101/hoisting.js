// The JS Interpreter skims through the whole code even before execution and allocates memory to variables and functions


console.log(getName()); //here, I am able to call and execute getName() because in Phase1 the function and it's definition is allocated memory
//console.log(Icecream);
//console.log(branch);
console.log(rollNo); 

var rollNo = 549;   //works only for var , not for let & const ---> in Phase1 memory is allocated to undefined only for var

function getName(){
    console.log("Shilulu"); //memory allocation of the total function block happens only for this function syntax
}

const Icecream=()=>{
    console.log("Cookie n Cream") //in case of "arrow-function" syntax it is treated as normal variable
}

let branch = function(){
    console.log("CSE") //in case of "expression" syntax it is treated as normal variable
}
console.log(Icecream());
console.log(branch());