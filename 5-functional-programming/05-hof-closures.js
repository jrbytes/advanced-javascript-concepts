// HOF
// const hof = () => () => 5
// console.log(hof()())
const hof = (fn) => fn(5)
hof(function a(x){return x})

// Closures
const closure = function() {
  let count = 0
  return function increment() {
    count++
    return count
  }
}
const incrementFn = closure()
console.log(incrementFn())
console.log(incrementFn())