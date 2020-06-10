// ES6 Class
class Elf {
  constructor(name, weapon) {
    this.name = name
    this.weapon = weapon
  }
  
  attack() {
    return `attack with ${this.weapon}`
  }
}

const peter = new Elf('Peter', 'stones')
console.log(peter instanceof Elf)
console.log(peter.attack())

const sam = new Elf('Sam', 'fire')
console.log(sam.attack())

// Uma classe é um objeto, ainda é um protótipo de toda herança,
// herança pseudo-clássica