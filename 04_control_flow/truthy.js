// A non-empty string is assigned to userEmail.
const userEmail = "kai@gmail.com";

// In JavaScript, non-empty strings are "truthy" values.
// So this condition evaluates to true.
if (userEmail) {
    console.log("got user");
} else {
    // This block runs only if userEmail is a "falsy" value.
    console.log("invalid user");
}

// Truthy values (condition becomes true)
// "hello","0"," "     // Non-empty string
// 1            // Any non-zero number
// -5
// []           // Empty array
// {}           // Empty object
// true
// function(){} // empty Function

// ❌ Falsy values (condition becomes false)
// false
// 0
// -0
// 0n        // BigInt zero
// ""        // Empty string
// null
// undefied
// NaN

//to check array is empty
const myarray=[]
if(myarray.length === 0){
    console.log("array is empty")
}
//to check onject is empty 
const emptyObj={}
if(Object.keys(emptyObj).length === 0){
    console.log("object is empty")
}

    console.log(false ==0)//true
    console.log(false ==" ")//true
     console.log(0 == " ")//true

// Nullish Coalescing Operator  (??): null undefined

let val1;
//val1=5 ?? 10  //5/
//val1=null ?? 10  //10
// val1=undefined ?? 20 //20
val1= null ?? 26 ?? 35  //26
console.log(val1)

//Terniary Operator

//ondition ? true:false
const marks=40
marks >=40 ? console.log("Pass"): console.log("fail")