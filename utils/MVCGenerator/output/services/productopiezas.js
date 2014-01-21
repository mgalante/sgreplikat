define(['helpers/ajax','jquery','knockout', 'helpers/appSettings'],function(ajax,$,ko,appSettings){
    var productopiezas = {
        getAll: function()
        {
            return ajax.get(appSettings.root + "productopiezas/list");
        },
        getById: function(id)
        {
            return ajax.get(appSettings.root + "productopiezas/get/" + id);
        },
        save: function(item)
        {
            return ajax.post(appSettings.root + "productopiezas/save", item);            
        },
        delete: function(id)
        {
            return ajax.post(appSettings.root + "productopiezas/delete/" + id);
        }
    };
    return productopiezas;
});