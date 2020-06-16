// Callback Queue - Task Queue
setTimeout(() => {console.log('1', 'is the loneliest number')}, 0)
setTimeout(() => {console.log('2', 'can be as bad as one')}, 10)

// Job Queue - Microtask Queue
Promise.resolve('hi').then((data) => console.log('3', data))

// console.log
console.log('4', 'is a crowd')