//array
//arrays are resizable and can contain a mix of different data types
//JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
//A shallow copy of an object is a copy whose properties share the same references .A deep copy of an object is a copy whose properties do not share the same reference.
const myArray1=[1,2,3,4,5,true,"kiran"]
const myArray2=[1,2,3,4,5]
const myArray3= new Array(1,3,5,7)
//console.log(myArray2[4])

//Array Methods
myArray2.push(6)
myArray2.push(7)
//console.log(myArray2)
myArray2.pop()
//console.log(myArray2)
//to add values at the beginning of the array we can use unshift method
myArray2.unshift(7)
//console.log(myArray2)
//to remove values from the beginning of the array we can use shift method
myArray2.shift()
//console.log(myArray2)

//returns true if the array contains the specified element, otherwise false
//console.log(myArray2.includes(3))

//returns the index of the specified element, otherwise -1
//console.log(myArray2.indexOf(9))

const newArray=myArray2.join()
//console.log(newArray)

//slice and splice methods
//slice(): Returns a selected portion of an array as a new array and does not modify the original array.
// splice(): Adds, removes, or replaces elements in an array and modifies the original array.

//console.log("A",myArray2)

const newsplicedarray=myArray2.splice(1,2)
//console.log("B",myArray2)
//console.log("C",newsplicedarray)
//Here:
// startIndex = 1 → start from element 1
// deleteCount = 2 → remove 2 elements

const arr = [0, 1, 2, 3, 4]

//console.log(arr.slice(1, 3)) // [1, 2]
//console.log(arr)             // [0, 1, 2, 3, 4]

const newsplicedarray2=myArray2.splice(1,3)
//console.log("D",myArray2)
//console.log("E",newsplicedarray2)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const vegetables = ["Carrot", "Broccoli", "Spinach"];
// //here array taken another array as an element
// fruits.push(vegetables)
// console.log(fruits) 

//to merge two arrays we can use concat method and save it in a new array
const allFruits = fruits.concat(vegetables)
//console.log(allFruits)

//spread operator can also be used to merge two arrays and here we can add more than two arrays if we want
const allFruits2 = [...fruits,...vegetables]
//onsole.log(allFruits2)

//flat
//The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const nestedArray = [1, 2, [3, 4], [5, 6, [7, 8]]];
//console.log(nestedArray)
const flattenedArray = nestedArray.flat(2);
//console.log(flattenedArray) 

//to make string in array
//console.log(Array.from("kiran"))

//console.log(Array.from({name:"kia"}))//we need to mention that we want to make array of key or value
 let s1=10
 let s2=20
 let s3=30
 console.log(Array.of(s1,s2,s3))//we can also use Array.of to make array of values