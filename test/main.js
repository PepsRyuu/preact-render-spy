let fs = require('fs');

global.require = require("esm")(module);

let test_cases = fs.readdirSync('./test/cases');
test_cases.forEach(file => {
    global.require('./test/cases/'+file);
});