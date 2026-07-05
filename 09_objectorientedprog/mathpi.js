const descriptor1=Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(Math.PI)
// Math.PI=90
// console.log(Math.PI)//value does not change
// console.log(descriptor)//here this is writable false and enumerable false thus it is so hard codded that it cant be change

const Myobj={
    name:"kami",
    age:23,
    isAvailable:true,
    BringFile:function(){
        console.log("file is not there");
        
    }
}

// console.log(Myobj);
//TO CHNAGE PROPERTY OF OUR OBJECT
// console.log(Object.getOwnPropertyDescriptor(Myobj,"age"))

//enumerable decides whether a property should appear when JavaScript loops through an object.

Object.defineProperty(Myobj,'age',{
    writable: false,
    // enumerable: false
})
// console.log(Object.getOwnPropertyDescriptor(Myobj,"age"))

//itterate object
for (let [key,value] of Object.entries(Myobj)) {
    if(typeof value!== 'function'){

    console.log(`key :${key} and Value: ${value}`);
    }
}