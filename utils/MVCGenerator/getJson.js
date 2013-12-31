var fs = require('fs');
var EJS = require('ejs').ejs;
EJS.Compiler();
var tableInfos = fs.readFileSync("tableInfo.txt",'UTF-8');

tableInfos = tableInfos.replace(/\).*/g,')').replace(/`/g,'"');
tableInfos = tableInfos.replace(/[ ]\"/g,'{$1 : "');
tableInfos = tableInfos.replace(/\"[ ]/g,'", $2 : "');
tableInfos = tableInfos.replace(/\(/g,'", $3 : ');
tableInfos = tableInfos.replace(/\)/g,'},');

tableInfos = tableInfos.replace(/\$1/g,'"name"');
tableInfos = tableInfos.replace(/\$2/g,'"type"');
tableInfos = tableInfos.replace(/\$3/g,'"length"');

fs.writeFileSync( "tableInfos.json",tableInfos);
//console.log(tableInfos);