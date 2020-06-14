// não poluir o escopo global
function memoizedAddTo80() {
  let cache = {}
  return function(n) {
    if (n in cache) {
      console.log('memoized')
      return cache[n]
    } else {
      console.log('long time')
      cache[n] = n + 80
      return cache[n]
    }
  }
}

const memoized = memoizedAddTo80()

console.log(memoized(5))
console.log(memoized(5))
console.log(memoized(5))
console.log(memoized(2))
console.log(memoized(2))