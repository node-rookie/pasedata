var tool = require('./index.js');
var path = require('path');
tool.excelToMongo(path.join(__dirname,"./excel/s_equip.xlsx"),path.join(__dirname,"./json"),2);