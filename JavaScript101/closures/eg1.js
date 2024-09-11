// closure allows a function to "remember" the variables from the environment in which it was created

//basic example:

function hello(greet){
    console.log(greet)
    function name(userName){
        console.log(`Nice to meet you and ${greet}! ${userName}.`)
    }
    return name;
}
let getName = hello("Konichiwa");
getName("Shivani")
// hello is called:

// greet = "Konichiwa".
// It prints Konichiwa.
// It returns name, and hello completes execution (i.e., it's done).
// getName is now the name function:

// The name function has access to the greet variable, even though hello has finished running, because the closure keeps greet alive.
// Calling getName("Shivani"):

// When you call getName, it uses the saved greet ("Konichiwa") and the new argument "Shivani", printing Nice to meet you and Koninchiwa! Shivani.

//example 2: 

function adder(num){
    
    function addTo(x){
        console.log(x+num)
    }
    return addTo;
}
let add7 = adder(7)
let add2 = adder(2)
add7(3)       //basically we are returing the inner function
add2(1)