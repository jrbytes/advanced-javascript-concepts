// const multiplyBy = function(num1) {
//   return function(num2) {
//     return console.log(num1*num2)
//   }
// }

const multiplyBy = (num1) => (num2) => console.log(num1*num2)

multiplyBy(4)(6)

// const multiplyByTwo = multiplyBy(2)
// const multiplyByFive = multiplyBy(5)
// multiplyByTwo(4)
// multiplyByTwo(10)
// multiplyByFive(10)