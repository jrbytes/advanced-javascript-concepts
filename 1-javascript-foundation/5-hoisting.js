var favouriteFood = 'grabes'

var foodThoughts = function() {
  console.log('Original favourite food: ' + favouriteFood)

  var favouriteFood = 'sushi'

  console.log('New favourite food: ' + favouriteFood)
}

foodThoughts()

// Sempre que cria uma função, um novo contexto é criado
// por isso o primeiro console é undefined