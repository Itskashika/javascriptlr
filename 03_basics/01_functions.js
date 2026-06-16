//function defination
function myname(){
    console.log("Hello my name is Kashika")
}
//function call
//myname()

// function addtwonum(num1,num2){
//    console.log(num1+num2)
// }
function addtwonum(num1,num2){
//    let result=num1+num2
//    return result
return  num1+num2
}
const res=addtwonum(2,3)

//onsole.log("Result:" ,res)
//addtwonum(2,"z")//return string

//we can also give default value as parameter so it will never give undefined (optional) in this if condition never runs
function loginUserMessage(username="user"){
    if(username === undefined){ 
        //can also use !username in cond
        console.log("Please enter name")
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("pia"))
// console.log(loginUserMessage())

//where number of arguments are not fixed --> to solve this we use rest operator sybolise as ... 
//here ... name (rest/spread) depend on working

function calculateCartPrice(val1,...num1){
    return num1
}
//only print first value
//console.log(calculateCartPrice(200,300,500))

//function with object
const user={
    username:"kayle",
    price :200
}

function handleObject(anyobj){
 console.log(`USERNAME IS ${anyobj.username} and price is ${anyobj.price}`)
}
//handleObject(user)

//directobject pass
handleObject({
    username:"kim",
    price :400
})

//pass array to function
const arr=[2000,4000,609,676]
function returnArraysecondvalue(myarr){
    return myarr[1]
}
// console.log(returnArraysecondvalue(arr))
console.log(returnArraysecondvalue([2000,4000,609,676]))