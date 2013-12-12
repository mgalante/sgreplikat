define(['plugins/http','plugins/serializer','jquery'],function(http,serializer,$){

  //  serializer.typeMap.proveedor = require('viewmodels/proveedor/proveedor');

    var proveedores = {
        items: [{id: 1, nombre: "Juan"},{id: 2, nombre: "Pepe"}],
        getAll: function()
        {
            var dfd = new $.Deferred();
            http.get("/sgreplikat/index.php/proveedores").then(function(data){
                console.log(data);

                dfd.resolve(serializer.deserialize(JSON.stringify(data)));
            }).fail(function(){
                dfd.reject();
            });
            return dfd.promise();
        },
        getById: function(id)
        {
            var dfd = new $.Deferred();
            setTimeout($.proxy(function(){
                for(var i = 0; i<this.items.length;i++)
                {
                  if(this.items[i].id == id)
                  {
                      dfd.resolve(this.items[i]);
                      return;
                  }
                }
                dfd.reject();
            },this),1);
            return dfd.promise();
        },
        add: function(item){
            this.items.push(item);
        },
        update: function(item)
        {
            return $.when("ok");
        }
    };
    return proveedores;
});