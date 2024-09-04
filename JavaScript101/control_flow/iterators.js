//for loop
//while loop
//do while loop
//break and continue statements

///////////////////////////////specialised loops for arrays/////////////////////////////////
const arr = ["Ironman", "Hulk", "Thor", "Captain America", "Black Widow", "Loki", "Wanda-Vision"];

const mpp = new Map();
mpp.set(1,"Cookie cream");
mpp.set(2,"strawberry");
mpp.set(3,"Coffee");
mpp.set(4,"Coffee");

const bigArr = [
    {
        user:"Shilulu",
        rollNo:1
    },
    {
        user:"Vilulu",
        rollNo:2
    },
    {
        user:"Bubu",
        rollNo:3
    },
    {
        user:"Buba",
        rollNo:4
    },
    {
        user:"Juba",
        rollNo:5
    },
    {
        user:"Guba",
        rollNo:6
    },
    {
        user:"Dooba",
        rollNo:7
    }
]

const obj1 = {
    user:"Shilulu",
    id:1
}

// console.log(`Array is :- ${arr}`);
// console.log(`MAp is :- ${mpp}`);
// console.log(`Array of objects is :- ${bigArr}`);
// console.log(`Object is :- ${obj1}`);
// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));



//1. for-of :

for(const i of arr){
    console.log(`The Marvel icons are :- ${i}`);
}

for(const i of mpp){
    console.log(i);         //gives arrays of key-val pairs ---> Dont want this!
}
for(const[key,val] of mpp){
    console.log(`The value of the key: ${key} is :- ${val}.`);   //Destructuring of map
}

// for(const i of obj1){                 //looping over an object ---> when we use "for-of", we can't iterate over the object. Hence, we use "for-in".
//     console.log(Object.keys(i)); 
//     console.log(Object.values(i));
// }

for (const i of bigArr){         //the problem here is we cant access specific property of the object
    console.log(i);
    console.log(Object.keys(i));
    console.log(Object.values(i));
}

//2. for-in :

for(const i in obj1){    // ---> iterated over object
    console.log(`The keys of the object are :- ${i}`);
    //console.log(`The values of keys ${i} are :- ${obj1[i]}`);
}

for(const i in arr){   // ---> in for-in, we get keys 
    console.log(arr[i]);
}

for(const i in bigArr){  // ---> iterating over array of objects using "for-in"
   const objF = bigArr[i];
   const objKeys = Object.keys(objF);        //the problem here is we cant access specific property of the object
   const objVal = Object.values(objF);
   console.log(`Object keys:- ${objKeys}`);
   console.log(`Object values:- ${objVal}`);
}

// for(const [key,val] in mpp){
//     console.log(mpp[key]);    ---> maps cant be iterated using "for-in"

// }

//3. for-each :  ---> A type of Higher order function

arr.forEach(function(hero){          // ---> using normal function syntax
    console.log(`Heroes are :- ${hero}`);
})

arr.forEach((hero)=>{                // ---> using arrow function syntax
    console.log(`Heroes :- ${hero}`);
})

bigArr.forEach(function(val,index){
    console.log(`The values inside it are :- ${val.user}`);
    console.log(`The indexes are :- ${index}`);
})

for(const i of bigArr){
    const val = Object.values(i);  //the above discussed problem is solved here, we can access specefic properties of object
    console.log(val);
    
    
}