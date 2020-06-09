__proto__ // nunca deve ser utilizada assim por causa do desempenho

let human = {
  mortal: true
}
let socrates = Object.create(human)
socrates.age = 70
console.log(socrates)
console.log(human.isPrototypeOf(socrates))