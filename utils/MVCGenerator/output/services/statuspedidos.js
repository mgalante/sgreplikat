define(['helpers/ajax','jquery','knockout', 'helpers/appSettings'],function(ajax,$,ko,appSettings){
    var statuspedidos = {
        getAll: function()
        {
            return ajax.get(appSettings.root + "statuspedidos/list");
        },
        getById: function(id)
        {
            return ajax.get(appSettings.root + "statuspedidos/get/" + id);
        },
        save: function(item)
        {
            return ajax.post(appSettings.root + "statuspedidos/save", item);            
        },
        delete: function(id)
        {
            return ajax.post(appSettings.root + "statuspedidos/delete/" + id);
        }
    };
    return statuspedidos;
});