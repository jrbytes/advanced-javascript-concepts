'use strict'

function weird() {
  height = 50
  return height
}

weird()

// Precisa declarar 'use strict' para emitir 
// o erro: height is not defined

// var heyhey = function doodle() {
//   // do something
//   return 'heyhey'
// }

// heyhey()
// doodle() // não pode acessar no escopo global