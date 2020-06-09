// Arrays[] & Functions() = Object {}
// JavaScript usa Protótipo em toda herança

const array = []
array.__proto__
array.__proto__.__proto__
array.toString()

// Um objeto obtém acesso às propriedades e métodos de outro objeto 
// através da cadeia de protótipos 

function a() {}
a.__proto__
a.__proto__.__proto__
a.toString()

// Esse recurso é único não é comum em outras linguagens, 
// usa protótipo em toda herança

const obj1 = {}
obj1.__proto__

// Continua