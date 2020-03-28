function printName() {
  return 'Jr Bytes'
}

function findName() {
  function a() {
    var car = 'Tesla'
  }
  return printName()
}

function sayMyName() {
  return findName()
}

sayMyName()