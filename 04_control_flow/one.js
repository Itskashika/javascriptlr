//if
//comparision operator: 
// >,<,<=,>=,==,!=,===

// // == (Loose Equality)
// // Compares only the values after performing type conversion (type coercion).
// if (2 == "2") {
//     console.log("by ==");
// }

// // === (Strict Equality)
// // Compares both the value and the data type.
// if (2 === "2") {
//     console.log("by ===");
// }

//  const temperature=38
// if(temperature===40){
//     console.log("temperature is 40")
// }else if(temperature < 40){
//     console.log("temperature less than 40")
// }else{
//    console.log("temperature is greater 40")
//  }

// const balance=1000
// if(balance>200)console.log("greater than 200");
// if(balance>200)console.log("test1"),
// console.log("test2");

//multiple condition check
const userLoggedIn=true
const debitCard=false
 if(userLoggedIn &&debitCard){
    console.log("user is valid using and")
 }
 if(userLoggedIn || debitCard){
    console.log("user is valid using or")
 }