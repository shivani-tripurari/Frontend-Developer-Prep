//"this" keyword ---> points to the current context of that particular object

var objNew1 = {
    username : "Vishnu",
    task : function normal(){
            username = "Shivani";
            //console.log(this.username);
            console.log(this.username);
             }
}
console.log(objNew1);
console.log(objNew1.task());
console.log(objNew1.username);


///////////////////////////////////////////////////////////////////////////////////////

var objNew2 = {
    username : "Vishnu",
    task : function normal(){
            let username = "Shivani";
            //console.log(this.username);
            console.log(username);
             }
}
console.log(objNew2);
console.log(objNew2.task());
console.log(objNew2.username);

// ///////////////////////////////////////////////////////////////////////////////////////

// // var objNew3 = {
// //     username : "Vishnu",
// //     task : function normal(){
// //             let username = "Shivani";
// //             //console.log(this.username);
// //             console.log(this.username);
// //              }
// // }
// // console.log(objNew3);
// // console.log(objNew3.task());
// // console.log(objNew3.username);


// //////////////////////////////////////////////////////////////////////////////////////////
var objNew4 = {
    username:"Vishnu",
    task : function normal(){
        username="Shivani";
        console.log(this.username);
    }
}
console.log(objNew4);
console.log(objNew4.task());
console.log(objNew4.task.prototype.username);

const arr = [1,2,3,4,5,6,7];
// arr.forEach(function(i){
//     console.log(i+1);
// })
const arrFil = arr.filter((i)=>{
    return i>3;
})

console.log(arr);
console.log(arrFil);

function closure1(name){
    // let name = "Shivani";
    return function greet(work){
        console.log(`My name is : ${name}, i do ${work}`)
    }
    
}
let closureCall = closure1("Shivani")("coding");
