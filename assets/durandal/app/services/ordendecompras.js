define(['helpers/ajax','jquery','knockout', 'helpers/appSettings'],function(ajax,$,ko,appSettings){
    var ordendecompras = {
        getAll: function()
        {
            return ajax.get(appSettings.root + "ordendecompras/list");
        },
        getById: function(id)
        {
            return ajax.get(appSettings.root + "ordendecompras/get/" + id);
        },
        save: function(item)
        {
            return ajax.post(appSettings.root + "ordendecompras/save", item);            
        },
        delete: function(id)
        {
            return ajax.post(appSettings.root + "ordendecompras/delete/" + id);
        }
    };
    return ordendecompras;
});