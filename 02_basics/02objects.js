//two common ways to create objects: object literals and the Object constructor.
// Object Literal ({}) → Creates a non-singleton object 
// Object Constructor (new Object()) → Can be used to create a singleton-style object when a single shared instance is maintained.
// singleton means only one instance of an object exists and is shared wherever needed.

//Interview imp:
//use Symbol in object : we need to define symbol outside and use it with square bracket when used as key
const mySym= Symbol("iamsymbol")
//OBJECT LITERALS
const JsUser= {
    name :"lina",
    "full name" :"Lina Singh",
    [mySym]:"this is a symbol in object",
    age: 34 ,
    Location:"Delhi",
    email:"lina23@gmail.com",
    isLoggedIn :true,
    LastLoggedin:["Thrusday","Saturday"]
}

// //to access
// console.log(JsUser.email)

// console.log(JsUser["email"])
// //here full name can't be access with . hence we use square backets to access every time
// console.log(JsUser["full name"])

// console.log(JsUser[mySym])
// console.log(typeof mySym)
// console.log(typeof JsUser[mySym])

//IMP: here [mySym] makes the property key a Symbol. JsUser[mySym] returns the property value. typeof checks the value you pass to it, not the key used to access it.

//to change value in object
JsUser.email="linamyid@gmail.com"
// console.log(JsUser["email"])

// // to stop to make any changes in object
// Object.freeze(JsUser)

JsUser.email="loni56@gmail.com"
// console.log(JsUser["email"])

// console.log(JsUser)

//function with object
JsUser.greeting=function(){
    console.log("hello JS User");
}
// console.log(JsUser.greeting);//function does not return back only reference 
// console.log(JsUser.greeting());

// JsUser.greeting2=function(){
//     console.log(`hello JS User ${JsUser["full name"]}`);
// }
//here instead of using function name in reference we can use "this"
JsUser.greeting2=function(){
    console.log(`hello JS User ${this["full name"]}`);
}
console.log(JsUser.greeting2());

JsUser.greeting3=function(){
    console.log(`hello JS User ${this.name}`);
}
console.log(JsUser.greeting3());