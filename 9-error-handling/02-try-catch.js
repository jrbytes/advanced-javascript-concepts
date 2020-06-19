// Como lidar com error para deixar a aplicação funcionando
function fail() {
  try {
    throw new Error('Oppsies!!!')
    console.log('this works')
  } catch (error) {
    console.log(error, 'oops')
  } finally {
    console.log('still good')
    return 'returning fail'
  }
  console.log('=)')
}
fail()