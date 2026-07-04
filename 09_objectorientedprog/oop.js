const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,
    getUserDetails:function(){
       //console.log("Got user details from database");
       // console.log(`Username: ${this.username}`);
        console.log(this);
        
    }
}
//console.log(user.getUserDetails());
// console.log(this);
//lefthand side variable name and right hand side is function passed value
function User(username,loginCount,isLoggedIn){
     this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    this.greetings=function(){
         console.log(`Welcome ${this.username}`);
    }
    
}
// const userOne=User("Piya",23,true)
// const userTwo =  User("ChaiAurCode", 11, false)
// console.log(userOne);
// // here user two overwrite all the values of user one


//new-> step 1:empty object generate firstof all( instance) 
//step2: constructor function call because of new keyword
//step3: this key inject values to function
//step4: we got them in function
const userOne = new User("piya", 12, true)
const userTwo = new User("kashi", 11, false)
// console.log(userOne);
// console.log(userTwo);
console.log(userOne.constructor);// reference of itself