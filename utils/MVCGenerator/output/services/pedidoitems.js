define(['helpers/ajax','jquery','knockout', 'helpers/appSettings'],function(ajax,$,ko,appSettings){
    var pedidoitems = {
        getAll: function()
        {
            return ajax.get(appSettings.root + "pedidoitems/list");
        },
        getById: function(id)
        {
            return ajax.get(appSettings.root + "pedidoitems/get/" + id);
        },
        save: function(item)
        {
            return ajax.post(appSettings.root + "pedidoitems/save", item);            
        },
        delete: function(id)
        {
            return ajax.post(appSettings.root + "pedidoitems/delete/" + id);
        }
    };
    return pedidoitems;
});