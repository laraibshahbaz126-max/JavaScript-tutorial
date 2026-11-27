let arr = [2,4,6,8]
//  let newarr = []
// for (let index = 0; index < c.length; index++) {
//     const element = c[index];
//     newarr.push(element**2)
    
// }
// console.log(newarr)
let newarr = arr.map((e,index,array)=>{
 return e**2
})
console.log(newarr)
const greaterThanSeven = (e)=>{
  if (e>7) {
    return true
    
  }  
    return false
}
 console.log(arr.filter(greaterThanSeven))

 let arr1 =[1,2,3,4,5,6]
 const red = (a, b)=>{
    return a*b
 }
 console.log(arr1.reduce(red))
 
 