var ejs = require('ejs'),
    fs = require('fs'),
    file = fs.readFileSync(__dirname + '/model.ejs', 'UTF-8');

files = [ "\php\controllers\[modules].php.ejs",
"\php\models\[module].php.ejs",
"\repository\[modules].js.ejs",
"\viewmodels\[module]\edit.js.ejs",
"\viewmodels\[module]\list.js.ejs",
"\viewmodels\[module]\[module].js.ejs",
"\views\[module]\edit.html.ejs",
"\views\[module]\list.html.ejs",
"\views\[module]\_details.html.ejs",
"\views\[module]\_edit.html.ejs"]
	
	
file = file.replace(/\<[/]?script\>/gi,"");
    var rendered = ejs.render(file, {"module": "cliente",
        "fields" : [ {"name" : "id", "type" : "int", "length" : 11},
            {"name" : "nombre", "type" : "varchar", "length" : 50},
            {"name" : "apellido", "type" : "varchar", "length" : 50},
            {"name" : "empresa", "type" : "varchar", "length" : 50},
            {"name" : "email", "type" : "varchar", "length" : 100},
            {"name" : "telefono", "type" : "varchar", "length" : 20},
            {"name" : "comentarios", "type" : "varchar", "length" : 1000},
            {"name" : "direccion", "type" : "varchar", "length" : 1000}]});

console.log(rendered);




