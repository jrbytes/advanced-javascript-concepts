const array = [1, 2, 3, 4]

for (var i = 0; i < array.length; i++) {
  (function(closureI) {
    setTimeout(function() {
      console.log('I am at index ' + array[closureI])
    }, 3000)
  })(i)
}

// Linguagens como Python e Ruby adicionaram, e C# e C++ também estão
// adicionando ferramentas para trabalhar com escopo lexical.