//for of
//array specific loops
const arr=[1,2,3,4,5,6]
// for (const val of arr) {
//     console.log(val);
// }
 const greatings="hello world!"
//  for (const greet of greatings) {
//     console.log(greet);
//  }

//Maps 
//Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")
//console.log(map)

// for (const [key,value] of map) {
//     console.log(key,"-->",value)
// }

// const myObj={
//     "GAME1":'NFS',
//     "GAME2":'Spiderman'
// }
// //TypeError: myObj is not iterable
// for (const [key,value] of myObj) {
//     console.log(key,"-->",value)
// }

//FOR IN
const myObj={
    js:"Javascript",
    cpp:"C++",
    rb:"Ruby",
    swift:"Swift by Apple"
}

// 

const programming=["js","rb","cpp","java","py"]
//give array index
// for (const key in programming) {
//     console.log(key);
// }

// for (const key in programming) {
//     console.log(programming[key]);
// }

//Maps are not iterable so we cant use for..in loop for Map

// //FOR EACH with call back function
//call back function do not have names
// //Passing callback means give me the function to operate
// programming.forEach( function (item){ console.log(`hey i am ${item}`)})

// //already defined function
// function printme(item){
//      console.log(item)
// }
// programming.forEach(printme)

// programming.forEach((item,index,arr)=>{
//      console.log(item,index,arr)
// })
 
const myCoding=[
    {
        languageName: "Javascript",
        languagefile:"js"
    },
    {
        languageName: "C++",
        languagefile:"cpp"
    },
    {
        languageName: "JAVA",
        languagefile:"java"
    }
];
myCoding.forEach((item) =>{
    console.log(item.languageName);
})