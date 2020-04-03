// function a() {
//   console.log('hi')
// }

// a.apply()

// a() é uma abreviação de a.call()
// a.apply() também faz o mesmo


const wizard = {
  name: 'Itamazor',
  health: 50,
  heal(num1, num2) {
    return this.health += num1 + num2
  }
}
const archer = {
  name: 'Arqueiro Verde',
  health: 30
}
console.log('1', archer)
wizard.heal.call(archer, 50, 40)
console.log('2', archer)
// Se for apply() use colchetes nos subparâmetros:
// wizard.heal.apply(archer, [50, 40])

// Se for bind():
// const healArcher = wizard.heal.bind(archer, 50, 40)
// healArcher()