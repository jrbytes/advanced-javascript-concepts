// import fight from 'thisfilename'
const harry = 'potter'
const valdemort = 'he who must not be named'

function jump() {
}

export function fight(char1, char2) {
  const attack1 = Math.floor(Math.random() * char1.length)
  const attack2 = Math.floor(Math.random() * char2.length)
  return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
}