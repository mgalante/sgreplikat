define(['knockout',
    'durandal/app',
    'jquery',
    'models/producto',
    'durandal/system',
    'services/productos'], function (ko, app, $, Producto, system, productos) {
    return function list()
    {
        var self = this;
        self.items = ko.observableArray();
        self.activate = function()
        {
            return productos.getAll().then(function(items){
                self.items(items);
            });
        };
		
        self.delete = function()
        {
            var item = this;
            app.showMessage(
                "Esta seguro que desea eliminar " + item._description(),
                "Eliminar",
                ["Sí", "No"]
            ).then(function(data){
                if(data == "Sí")
                {
                    productos.delete(item.id()).then(function(){
                        self.items.remove(item);
                    },function(data){
                        console.log(data);
                    });
                }
            });
            return false;
        };

    };
});