define(['helpers/ajax','jquery','knockout', 'helpers/appSettings'],function(ajax,$,ko,appSettings){
    var statusproveedores = {
        getAll: function()
        {
            return ajax.get(appSettings.root + "statusproveedores/list");
        },
        getById: function(id)
        {
            return ajax.get(appSettings.root + "statusproveedores/get/" + id);
        },
        save: function(item)
        {
            return ajax.post(appSettings.root + "statusproveedores/save", item);            
        },
        delete: function(id)
        {
            return ajax.post(appSettings.root + "statusproveedores/delete/" + id);
        }
    };
    return statusproveedores;
});