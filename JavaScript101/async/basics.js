let a = 30
let b = 40
let sum = a+b

// let data = fetch("https://jsonplaceholder.org/posts")  // only fetching large data using "fetch" takes time 
                                                       //fetch is basically an inbuilt funtion in JS that is a promise
//inorder to actually retrieve the data at background, we need to use async concepts
async function getData(){
    let data =  await fetch("https://jsonplaceholder.org/posts") //while using async you need to use await
                                                                // i.e, you tell js to stop here and wait till you recieve data
    console.log(data)
}

getData()
console.log(sum)

//when you run this, you can see notice normal flow of execution 
// --->first, js encounters getData() funtion call
// ---> Now, it goes to the function to execute but sees "async" hence, it runs in the bg while executing remaining things
// ---> Hence, sum is printed first and when the data is recieved, data gets printed (console.log(data))