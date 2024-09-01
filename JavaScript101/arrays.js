const myArray = [];
myArray.push(1);
myArray.push(2);
myArray.push(3);
myArray.push(4);
myArray.push(5);
myArray.push(6);
myArray.push(7);
myArray.push("Shivani");
const arr1 = myArray.slice(1,4);
const arr2 = myArray.splice(1,4);

const newArr = myArray.pop(); //arrays are non primitive dts i.e, call by reference types i.e, the values will be manipulated in the original array.


console.table([myArray,typeof(myArray),arr1])
console.log(newArr);
console.log(myArray);
console.log(arr2);


const marvel = ['IronMan', "Thor", "Spiderman"];
const dc = ["Batman", "WonderWoman", "Joker"];
const heros = [...marvel, ...dc]; //merges both arrays into one ---> spread operators
const herosNew = marvel.concat(dc);//i get nested array here
const herosTry = marvel.push(dc);//i get nested array here
console.table([marvel,dc,heros,herosNew,herosTry]); //notice that the original marvel array is also being manipulated
console.log(marvel[3][2]); //to access values from nested arrays
