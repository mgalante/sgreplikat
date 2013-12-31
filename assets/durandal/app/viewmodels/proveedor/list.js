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
                    self.items(items);
                }
            );
        };
    };
});