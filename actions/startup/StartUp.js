/**
* @Author: Layne Faler <laynefaler>
* @Date:   10-10-2016
* @Email:  laynefaler@gmail.com
* @Last modified by:   laynefaler
* @Last modified time: 10-10-2016
*/

var TextCommand = require('../commands/TextCommand.js');
var PrintDocCommand = require('../commands/PrintDocCommand.js');
var CreateCommand = require('../commands/CreateCommand.js');

var StartUp = function(commandPattern, args, flags) {
  var commanderInCharge = function(mod) {
    var commander = new mod(...args);
    commander.handle(flags);
  };

  var execute = function() {
    switch (commandPattern) {
      case 'arr':
        commanderInCharge(TextCommand);
        break;
      case 'create':
        commanderInCharge(CreateCommand);
        break;
      default:
        commanderInCharge(PrintDocCommand);
    }
  };

  return {
    execute: execute;
  }

};

module.exports = StartUp;
