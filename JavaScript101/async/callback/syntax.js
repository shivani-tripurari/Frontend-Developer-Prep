//Syntax1: 2 parts in every promise: Creating and Receiving
//         a promise takes a callback function as argument that further 
//         has two parameters: respone and reject---> 
//                             the response is called with parameters, this connects it to the receiving part 
//                             same for reject part
//         In receiving part, we have .then(callback()).catch(callback()); ---> catch for error handling
const promiseOne = new Promise(function(response, reject){
    let error = true //change the values to check 
    if(!error){
        console.log("resolved...")
        response({username:'Shivani', rollNo:49});
    }
    else{
        console.log("error encountered")
        reject("Somenthing went wrong")
    }
})
promiseOne
        .then((user)=>{
            console.log(user);
            //return user.username;
        })
        .catch((error)=>{
            console.log("error received");
            console.log(error);
            //return error;
        })
        .finally(()=>console.log("The promise has been either resolved or rejected."))


//Syntax 2 : Callback chaining

const promiseTwo = new Promise(function(response,reject){
    let error = true
    if(!error){
        console.log("Processing response")
        response({username:"Vishnu", rollNo:7})
    }
    else{
        console.log("Error encountered")
        reject("Something went wrong");
    }
})
promiseTwo
        .then(function(user){
                console.log(user)
                console.log("Respone is received")
                return user
           })
            .then(function(user){
                console.log("This is callback chaining")
                console.log(user.username)
            })
              .catch(function(error){
                console.log(error)
              })
              .finally(()=>console.log("The promise has been either resolved or rejected."))

//Syntax 3 : using async-await 

const promiseThree = new Promise(function(response,reject){

    setTimeout(
            ()=>{
                let error = true
                if(!error){
                    response({username:"Shilulu", rollNo:549})
                    console.log("Response is found")
                }
                else{
                    reject("Response not found")
                    console.log("Try again")
                }
            }
        ,1000);
});
//use try-catch block inside async function to handle respone and error
async function handlePromiseThree(){
    try {
        const response = await promiseThree
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
handlePromiseThree()

// handlePromiseThree= async () => {
// syntax for async using arrow function
// }
// handlePromiseThree()