function printName() {
  return 'Jr Bytes'
}

function findName() {
  return printName()
}

function sayMyName() {
  return findName()
}

sayMyName()

// Global execution context
// this === window
// true