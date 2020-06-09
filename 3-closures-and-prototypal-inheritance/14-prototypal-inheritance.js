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

lizard.__proto__ = dragon
for (let prop in lizard) {
  if (lizard.hasOwnProperty(prop)) {
    console.log(prop)
  }
}

lizard.haha() // haha is not a function
lizard.haha // undefined

// __proto__ não deve ser utilizado nas aplicações

const obj = {}
obj.__proto__ // retorna o objeto base
obj.__proto__.__proto__ // retorna null significa que não há mais nada