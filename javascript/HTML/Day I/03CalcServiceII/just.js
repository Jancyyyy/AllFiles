
module.exports.mult = function(x,y){
    var calcModule = require('./calculator');
    var calc = new calcModule.Calculator();
    return calc.multiplication(x,y);
}