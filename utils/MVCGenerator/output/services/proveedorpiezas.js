define(['plugins/http','helpers/serializer','jquery','knockout', 'helpers/appSettings'],function(http,serializer,$,ko,appSettings){

    var proveedorpiezas = {
        getAll: function()
        {
            var dfd = new $.Deferred();
            http.get(appSettings.root + "proveedorpiezas/list").then(function(data){
                dfd.resolve(serializer.deserialize(JSON.stringify(data)));
            }).fail(function(){
                dfd.reject();
            });
            return dfd.promise();
        },
        getById: function(id)
        {
            var dfd = new $.Deferred();
            http.get(appSettings.root + "proveedorpiezas/get/" + id).then(function(data){
                dfd.resolve(serializer.deserialize(JSON.stringify(data)));
            }).fail(function(){
                dfd.reject();
            });
            return dfd.promise();
        },
        add: function(item){
            this.items.push(item);
        },
        save: function(item)
        {
            return $.ajax({
                dataType: 'json',
                type: 'post',
                url: appSettings.root + "proveedorpiezas/save",
                data: {request: ko.toJSON(item)}
            });
        },
        delete: function(id)
        {
            return $.ajax({
                dataType: 'json',
                type: 'post',
                url: appSettings.root + "proveedorpiezas/delete/" + id
            });
        }
    };
    return proveedorpiezas;
});