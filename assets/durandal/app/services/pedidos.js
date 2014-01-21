define(['helpers/ajax','jquery','knockout', 'helpers/appSettings'],function(ajax,$,ko,appSettings){
    var pedidos = {
        getAll: function()
        {
            return ajax.get(appSettings.root + "pedidos/list");
        },
        getById: function(id)
        {
            return ajax.get(appSettings.root + "pedidos/get/" + id);
        },
        save: function(item)
        {
            return ajax.post(appSettings.root + "pedidos/save", item);            
        },
        delete: function(id)
        {
            return ajax.post(appSettings.root + "pedidos/delete/" + id);
        }
    };
    return pedidos;
});