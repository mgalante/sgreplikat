define(['knockout', 'jquery',
    'durandal/system',
    'services/proveedores',
    'plugins/router','services/statusProveedores',
    '../../../lib/knockout.selectedValue/knockout.selectedValue',
    'helpers/serializer',
    'ko.validation'], function (ko, $, system, proveedores, router, statusProveedores, selectedValue, serializer, validation) {
    return function edit()
    {
        var self = this;
        self.item = {};
        self.statusProveedores = {};

        self.activate = function(id)
        {
            var proveedoresPromise =  proveedores.getById(id).then(function(item){
                self.item = item;
            });

            var statusProveedoresPromise = statusProveedores.getStatus().then(function(data)
            {
                self.statusProveedores = data;
            });

            return $.when(proveedoresPromise,statusProveedoresPromise).then(function(){
                ko.validation.init({
                    registerExtenders: true,
                    messagesOnModified: true,
                    insertMessages: true
                });

                self.errors = ko.validation.group(self.item);
            });
        };

        self.save = function(){
            if(self.item.isValid()){
                proveedores.save(self.item).then(function(){
                    router.navigate('proveedor/list');
                });
            }
        };

    };
});