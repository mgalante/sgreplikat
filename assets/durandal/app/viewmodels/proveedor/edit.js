define(['knockout', 'jquery',
    'viewmodels/proveedor/proveedor', 'durandal/system',
    'plugins/observable',
    'repository/proveedores'], function (ko, $, Proveedor,system, observable, proveedores) {
    return function list()
    {
        var self = this;
        self.activate = function(id)
        {
            self.activeId = id;
            return proveedores.getById(id).then(function(dato){
                self.item = dato;
            });
        };

        self.item = {};
        self.activeId = 0;
    };
});