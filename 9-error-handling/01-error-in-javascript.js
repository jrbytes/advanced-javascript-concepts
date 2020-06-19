const myError = new Error('oopsie')
console.log(myError.message)
console.log(myError.name)
// console.log(myError.stack)

function a() {
  const b = new Error('what?')
  return b
}
console.log(a().stack)

// syntax error
// (,

// ReferenceError: something is not defined
// something