console.log('1------')
console.log(teddy)
console.log(sing())
console.log(sing2)

var teddy = 'bear'

// function expression
var sing2 = function() {
  console.log('uhh la la la')
}

// function declaration
function sing() {
  console.log('ohh la la la')
}

// Para não reservá-los na memória
// let teddy = 'bear' || const teddy = 'bear
// (function sing() {
//   console.log('ohh la la la')
// })