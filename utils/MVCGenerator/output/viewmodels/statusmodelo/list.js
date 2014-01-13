define(['knockout',
    'durandal/app',
    'jquery',
    'models/statusmodelo',
    'durandal/system',
    'services/statusmodelos'], function (ko, app, $, Statusmodelo, system, statusmodelos) {
    return function list()
    {
        var self = this;
        self.items = ko.observableArray();
        self.activate = function()
        {
            return statusmodelos.getAll().then(function(items){
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
                    statusmodelos.delete(item.id()).then(function(){
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