Promise.resolve('asyncfail')
  .then(response => {
    // throw new Error('#1 fail')
    // return response
    Promise.resolve().then(() => {
      throw new Error('#3 fail')
    }).catch(console.log)
    return 5
  })
  .then(response => {
    console.log(response)
  }) // daqui p cima pode falhar e não retornar nada, falha silenciosamente
  .catch(err => {
    console.log('final error', err)
  })