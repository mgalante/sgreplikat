define(['knockout',
    'durandal/app',
    'jquery',
    'models/proveedor',
    'durandal/system',
    'services/proveedores'], function (ko, app, $, Proveedor,system, proveedores) {
    return function list()
    {
        var self = this;
        self.items = ko.observableArray();
        self.activate = function()
        {
            return proveedores.getAll().then(function(items){
                    self.items(items);
                }
            );
        };

        self.delete = function()
        {
            var item = this;
            app.showMessage(
                "Esta seguro que desea eliminar " + item.nombre(),
                "Eliminar",
                ["Sí", "No"]
            ).then(function(data){
                if(data == "Sí")
                {
                    proveedores.delete(item.id()).then(function(){
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