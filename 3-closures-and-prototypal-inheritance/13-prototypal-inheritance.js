let dragon = {
  name: 'Tanya',
  fire: true,
  fight() {
    return 5
  },
  sing() {
    if (this.fire) {
      return `I am ${this.name}, the breather of fire` 
    }
  }
}

let lizard = {
  name: 'Kiki',
  fight() {
    return 1
  }
}

// Como lizard não tem fogo, ele não executará sing()
// const singLizard = dragon.sing.bind(lizard)
// console.log(singLizard())

lizard.__proto__ = dragon // dessa forma lizard obtém todos atributos de dragon
lizard.sing() // isso irá rodar
console.log(dragon.isPrototypeOf(lizard))