// const num1=new Number(90)
// console.log(num1)
// console.log(num1.toString())
// console.log(num1.toFixed(2))
// const num2=126.677673
// console.log(num2.toPrecision(4))
// const hundreds=100000000
// //american style
// console.log(hundreds.toLocaleString())
// //indian style
// console.log(hundreds.toLocaleString('en-IN'))


//-------------------MATHS------------------
// console.log(Math)
// console.log(Math.abs(-3))
// console.log(Math.round(977.45))
// //to top round
// console.log(Math.ceil(67.3))
// //to down value
// console.log(Math.floor(98.4))

// console.log(Math.sqrt(25))
// console.log(Math.min(3,7,2,8,9))
// console.log(Math.max(3,7,2,8,9))

// random value between 0 to 1
console.log(Math.random())
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)
//Math.random()*10 this is used in above to avoid zero case

//IMPORTANT------------------------------------------------------------------
//TO GET THE VALUE BETWEEN 40 TO 50

const min =40
const max=50
console.log(Math.floor(Math.random()*(max-min+1))+min)
//--------------------------------------------------------------------------
