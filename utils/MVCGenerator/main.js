var ejs = require('ejs'), fs = require('fs'), file;
GLOBAL._  = require('underscore');
var ensureDir  = require('ensureDir');
_.str = require('underscore.string');
var path = require('path');
var config = loadConfig();
var moduleFiles = [
    "/php/controllers/[modules].php.ejs",
    "/php/models/[module].php.ejs",
    "/services/[modules].js.ejs",
    "/viewmodels/[module]/create.js.ejs",
    "/viewmodels/[module]/edit.js.ejs",
    "/viewmodels/[module]/list.js.ejs",
    "/models/[module].js.ejs",
    "/views/[module]/create.html.ejs",
    "/views/[module]/edit.html.ejs",
    "/views/[module]/list.html.ejs"
 ];

 var globalFiles = [
    "/main.js.ejs",
    "/viewmodels/shell.js.ejs",
    "/viewmodels/welcome.js.ejs",
	"/views/welcome.html.ejs",
    "/helpers/serializer.js.ejs",
     "/helpers/ajax.js.ejs",
     "/helpers/appSettings.js.ejs",
     "/views/shell.html.ejs",
	 "/services/accounts.js.ejs",
	 "/viewmodels/account/login.js.ejs",
	 "/viewmodels/account/logout.js.ejs",
	 "/views/account/login.html.ejs",
	 "/views/account/logout.html.ejs",
	 "/models/account.js.ejs"
 ];

 
_.each(moduleFiles,function(fileName){
    var file = fs.readFileSync(__dirname + '/templates/' + fileName, 'UTF-8');
    file = file.replace(/\<[/]?script\>/gi,"");	
    _.each(config.modules, function(module){
        var rendered = ejs.render(file, module);
        var newFileName = fileName
            .replace(/\[modules\]/g, module.modules)
            .replace(/\[module\]/g, module.module).replace(/\.ejs$/g,'');
        var newPath = __dirname +  '/output' +  newFileName;
        mkdirtree(newPath.replace(/[^/]*$/,"").replace(/\\/g,"/"));
        fs.writeFileSync(newPath,rendered,'UTF-8', 'w');
    });
});


_.each(globalFiles,function(fileName){
    var file = fs.readFileSync(__dirname + '/templates/' + fileName, 'UTF-8');
    file = file.replace(/\<[/]?script\>/gi,"");	
    var rendered = ejs.render(file, config);
    var newFileName = fileName.replace(/\.ejs$/g,'');
    var newPath = __dirname +  '/output' +  newFileName;
    mkdirtree(newPath.replace(/[^/]*$/,"").replace(/\\/g,"/"));
    fs.writeFileSync(newPath,rendered,'UTF-8', 'w');   
});


function loadConfig()
{
    var configJson = fs.readFileSync("config.json");
    var config = JSON.parse(configJson);
    _.each(config.modules,function(module){
        module.hasMany = [];
    });

     _.each(config.modules,function(module){

            if(!module.modules)
        {
            module.modules = module.module + "s"
        }

        _.each(module.fields, function(field)
		{
			if(field.displayName === void 0)
			{
				field.displayName = _.str.capitalize(field.name);
			}
			
			if(field.visible === void 0)
			{
				field.visible = true;
			}
						
			if(field.inlist === void 0)
			{
				field.inlist = true;
			}

            if(field.belongsTo)
            {
                var moduleAffected = _.find(config.modules,function(module){
                    return module.module == field.belongsTo.module;
                });
                moduleAffected.hasMany.push(module.module);

            }
        });
		
        module.foreignKeys = _.filter(module.fields,function(field){ return field.belongsTo});
        //module.hasMany = _.filter(module.fields,function(field){ return field.belongsTo});
		module.visibleFields =  _.filter(module.fields, function(field) { return field.visible});			
		module.fieldsInList =  _.filter(module.fields, function(field) { return field.inlist});			
		
    });
    JSON.stringify(config,null," ");
    return config;
}


function mkdirtree(path, cb, pos) {
    var dir, next, tree;
    
	if (pos == null) 
	{
        pos = 0;
    }

    tree = path.split('/');

    if (pos === tree.length) 
	{
        return ;//cb(null, path);
    }
	
    dir = tree.slice(0, pos + 1).join('/');

    next = function() {
        return mkdirtree(path, cb, pos + 1);
    };

    if (tree[pos] === '') {
        return next();
    } else {
        if(fs.existsSync(dir))
        {
            return next();
        } else {
            fs.mkdirSync(dir);
            return next();
        }
    }
};
