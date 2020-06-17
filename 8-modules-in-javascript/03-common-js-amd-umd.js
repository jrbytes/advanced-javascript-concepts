// CommonJS and AMD

// CommonJS
var module1 = require('module1')
var module2 = require('module2')

function fight() {

}

module.exports = {
  fight
}

// AMD
define(['module1', 'module2'],
  function(module1Import, module2Import) {
    var module1 = module1Import
    var module2 = module2Import

    function dance() {

    }

    module.exports = {
      dance
    }   
  }
)