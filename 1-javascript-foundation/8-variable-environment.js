// Cada contexto de execução é um pequeno universo
// inicialmente não se conhecem

function two() {
  var isValid // undefined
}

function one() {
  var isValid = true // local env
  two() // new context
}

var isValid = false
one() // new context

// two() --undefined
// one() --true
// global() --false