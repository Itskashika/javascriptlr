//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
//function that runs immediately after it is created.
//It is mainly used to create a private scope and avoid polluting the global namespace.
//------good practice to add semicolon to avoid  error-------

//named IIFE
(function one()
{
     console.log("this is one function")
})();

//without named IIFE
//arrow function as iife
(() =>{
     console.log("this is two function")
} )();

((name) =>{
     console.log(`user name is ${name}`)
} )("kendall");
