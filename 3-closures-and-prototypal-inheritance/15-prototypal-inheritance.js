const obj = {
  name: 'Sally'
}
obj.hasOwnProperty('name') // true

function a() {}
a.hasOwnProperty('name') // true

const array = []
array.hasOwnProperty('map') // false
array.__proto__.hasOwnProperty('map') // true

// a prop proto mora no protótipo