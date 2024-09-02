let a = 300;
var c = 700;
if(true){
    let a = 10;
    const b = 400;
    c = 20;
    console.log(`Inner a: ${a}`);
    console.log(`Inner c: ${c}`);
}
console.log(`Outer a: ${a}`);
//console.log(`B: ${b}`);  ---> block scope hence never defined outside the block scope
console.log(`Outer c: ${c}`);

