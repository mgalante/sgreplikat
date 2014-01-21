define(['helpers/ajax','jquery','knockout', 'helpers/appSettings'],function(ajax,$,ko,appSettings){
    var proveedorpiezas = {
        getAll: function()
        {
            return ajax.get(appSettings.root + "proveedorpiezas/list");
        },
        getById: function(id)
        {
            return ajax.get(appSettings.root + "proveedorpiezas/get/" + id);
        },
        save: function(item)
        {
            return ajax.post(appSettings.root + "proveedorpiezas/save", item);            
        },
        delete: function(id)
        {
            return ajax.post(appSettings.root + "proveedorpiezas/delete/" + id);
        }
    };
    return proveedorpiezas;
});