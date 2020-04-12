// Closures desbloqueia algumas habilidades interessantes em nossos programas.
// Podemos passar funções como dados, como qualquer outro tipo em JS.
// Closures permite acessar funções de determinado escopo, mesmo após a saída.

// function a() {
//   let grandpa = 'grandpa'
//   return function b() {
//     let father = 'father'
//     return function c() {
//       let son = 'son'
//       return console.log(`${grandpa} > ${father} > ${son}`)
//     }
//   }
// }
// const one = a()

// function boo(string) {
//   return function(name) {
//     return function(name2) {
//       console.log(`hi ${string} ${name} ${name2}`)
//     }
//   }
// }


const boo = (string) => (name) => (name2) =>
  console.log(`${string} ${name} ${name2}`)

boo('hi')('Jr')('Dani')
// const booString = boo('hi')