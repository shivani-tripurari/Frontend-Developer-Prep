let username = "Shivani";
var obj = {
    username : "Vishnu",
    one : function one(){
        console.log(this.username); //normal function --->
    },
    two : two=()=>{
        console.log(this.username); //arrow function --->
    }
    
}
console.log(obj.one());
console.log(obj.two());

console.log(this);