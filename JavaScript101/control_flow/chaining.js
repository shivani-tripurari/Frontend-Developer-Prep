//chaining is the process of applying multipple h-o-f to an expression
//here the data after applying one h-o-f is passed to it's next h-o-f

const nums = [1,2,3,4,5,6,7];

const newNums = nums
                    .map((num)=>{
                        return num*10;
                    })
                    .map((num)=>{
                        return num+1;
                    })
                    .filter((num)=>{
                        return num>30;
                    });
console.log(newNums);