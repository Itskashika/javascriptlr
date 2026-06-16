let myDate = new Date()

console.log(typeof myDate)

// Prints the complete Date object
console.log(myDate)

// Converts the date to a readable string format
console.log(myDate.toString())

// Displays only the date portion as a readable string
console.log(myDate.toDateString())

// Returns the date in ISO 8601 format (UTC)
console.log(myDate.toISOString())

// Returns a JSON-compatible date string
console.log(myDate.toJSON())

// Formats the date and time according to the local timezone and locale
console.log(myDate.toLocaleString())

// Returns the 4-digit year
console.log(myDate.getFullYear())

// Returns the month index (0 = January, 11 = December)
console.log(myDate.getMonth())

// to declare specific date
//month start from 0 in JS

//let mycreatedDate= new Date(2025,0,24)
let mycreatedDate= new Date("2025-01-24")
console.log(mycreatedDate.toDateString())

let mycreatedDate1= new Date(2025,0,24,4,45,55)
console.log(mycreatedDate1.toLocaleString())

//-------------------Time Stamp-------------
let myTimeStamp=Date.now()
console.log(myTimeStamp)
console.log(mycreatedDate.getTime())
//imp convert into seconds
console.log(Math.floor(Date.now()/1000))

//tp get exact month
let newDate=new Date();
console.log(newDate.getMonth()+1)
console.log(`Todays is ${newDate.getDate()}th day of ${newDate.getMonth()+1}th monthand year is ${newDate.getFullYear()} and current time is ${newDate.getHours()} : ${newDate.getMinutes()} : ${newDate.getSeconds()}`)

console.log(newDate.toLocaleString('default',{
    weekday:'long',
    month:'long',
    day:'numeric',
    year:'numeric',
    hour:'numeric',
    minute:'numeric',
    second:'numeric',
    timeZoneName:'short'
}))