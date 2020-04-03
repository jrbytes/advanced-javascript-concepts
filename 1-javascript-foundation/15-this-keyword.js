// 1. Fornece métodos para acessar o objeto
const obj = {
  name: 'Billy',
  sing() {
    return 'lalala ' + this.name
  },
  singAgain() {
    return this.sing() + '!'
  }
}
obj.singAgain()

// 2. Podemos executar o mesmo código por vários objetos
function importantPerson() {
  console.log(this.name+'!')
}
const name = 'Sunny'
const obj1 = {
  name: "Cassy",
  importantPerson: importantPerson
}
const obj2 = {
  name: "Jacob",
  importantPerson: importantPerson
}
obj1.importantPerson()

// Simplifica o código, não estamos repetindo-o