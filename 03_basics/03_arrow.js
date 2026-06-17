// this is used to refer current context
//but this way it can only be used in object not in function
 
const user={
    username:" kendal",
    price:2000,
    welcomeMessage:function(){
        
console.log(`${this.username} , welcome to website`)
//console.log(this)
    }
}
// user.welcomeMessage()
// user.username="jenifer"
// user.welcomeMessage()
//console.log(this)

// //in browser global object is window object but here it gives empty object
//  function thisintro(){
//     console.log(this);
//  }
//  thisintro()

//arrow function

 const  arrowfunc= () => {
    console.log("i am arrow function");
 }
// arrowfunc()
//  const addtwo = (num1, num2) =>{
//     return num1+num2
//  }
//in parenthesis return key word is not mandatory -->implicit return  
// but this is essential in curly brases of function-->explicit
const addtwo = (num1, num2) =>(num1+num2)
 console.log(addtwo(4,5))


