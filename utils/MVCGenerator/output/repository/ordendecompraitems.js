define(['plugins/http','helpers/serializer','jquery','knockout', 'helpers/appSettings'],function(http,serializer,$,ko,appSettings){

    var ordendecompraitems = {
        getAll: function()
        {
            var dfd = new $.Deferred();
            http.get(appSettings.root + "ordendecompraitems/list").then(function(data){
                dfd.resolve(serializer.deserialize(JSON.stringify(data)));
            }).fail(function(){
                dfd.reject();
            });
            return dfd.promise();
        },
        getById: function(id)
        {
            var dfd = new $.Deferred();
            http.get(appSettings.root + "ordendecompraitems/get/" + id).then(function(data){
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
                url: appSttings.root + "ordendecompraitems/save",
                data: {request: ko.toJSON(item)}
            });
        },
        delete: function(id)
        {
            return $.ajax({
                dataType: 'json',
                type: 'post',
                url: appSettings.root + "ordendecompraitems/delete/" + id
            });
        }
    };
    return ordendecompraitems;
});