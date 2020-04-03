// Quando há um objeto, pode-se utilizar o .
const a = function() {
  console.log('a', this)
  const b = function() {
    console.log('b', this)
    const c = {
      hi: function() {
      console.log('c', this)
    }}
    c.hi()
  }
  b()
}
a()


// No JS quando o Escopo Lexical que está disponível com
// variáveis de dados em que a função foi definida são
// variáveis disponíveis e não onde a função é chamada
// Porém, tudo em JS é tratado como excopo lexical menos
// a palavra this, esta palavra tem escopo dinâmico. Ou seja,
// não importa onde foi chamada, importa como foi chamada.
const obj = {
  name: 'Billy',
  sing() {
    console.log('a', this)
    var anotherFunc = function() {
      console.log('b', this)
    }
    anotherFunc()
  }
}
obj.sing()


// Para resolver isto, tem que adicionar uma arrowFunction,
// porque tem escopo lexical diferente
const obj = {
  name: 'Billy',
  sing() {
    console.log('a', this)
    var anotherFunc = () => {
      console.log('b', this)
    }
    anotherFunc()
  }
}
obj.sing()

// Ou
const obj = {
  name: 'Billy',
  sing() {
    console.log('a', this)
    var anotherFunc = function() {
      console.log('b', this)
    }
    return anotherFunc.bind(this)
  }
}
obj.sing()()

// Ou
const obj = {
  name: 'Billy',
  sing: function() {
    console.log('a', this)
    var self = this
    var anotherFunc = function() {
      console.log('b', self)
    }
    return anotherFunc
  }
}
obj.sing()()