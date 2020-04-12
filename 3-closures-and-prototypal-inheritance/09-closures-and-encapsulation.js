// testar no navegador

const makeNuclearButton = () => {
  let timeWithoutDestruction = 0
  const passTime = () => timeWithoutDestruction++
  const totalPeaceTime = () => timeWithoutDestruction
  const launch = () => {
    timeWithoutDestruction = -1
    return 'boom'
  }
  setInterval(passTime, 1000)
  return {
    // launch: launch,                 // apagar para encapsular
    totalPeaceTime: totalPeaceTime
  }
}
const ohno = makeNuclearButton()
// inicia contagem com esse
ohno.totalPeaceTime()
// explode com esse
ohno.passTime()                         // ao encapsular não é possível "explodir"