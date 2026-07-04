let myName="kashika     "
// console.log(myName.trim().length)
// console.log(myName.truelength)

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}
//here object is superior of all and if object have method then all other also have
Object.prototype.kashika=function(){
    console.log(`kashika is present in all objects`);
}
heroPower.kashika();
Array.prototype.heykashika=function(){
    console.log(`kashika says hello`);
}
myHeros.kashika();
myHeros.heykashika();
// heroPower.heykashika();


//inheritance
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

// Teacher.__proto__ = User

//modern syntax 

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername="Kashi     "
String.prototype.truelength= function(){
     console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}


anotherUsername.truelength()