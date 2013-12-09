define(function(){
    var proveedores = {
        items: [{id: 1, nombre: "Juan"},{id: 2, nombre: "Pepe"}],
        getAll: function()
        {
            return this.items;
        },
        getById: function(id)
        {
            var dfd = new jQuery.Deferred();
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
            var dfd = new jQuery.Deferred();
            dfd.resolve();
            return dfd.promise();
        }
    };
    return proveedores;
});