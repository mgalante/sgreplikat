define(['knockout', 'jquery',
    'durandal/system',
    'services/proveedores',
    'plugins/router','services/statusProveedores',
    '../../../lib/knockout.selectedValue/knockout.selectedValue',
    'helpers/serializer'], function (ko, $, system, proveedores, router, statusProveedores, selectedValue, serializer) {
    return function details()
    {
        var self = this;
        self.item = {};
        self.statusProveedores = {};

        self.activate = function(id)
        {
            var proveedoresPromise =  proveedores.getById(id).then(function(item){
                self.item = serializer.deserialize(JSON.stringify(item));
            });

            return proveedoresPromise;
        };

        self.back = function(){
            router.navigate('proveedor/list');
        };

        self.edit = function(){
            router.navigate('proveedor/edit/'+self.item.id());
        };

    };
});