define(['helpers/ajax','jquery','knockout', 'helpers/appSettings'],function(ajax,$,ko,appSettings){
    var ordendecompraitems = {
        getAll: function()
        {
            return ajax.get(appSettings.root + "ordendecompraitems/list");
        },
        getById: function(id)
        {
            return ajax.get(appSettings.root + "ordendecompraitems/get/" + id);
        },
        save: function(item)
        {
            return ajax.post(appSettings.root + "ordendecompraitems/save", item);            
        },
        delete: function(id)
        {
            return ajax.post(appSettings.root + "ordendecompraitems/delete/" + id);
        }
    };
    return ordendecompraitems;
});