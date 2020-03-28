// Perigoso de usar, pq parece matriz, mas não são.

function marry(person1, person2) {
  console.log('arguments', arguments)
  console.log(Array.from(arguments))
  return `${person1} is now married to ${person2}`
}

function marry2(...args) {
  console.log('arguments', args)
  console.log(Array.from(arguments))
  return `${args[0]} is now married to ${args[1]}`
}

marry2('Tim', 'Tina')