class AuthenticationError extends Error {
  constructor (message) {
    super(message)
    this.name = 'authenticationError'
    this.favouriteSnack = 'grapes'
  }
}

class DatabaseError extends Error {
  constructor (message) {
    super(message)
    this.name = 'DatabaseError'
    this.message = 'grapes'
  }
}

class PermissionError extends Error {
  constructor (message) {
    super(message)
    this.name = 'PermissionError'
    this.favouriteSnack = 'grapes'
  }
}


const a = new DatabaseError('oopsie')
a instanceof DatabaseError