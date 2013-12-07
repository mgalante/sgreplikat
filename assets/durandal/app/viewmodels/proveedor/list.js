define(['knockout',
    'jquery',
    'viewmodels/proveedor/proveedor',
    'durandal/system',
    'plugins/observable',
    'repository/proveedores'], function (ko, $, Proveedor,system, observable, proveedores) {
    return function list()
    {
        var self = this;
        self.items = [];

        self.activate = function()
        {
            self.items = proveedores.getAll();
        }

        self.changeName = function(){
            self.items[0].nombre = "Jose Del Rio";
        }
    };
});