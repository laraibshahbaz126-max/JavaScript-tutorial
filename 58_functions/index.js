// console.log("hey you are nice!")
// console.log("hey you are good!")
// console.log("hey you are attractive!")
// console.log("hey you are kind!")
// function mine(i) {
//     console.log("hey " + i + " are nice!")
// console.log("hey " + i + " are good!")
// console.log("hey " + i + " are attractive!")
// console.log("hey " + i + " are kind!")
// }
// mine("We")
// mine("They")
// mine("LARAIB and YOU")
function sum(a, b, c=3) {
// console.log(a + b) 
return a + b + c
}
 result1 = sum(5, 5)
 result2 = sum(5, 4)
 result3 = sum(3, 5, 1)

console.log("The sum of these numbers is:" ,result1)
console.log("The sum of these numbers is:" ,result2)
console.log("The sum of these numbers is:" ,result3)

const func1 = (x)=>{
    console.log("I am an arrow function", x)
    
}
func1(24)
func1(78)
func1(34)