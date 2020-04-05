var a = 5
var b = a
b++


let obj1a = {name:'Yao', password:'123'}
let obj2a = obj1a
obj2a.password = 'easypeasy'
// Como altera nos dois obj, isso economiza memo
// Porém tem q ter cuidado para não alterar acidentalmente


var c = [1,2,3,4,5]
var d = c
d.push(98876)
// Matrizes também são objetos


var e = [1,2,3,4,5]
var f = [].concat(e) // clonar uma matriz
f.push(98876)


let obj = {a: 'a', b: 'b', c: 'c'}
let clone = Object.assign({}, obj)
obj.c = 5

let obj2 = {
  a: 'a',
  b: 'b',
  c: {
    deep: 'try and copy me'
  }
}
let clone2 = Object.assign({}, obj2)
let clone3 = {...obj2}
// Um clone profundo, usa desempenho, pode demorar
let superClone = JSON.parse(JSON.stringify(obj2))

obj2.c.deep = 'hahaha'
console.log(obj2)
console.log(clone2)
console.log(clone3)
console.log(superClone)