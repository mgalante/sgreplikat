define(['helpers/ajax','jquery','knockout', 'helpers/appSettings'],function(ajax,$,ko,appSettings){
    var clientes = {
        getAll: function()
        {
            return ajax.get(appSettings.root + "clientes/list");
        },
        getById: function(id)
        {
            return ajax.get(appSettings.root + "clientes/get/" + id);
        },
        save: function(item)
        {
            return ajax.post(appSettings.root + "clientes/save", item);            
        },
        delete: function(id)
        {
            return ajax.post(appSettings.root + "clientes/delete/" + id);
        }
    };
    return clientes;
});