const name="kavy"
//new way to declare string
const kname= new String('kavi')
const repoCount=7
//console.log(name+repoCount)
//to inject variable in between
console.log(`Hello my name is ${kname} and my repositoy count is ${repoCount}`)
console.log(kname)
console.log(name.toUpperCase())
console.log(kname[1])
console.log(kname.__proto__);
console.log(kname.length)
console.log(kname.charAt(3));
console.log(kname.indexOf('v'))

const k1=new String("hey_gari")
//cant give negative value in sub string
const r1=k1.substring(0,6)
console.log(r1)

const r2=k1.slice(-6,8)
console.log(r2)

const r3="     hey   "
console.log(r3)
console.log(r3.trim())
//to replace
console.log(k1.replace("_"," "))
//to check
console.log(k1.includes("_"))

//split: to split with specified digit and gives the output in arrays
console.log(k1.split("_"))