define(['knockout', 'jquery', 'viewmodels/proveedor/proveedor', 'durandal/system', 'plugins/observable'], function (ko, $, Proveedor,system, observable) {
    return function list()
    {
        var self = this;
        self.items = [];

        var prov = new Proveedor();
        prov.nombre = "Pepe";
        prov.id = 1;
        self.items.push(prov);

        prov = new Proveedor();
        prov.nombre = "Juan";
        prov.id = 2;
        self.items.push(prov);

        self.changeName = function(){
            system.log(prov.nombre);
            prov.nombre = "Jose Del Rio";
            system.log(prov.nombre);
        }
    };
});