// Function Expression
var canada = function() {
  console.log('cold')
}

// var canada = () => {
//   console.log('cold')
// }

// Function Declaration
function brazil() {
  console.log('warm')
}

// Function Invocation/Call/Execution
canada()
brazil()

function marry(person1, person2) {
  console.log('arguments', arguments)
  return `${person1} is now married to ${person2}`
}

marry('Tim', 'Tina')

// Argumentos ficam disponíveis quando cria 
// um novo contexto de execução