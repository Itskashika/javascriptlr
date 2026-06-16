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
console.log(loginUserMessage("pia"))
console.log(loginUserMessage())
