define(['helpers/ajax','jquery','knockout', 'helpers/appSettings'],function(ajax,$,ko,appSettings){
    var piezas = {
        getAll: function()
        {
            return ajax.get(appSettings.root + "piezas/list");
        },
        getById: function(id)
        {
            return ajax.get(appSettings.root + "piezas/get/" + id);
        },
        save: function(item)
        {
            return ajax.post(appSettings.root + "piezas/save", item);            
        },
        delete: function(id)
        {
            return ajax.post(appSettings.root + "piezas/delete/" + id);
        }
    };
    return piezas;
});