define(['knockout',
    'jquery',
    'viewmodels/proveedor/proveedor',
    'durandal/system',
    'repository/proveedores'], function (ko, $, Proveedor,system, proveedores) {
    return function list()
    {
        var self = this;
        self.items = ko.observableArray();
        self.activate = function()
        {
            return proveedores.getAll().then(function(items){
                    var observableItems = [];
                    for(var i in items)
                    {
                         observableItems.push(new Proveedor(items[i]));
                    }
                    self.items(observableItems);
                }
            );
        };

        self.changeName = function(){
            self.items[0].nombre = "Jose Del Rio";
        };
    };
});