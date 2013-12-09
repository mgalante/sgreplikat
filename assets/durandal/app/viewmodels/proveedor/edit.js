define(['knockout', 'jquery',
    'viewmodels/proveedor/proveedor', 'durandal/system',
    'plugins/observable',
    'repository/proveedores',
    'plugins/router'], function (ko, $, Proveedor,system, observable, proveedores, router) {
    return function edit()
    {
        var self = this;
        self.item = {};
        self.activeId = 0;

        self.activate = function(id)
        {
            self.activeId = id;
            self.item = proveedores.getById(id);
            return self.item;
        };

        self.save = function(){
            proveedores.update(self.item).then(function(){
                router.navigate('proveedor/list');
            });
        };
    };
});