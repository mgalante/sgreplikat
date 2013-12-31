define(['knockout', 'jquery',
    'durandal/system',
    'repository/proveedores',
    'plugins/router','repository/estaticos',
    '../../../lib/knockout.selectedValue/knockout.selectedValue',
    'helpers/serializer'], function (ko, $, system, proveedores, router, estaticos, selectedValue, serializer) {
    return function edit()
    {
        var self = this;
        self.item = {};
        self.activeId = ko.observable(0);
        self.mode = ko.observable("proveedor/_details.html");
        self.estaticos = {};

        self.switchToDetails = function(){
            self.mode("proveedor/_details.html");
        };

        self.switchToEdit = function(){
            self.mode("proveedor/_edit.html");
        };

        self.activate = function(id)
        {
            self.activeId(id);
            if(id == 0)
            {
                self.mode("proveedor/_edit.html");
            }
            var proveedoresPromise =  proveedores.getById(id).then(function(item){
                self.item = serializer.deserialize(JSON.stringify(item));
            });

            var estaticosPromise = estaticos.getStatus().then(function(data)
            {
                self.estaticos = serializer.deserialize(JSON.stringify(data));
            });

            return $.when(proveedoresPromise,estaticosPromise);
        };

        self.save = function(){
            proveedores.save(self.item).then(function(){
                router.navigate('proveedor/list');
            });
        };

    };
});