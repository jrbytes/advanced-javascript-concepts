const multiply = (a, b) => a * b
const curriedMultiply = (a) => (b) => a * b
console.log(curriedMultiply(5)(4))
const curriedMultiplyBy5 = curriedMultiply(5)
console.log(curriedMultiplyBy5(5))