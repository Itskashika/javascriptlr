// // console.log(2>1)
// //console.log("2">1)
// console.log(null>0)//false
// console.log(null<=0)//true
// console.log(null ==0)//false
// console.log(null>=0)//true

//=== -> Strict check also check data type
// console.log("2"==2)
// console.log("2"===2)

//--------Non Primitive Datatype
//SYMBOL
let id=Symbol('123')
let newid=Symbol('123')
//console.log(typeof id)
//console.log(id== newid)

//ARRAY
let alphabet=["a","b","c"];
//console.log(alphabet)

//OBJECT
let myObj={
    name:"kia",
    age:22,
}
//console.log(myObj)

//FUNCTION
const  myFunction=function(){
    console.log("hey how are you")
}
//console.log(typeof myFunction)

//---------------Memory---------------
//Stack- primitive and HEAP- Non-Primitive
// Stack
let name1="kavy"
let name2=name1
//console.log(name2)
name2="livy"
// console.log(name1)
// console.log(name2)

//heap -->reference is changed
let userOne={
    name:"lily",
    age:15
}
let userTwo=userOne
console.log(userTwo.name)
userTwo.name ="Mary"
console.log(userOne.name)
console.log(userTwo.name)

