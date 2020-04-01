// function scope
// vs
// block scope

// Outras linguagens têm Escopo em Bloco

// Outras linguagens não permitem que 
// compartilhe o que estiver dentro das chaves
// Com ES6 o JS incluiu let e const para prevenir
if (5 > 4) {
  let secret = '12345'
}

secret

// Para evitar console final use let i = 0
function loop() {
  for (var i = 0; i < 5; i++) {
    console.log(i)
  }
  console.log('final', i)
}
loop()