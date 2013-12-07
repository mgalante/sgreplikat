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
            },this),4000);
            return dfd.promise();
        },
        add: function(item){
            this.items.push(item);
        }
    };
    return proveedores;
});