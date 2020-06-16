// example 1
const animals = {
  macaco: 2,
  leao: 10,
  cao: 5,
}
const { macaco, ...rest } = animals
console.log(macaco, rest.leao, rest.cao)

// example 2
const array = [1,2,3,4,5]
function sum(a, b, c, d, e) {
  return a + b + c + d + e
}
console.log(sum(...array))

// example 3
const animals = {
  tiger: 23,
  lion: 5,
  monkey: 2,
  bird: 1
}
function objectSpread(p1, p2, p3) {
  console.log(p1)
  console.log(p2)
  console.log(p3)
}
const { tiger, lion, ...rest } = animals
console.log(objectSpread(tiger, lion, rest))