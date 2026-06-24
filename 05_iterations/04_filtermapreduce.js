//const programming=["js","rb","cpp","java","py"]

// const values=programming.forEach((item)=>{
//     //console.log(item);
//     return item;
// })
// console.log(values);//for each return undefined

//FILTER
// const myNums=[1,2,3,4,5,6,7,8,9,10]
// const values=myNums.filter((item)=>item>4)//give return value

//with curly braces we started a scope which  only works with return keyword
// const values=myNums.filter((item)=>{ 
//     return item > 4
// })
// console.log(values)
 
// const newNum=[]
// //do same with for each
// myNums.forEach((num)=>{
//     if(num>4){
//         newNum.push(num)
//     }
// })
// console.log(newNum)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


//   const userBooks=books.filter((bk)=> bk.genre==="History" ).map((item)=>item.title)
// const userBooks=books.filter((bk)=>bk.publish>=2000 && bk.edition>2015)
//   console.log(userBooks)

//Map
// const myNums=[1,2,3,4,5,6,7,8,9,10]
// const values=myNums.map((num)=>num+10)

//chaining
// const values=myNums.map((num)=>num+10).map((item)=> item)
// const values=myNums.filter((num)=>num%2===0).map((num)=>num+10)
// console.log(values)

//reduce
//sum of all elemenes
//myNums.reduce( (acc, curr) => acc+curr, initial) 
//here intial value is given by user goes as in first iterration to accumulato(acc)them onwards sum goes to accumulator
// const values=myNums.reduce((x,y)=>x+y,0)
// console.log(values)

const myNums=[1,2,3]
// const myTotal=myNums.reduce(function (acc,curval){
//     console.log(`acc:${acc} and current value: ${curval}`)
//     return acc+curval
// },0)
const myTotal=myNums.reduce( (acc, curr) => acc+curr, 0) 
// console.log(myTotal)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const totalPay=shoppingCart.map((shop)=>shop.price).reduce((x,y)=>x+y,0)
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(totalPay)
console.log(priceToPay)