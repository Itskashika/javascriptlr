// singleton objects / using construtors

const tinderUser=new Object()
tinderUser.id="124lali"
tinderUser.name="Lalit"
tinderUser.isLoggedIn=false
//console.log(tinderUser)

const regularUser={
    email: "priya@gmail.com",
    fullname:{
        userfullname:{
            fname: "Priya",
            lname:"Shankar"
        }
    }
}
//console.log(regularUser.fullname.userfullname.fname)
//join two objects in one
const obj1={1: "a",2:"b"}
const obj2={3: "a",4:"b"}
//assign(target: {}, source1: { 1: string; 2: string; }
//const obj3=Object.assign({},obj1,obj2)
//joining using spreading
const obj3={...obj1,...obj2}
//console.log(obj3)

//can also add multiple object in an array
const users=[
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:2,
        email:"b@gmail.com"
    },
    {
        id:3,
        email:"c@gmail.com"
    }
]
//console.log(users[1].email)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// //to get key value pairs in ssepare array
// console.log(Object.entries(tinderUser))
// //hasOwnProperty- is used to check if object have  particular key or not
// console.log(tinderUser.hasOwnProperty("name"))

//destructure
const course={
    coursename:"Javascript",
    price:200,
    courseIntructor:"hitesh"
}
//to access without object name and give  them short name
const {courseIntructor : instruct}= course 

console.log(instruct)

// //json api format
// {
//     "name":"kavi",
//     "course":"js"
// }

// //another format
// [
//     {},
//     {},
//     {}
// ] 