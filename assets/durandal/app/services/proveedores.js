define(['plugins/http','helpers/serializer','jquery','knockout'],function(http,serializer,$,ko){

  //  serializer.typeMap.proveedor = require('viewmodels/proveedor/proveedor');

    var proveedores = {
        items: [{id: 1, nombre: "Juan"},{id: 2, nombre: "Pepe"}],
        getAll: function()
        {
            var dfd = new $.Deferred();
            http.get("/sgreplikat/index.php/proveedores/list").then(function(data){
                console.log(data);

                dfd.resolve(serializer.deserialize(JSON.stringify(data)));
            }).fail(function(){
                dfd.reject();
            });
            return dfd.promise();
        },
        getById: function(id)
        {
            if(id == 0)
            {
                return $.when(new Proveedor({id : 0}));
            }
            else
            {
                var dfd = new $.Deferred();
                http.get("/sgreplikat/index.php/proveedores/get/" + id).then(function(data){
                    dfd.resolve(serializer.deserialize(JSON.stringify(data)));
                }).fail(function(){
                        dfd.reject();
                    });
                return dfd.promise();
            }
        },
        add: function(item){
            this.items.push(item);
        },
        save: function(item)
        {
            return $.ajax({
                dataType: 'json',
                type: 'post',
                url: "/sgreplikat/index.php/proveedores/save",
                data: {request: ko.toJSON(item)}
            });
        },
        delete: function(id)
        {
            return $.ajax({
                dataType: 'json',
                type: 'post',
                url: "/sgreplikat/index.php/proveedores/delete/" + id//,
                //data: {id: id}
            });
        }
    };
    return proveedores;
});