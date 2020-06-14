function addTo80(n) {
  console.log('long time')
  return n + 80
}

let cache = {}

function memoizedAddTo80(n) {
  if (n in cache) {
    console.log('memoized')
    return cache[n]
  } else {
    console.log('long time')
    cache[n] = n + 80
    return cache[n]
  }
}
console.log(memoizedAddTo80(5))
console.log(memoizedAddTo80(5))
console.log(memoizedAddTo80(5))
console.log(memoizedAddTo80(6))
console.log(memoizedAddTo80(6))