define(['knockout', 'jquery',
    'durandal/system',
    'services/proveedores',
    'models/proveedor',
    'plugins/router','services/statusProveedores',
    '../../../lib/knockout.selectedValue/knockout.selectedValue',
    'helpers/serializer'], function (ko, $, system, proveedores, Proveedor, router, statusProveedores, selectedValue, serializer) {

    return function create()
    {
        var self = this;
        self.item = new Proveedor({statusproveedor_id: 1});

        ko.validation.init({
            registerExtenders: true,
            messagesOnModified: true,
            insertMessages: true
        });

        self.errors = ko.validation.group(self.item);

        self.statusProveedores = {};

        self.activate = function(id)
        {
            var statusProveedoresPromise = statusProveedores.getStatus().then(function(data)
            {
                self.statusProveedores = data;
            });

            return $.when(statusProveedoresPromise);
        };

        self.create = function(){
            if(self.item.isValid()){
                proveedores.save(self.item).then(function(){
                    router.navigate('proveedor/list');
                });
            }
        };

    };
});