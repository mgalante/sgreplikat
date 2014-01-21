define(['helpers/ajax','jquery','knockout', 'helpers/appSettings'],function(ajax,$,ko,appSettings){
    var proveedores = {
        getAll: function()
        {
            return ajax.get(appSettings.root + "proveedores/list");
        },
        getById: function(id)
        {
            return ajax.get(appSettings.root + "proveedores/get/" + id);
        },
        save: function(item)
        {
            return ajax.post(appSettings.root + "proveedores/save", item);            
        },
        delete: function(id)
        {
            return ajax.post(appSettings.root + "proveedores/delete/" + id);
        }
    };
    return proveedores;
});