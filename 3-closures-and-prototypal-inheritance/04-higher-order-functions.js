// function() - function(a, b) - HOF
// HOF: São funções que podem assumir uma função como argumento
// ou função que retorna outra função.

const giveAccessTo = name => 
  console.log(`Access granted to ${name}`)

function authenticate(verify) {
  // processo de logon
  let array = []
  for (let i = 0; i < verify; i++) {
    array.push(i)
  }
  // processo de logon
  return giveAccessTo(person.name)
}

function sing(person) {
  return console.log(`My name is ${person}`)
}

function letPerson(person, fn) {
  if (person.level === 'admin') {
    return fn(person)
  } else if (person.level === 'user') {
    return fn(person)
  }
}

letPerson({level: 'user', name: 'Bytes'}, sing)