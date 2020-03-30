// Cada contexto tem um scope chain, cadeia de escopo,
// que víncula e fornece acesso às variáveis do 
// contexto global, que estão no ambiente pai

var x = 'x'

function findName() {
  console.log(x)
  var b = 'b'
  return printName()
}

function printName() {
  console.log(x)
  var c = 'c'
  return 'Jr Bytes'
}

function sayMyName() {
  console.log(x)
  var a = 'a'
  return findName()
}

sayMyName()