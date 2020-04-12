// Memory efficient

function heavyDuty(index) {
  const bigArray = new Array(7000).fill('😊')
  console.log('Created!')
  return console.log(bigArray[index])
}
heavyDuty(687)
heavyDuty(687)
heavyDuty(687)
const getHeavyDuty = heavyDuty2()
getHeavyDuty(687)
getHeavyDuty(700)
getHeavyDuty(800)

function heavyDuty2() {
  const bigArray = new Array(7000).fill('😊')
  console.log('Create again!')
  return function(index) {
    console.log('Created!')
    return console.log(bigArray[index])
  }
}