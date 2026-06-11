// Array=[2,4,5,10,6,8,9,1,12,11]
// console.log(Array)
// Array.pop()
// console.log(Array)
// console.log(Array)
// ray.push(40)
//  console.log(Array)
//  console.log(Array.includes(40))
//  console.log(Array.indexOf(3))
//  Array.shift()
//  console.log(Array)
//  Array.unshift(1,12,11)
//  console.log(Array)
// console.log(Array.slice(1,6))
//  Array.splice(1,2)
//  console.log(Array)
//  Array.indexOf(10)
// console.log(Array.indexOf(10))
// console.log(Array)
// Array.slice(1,6)

// Array.splice(1,4)
// console.log(Array)



// higher order collection

// fruits=["apple","banana","mango","licchi"]
// fruits.forEach(Element => {
//     console.log(Element)
// });

// salary=[1000,200,3000,4000,5000]
// salary.map(i=>{

//     console.log(i+0.3*i)
// });

//find functiion

num=[2,3,4,5,6,7,8,9]
// const large=num.find(i=>{
//     return i>5
// })
// console.log(large)
const large=num.filter(i=>{
    return i>5
 })
 console.log(large)
