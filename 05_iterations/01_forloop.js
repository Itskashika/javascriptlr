//for
// for (let index = 0; index < 10; index++) {
//     const element = index;
//     if(element==5){
//         console.log("5 is my no")
    
//     }
//     console.log(element);
// }
//  for(let i=0;i<5;i++){
//     console.log(`Outer Loop :${i}`)
//     for(j=0;j<5;j++){
//         console.log(`Inner Loop :${j}`)
//     }
//  }

//  let myArray=["apples","mangoes","bananas"]
//  for(let i=0;i<myArray.length;i++){
//     const element=myArray[i]
//     console.log(element)
//  }
for (let i = 1; i < 20; i++) {
    const element = i;
    if(i==5){
        console.log("detected 5")
        break;
    }
    console.log(element);
 }

 for (let i = 1; i < 20; i++) {
    const element = i;
    if(i==5){
        console.log("detected 5")
        continue;
    }
    console.log(element);
 }