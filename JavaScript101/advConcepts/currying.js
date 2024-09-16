function add(a){
    return function(b){
        return function(c){
            console.log(a,b,c)
            return a+b+c;
            
        }
    }
}
console.log(add(2)(1))

function times(a){
    return function(b){
        console.log(a,b)
        return a*b
    }
}
const double = times(2); //a--->is fixed with 2
const triple = times(3);
// double(7)  //now, 7 is assigned to b
// triple(7) //now, 7 is assigned to b for "triple"
console.log(double(7)) //ans would be 2*7
console.log(triple(7)) //ans would be 3*7


//Auto email example:

function SendEmail(to){
    return function(subject){
        return function(body){
            console.log(`Sending email to: ${to} with subject: ${subject} and body: ${body}`)
        }
    }
}
let toPerson = SendEmail("vishnureddy228@gmail.com")
let yourSub = toPerson("I love you bonda")
let yourBody = yourSub("I feel grateful to have you in my life")

//using arrow function:
let addNums = (a)=>(b)=>(c) => a+b+c
console.log(addNums(1)(2)(4))