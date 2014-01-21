define(['helpers/ajax','jquery','knockout', 'helpers/appSettings'],function(ajax,$,ko,appSettings){
    var productos = {
        getAll: function()
        {
            return ajax.get(appSettings.root + "productos/list");
        },
        getById: function(id)
        {
            return ajax.get(appSettings.root + "productos/get/" + id);
        },
        save: function(item)
        {
            return ajax.post(appSettings.root + "productos/save", item);            
        },
        delete: function(id)
        {
            return ajax.post(appSettings.root + "productos/delete/" + id);
        }
    };
    return productos;
});