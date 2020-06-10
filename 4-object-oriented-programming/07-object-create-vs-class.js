// Há programadores q preferem um a outro. 
// Vai conforme a equipe queira trabalhar
Object.create()

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
