Date.prototype.lastYear = function() {
  return this.getFullYear() - 1
}
new Date('1900-10-10').lastYear()

Array.prototype.map = function() {
  let arr = []
  for (let i = 0; i < this.length; i++) {
    arr.push((this[i] + '🗺'))
  }
  return arr
}
console.log([1, 2, 3].map())

// Esse tipo de alteração é perigosa, porque alterar o prototype,
// fará essa alteração se propagar pelo app