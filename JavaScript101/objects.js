const obj1 = {
    "full name" : "Shilulu",
    rollNo : "21311A0549",

}
console.log(obj1);
console.log(typeof(obj1));
console.log(typeof(obj1.toString()));

console.log(obj1.rollNo);
console.log(obj1["full name"]);

//The concept of Symbols ---> run the code to understand // it creates unique instances 
const mysymb = Symbol("key1");
const obj2 ={
    my_name:"Vilulu",
    rollNo : 7,
    [mysymb] : "abc",
    mysymb : "demo"
}
console.log(obj2);
console.log(obj2[mysymb]);
console.log(obj2["mysymb"]);


obj1.mysymb="1234abc";
console.log(obj1);
console.log(obj1["mysymb"]);

