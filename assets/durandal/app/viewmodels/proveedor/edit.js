define(['knockout', 'jquery', 'viewmodels/proveedor/proveedor', 'durandal/system'], function (ko, $, Proveedor,system) {
    return function list()
    {
        var self = this;
        self.activate = function(id)
        {
          self.activeId(id);
        };

        self.activeId = ko.observable();
    };
});