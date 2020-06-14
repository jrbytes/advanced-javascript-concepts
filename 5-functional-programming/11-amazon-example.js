const user = {
  name: 'Kim',
  active: true,
  cart: [],
  purchases: []
}

let amazonHistory = []

const compose = (f, g) => (...args) => f(g(...args))

const test = purchaseItem(
  emptyCart,
  buyItem,
  aplyTaxToItems,
  addItemToCart,
)(user, {name: 'laptop', price: 887})
console.log(test)

function purchaseItem(...fns) {
  return fns.reduce(compose)
}

function addItemToCart(user, item) {
  amazonHistory.push(user)
  const updateCart = user.cart.concat(item)
  return Object.assign({}, user, { cart: updateCart })
}

function aplyTaxToItems(user) {
  amazonHistory.push(user)
  const { cart } = user
  const taxRate = 1.3
  const updatedCart = cart.map(item => {
    return {
      name: item.name,
      price: item.price * taxRate,
    }
  })
  return Object.assign({}, user, { cart: updatedCart })
}

function buyItem(user) {
  amazonHistory.push(user)
  return Object.assign({}, user, { purchases: user.cart })
}

function emptyCart(user) {
  amazonHistory.push(user)
  return Object.assign({}, user, { cart: [] })
}
console.log(amazonHistory)