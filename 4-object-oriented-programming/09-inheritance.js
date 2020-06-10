class Character {
  constructor(name, weapon) {
    this.name = name
    this.weapon = weapon
  }
  
  attack() {
    return `attack with ${this.weapon}`
  }
}

class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon)
    this.type = type
    console.log(this)
  }
}

class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon)
    this.color = color
    console.log(this)
  }
  makefort() {
    return 'strongest fort in the world made'
  }
}

const dolby = new Elf('Dolby', 'cloth', 'house')
dolby

const shrek = new Ogre('Shrek', 'club', 'green')
console.log(shrek.makefort())

console.log(dolby instanceof (Elf && Character))
console.log(Ogre.prototype.isPrototypeOf(shrek))
console.log(Character.prototype.isPrototypeOf(Ogre.prototype))