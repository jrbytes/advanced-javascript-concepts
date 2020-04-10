// com a função fora estamos executando-a apenas uma vez
function a(param = 1) {
  return param
}

for (let i = 0; i < 5; i++) {
  a()
}