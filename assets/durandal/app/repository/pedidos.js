define(['plugins/http','helpers/serializer','jquery','knockout', 'helpers/appSettings'],function(http,serializer,$,ko,appSettings){

    var pedidos = {
        getAll: function()
        {
            var dfd = new $.Deferred();
            http.get(appSettings.root + "pedidos/list").then(function(data){
                dfd.resolve(serializer.deserialize(JSON.stringify(data)));
            }).fail(function(){
                dfd.reject();
            });
            return dfd.promise();
        },
        getById: function(id)
        {
            var dfd = new $.Deferred();
            http.get(appSettings.root + "pedidos/get/" + id).then(function(data){
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
                url: appSttings.root + "pedidos/save",
                data: {request: ko.toJSON(item)}
            });
        },
        delete: function(id)
        {
            return $.ajax({
                dataType: 'json',
                type: 'post',
                url: appSettings.root + "pedidos/delete/" + id
            });
        }
    };
    return pedidos;
});