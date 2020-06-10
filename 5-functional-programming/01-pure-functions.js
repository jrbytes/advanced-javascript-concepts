// Na POO tem os 4 pilares. Na programação funcional há apenas a função pura.

// no side effects | sem efeitos colaterais
const array = [1,2,3]
function removeLastItem(arr) {
  const newArray = [].concat(arr)
  newArray.pop()
  return newArray
}
function multiplyBy2(arr) {
  return arr.map(item => item*2)
}
const array2 = removeLastItem(array)
const array3 = multiplyBy2(array)
console.log(array, array2, array3)

// input --> output
function a(num1, num2) {
  return num1 + num2
}
a(2, 2)

function b(num) {
  return num * 2
}
b(a(2, 2)) // b(4) - não importa a opinião se chegar ao mesmo resultado...

// mais tarde, as funções puras facilitarão os testes de funções
// funções previsíveis que minimiza a possibilidade de erros do código