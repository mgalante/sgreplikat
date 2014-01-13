define(['knockout',
    'durandal/app',
    'jquery',
    'models/ordendecompra',
    'durandal/system',
    'services/ordendecompras'], function (ko, app, $, Ordendecompra, system, ordendecompras) {
    return function list()
    {
        var self = this;
        self.items = ko.observableArray();
        self.activate = function()
        {
            return ordendecompras.getAll().then(function(items){
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
                    ordendecompras.delete(item.id()).then(function(){
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