let my_name = "Shivani";
let another = new String('Vishnu');
//console.log(typeof(my_name));

const egSub = my_name.substring(0,4);
const egTrim = my_name.slice(2,4);
const egSub1 = another.substring(0,4);
const egTrim1 = another.slice(3,4);
const example = "  Happily Ever After     ";
const better = example.trim();
const url = "https://shivani@1229.com";
const newUrl = url.replace('vani','lulu');

console.log(egSub)
console.log(egTrim)
console.log(better)
console.log(example)

console.log("Open this in browser "+my_name+" and "+another); //old method dont use it
console.log(`Open in the web browser ${my_name} and ${another}`) //new version use this

// console.table([my_name, another,typeof(my_name), typeof(another), egSub,egTrim,egSub1,egTrim1, example, better,url, newUrl]);