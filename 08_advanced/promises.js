 //below is consume of promises
 //fetch('https://dicnja.com').then().catch().finally()

 //creation of promises
 const promiseOne= new Promise(function(resolve,reject){
    //do an async task
       // DB calls, cryptography, network
       setTimeout(function() {
        console.log('Async task is complete')
        resolve()//here resolve connected to then
       }, 1000);
 })
 //consumption
 promiseOne.then(function(){
    console.log("promise consumed");
    
 })

 new Promise(function(resolve,reject){
     setTimeout(function() {
        console.log('Async task 2 is complete')
        resolve()
       }, 1000);
 }).then(function(){
    console.log("async task 2 resolved");
    
 })
// resolve mostly pass object in it
const promiseThree= new Promise(function(resolve,reject){
    setTimeout(function() {
        resolve({username:"kashi", email:"maheshwarikashika212@gmail.com"})
       }, 1000);
})
promiseThree.then(function(userdetail){
    console.log(userdetail)
})

const promiseFour= new Promise(function(resolve,reject){
      setTimeout(function() {
        let error=true;
        if(!error){
            resolve({username:"kashika",password:"@212a"})
        }else{
            reject('ERROR SOMETHING WENT WRONG')
        }
        
        
       }, 1000);
})
//chaining
promiseFour
.then((user)=>{
    console.log(user);
    return user.username

})
.then((username)=>{
    console.log(username);
    
})
.catch(function(error){
    console.log(error);
    
})
.finally(()=>{
    console.log("the promise is resolved or rejected");
    
})

const promiseFive= new Promise(function(resolve,reject){
      setTimeout(function() {
        let error=true;
        if(!error){
            resolve({username:"javascript",password:"1234"})
        }else{
            reject('ERROR : js SOMETHING WENT WRONG')
        }
        
        
       }, 1000);
});

async function consumePromiseFive(){
    try {
        const response=await promiseFive

    console.log(response)
    } catch (error) {
        console.log(error);
        
    }
    
}
    
consumePromiseFive()

//https://jsonplaceholder.typicode.com/users


//json response

// async function getAllusers() {
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users') 
//    const data= await response.json()//takes time
//    console.log(data);
//     } catch (error) {
//         console.log("E :",error);
//             }
   
// }
// getAllusers()
fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);  
})
.catch((error)=>{
console.log(error);
})