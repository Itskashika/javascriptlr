//scope
//var follows global scope and let and const follow local scope
let a=20
if(true){
    let a=34
    //console.log("INNER :",a)
}
//console.log(a)
//nested scope

//child function can access parent function variable but parent function cannot access child function variable
function one(){
    const username="pia"
    function two(){
        const website="pia.com"
        console.log(username)
    }
    //console.log(website)
    two()
}
one()

//-----------------Imp-----------
//in this example
console.log(addone(5))
function addone(num){
    return num+1
}
addone(5)

//console.log(addtwo(5))//error because addtwo is function expression and not hoisted
const addtwo=function(num){
    return num+2
}
