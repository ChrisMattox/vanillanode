var randomNumber = require('./module1');
var money = require('./module2');


var number = function(min, max){
    return money(randomNumber(min, max));
}

var balance = function balance(){
  return "Account balance: ";
}

module.exports.number = number;
module.exports.balance = balance;
