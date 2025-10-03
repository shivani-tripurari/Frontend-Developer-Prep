console.log("The sales data", salesData)

const data = salesData;

let totalAmount = 0;

for (let cust of salesData){
    // iterating over outer objects
    console.log("each outer object",cust)
    for(let order of cust.orders){
        // iterating over orders array inside all cust objects
        console.log("amount of order", order.amount)
        totalAmount+=order.amount
    }
}

console.log("Total sales amount", totalAmount)

//object -> {month:totalAmount}
let monthlySales = {};

for(let cust of data){
    console.log("each customer", cust);
    for(let order of cust.orders){
        console.log("indi order", order);
        
        // when map empty
        if(!monthlySales[order.month]){
            monthlySales[order.month]=0;
        }
        monthlySales[order.month]+=order.amount;
    }
}
console.log("monthly sales", monthlySales)




/*
data : array of objects -> each object -> contains orders object -> array of objects -> each object -> month, amount
- q1 : I need to find total sales (add all objects monthly mothly orders amount)
- q2 : Monthly sales of all customer month wise
*/