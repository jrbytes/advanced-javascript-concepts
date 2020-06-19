(async function() {
  try {
    await Promise.resolve('ooopsie #1')
    await Promise.reject('ooopsie #2')
  } catch (error) {
    console.log(error)
  }
  console.log('is this still good?')
})()