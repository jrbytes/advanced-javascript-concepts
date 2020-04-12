let view
function initialize() {
  let called = 0
  return function() {
    if (called > 0) {
      return
    } else {
      view = '🎄'
      called++
      console.log('view has been set!')
    }
  }
}

const startOnce = initialize()
startOnce()
startOnce() // executa o initialize apenas uma vez
console.log(view)