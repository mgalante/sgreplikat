define(['knockout',
    'durandal/app',
    'jquery',
    'models/ordendecompraitem',
    'durandal/system',
    'services/ordendecompraitems'], function (ko, app, $, Ordendecompraitem, system, ordendecompraitems) {
    return function list()
    {
        var self = this;
        self.items = ko.observableArray();
        self.activate = function()
        {
            return ordendecompraitems.getAll().then(function(items){
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
                    ordendecompraitems.delete(item.id()).then(function(){
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