function sayMyName() {
  var a = 'a'
  return function findName() {
    var b = 'b'
    return function printName() {
      var c = 'c'
      console.log(a, b, c)
      return 'Jr Bytes'
    }
  }
} 

sayMyName()()()

// Escopo aninhado, passa a variável do pai para o filho
// o inverso não é possível, segue mesma lógica

// Usar val() pode enganar o escopo do JS
// por isso evita usar para ter um código otimizado