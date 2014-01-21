define(['helpers/ajax','jquery','knockout', 'helpers/appSettings'],function(ajax,$,ko,appSettings){
    var statusproductos = {
        getAll: function()
        {
            return ajax.get(appSettings.root + "statusproductos/list");
        },
        getById: function(id)
        {
            return ajax.get(appSettings.root + "statusproductos/get/" + id);
        },
        save: function(item)
        {
            return ajax.post(appSettings.root + "statusproductos/save", item);            
        },
        delete: function(id)
        {
            return ajax.post(appSettings.root + "statusproductos/delete/" + id);
        }
    };
    return statusproductos;
});