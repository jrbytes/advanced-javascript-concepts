// Compose | data -> fn -> data -> fn -> data ...

const compose = (f, g) => (data) => f(g(data))
const pipe = (f, g) => (data) => g(f(data)) // inverte a ordem de f g

const multiplyBy3 = (num) => num * 3
const makePositive = (num) => Math.abs(num)

const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive)

console.log(multiplyBy3AndAbsolute(-50))