define(['knockout', 'jquery'], function (ko, $) {
    return function statusproveedor(obj)
    {
        var self = this;
        self.id = ko.observable();
        self.codigo = ko.observable();
        self.descripcion = ko.observable();

        self.setFromJS = function(obj)
        {
            self.id(obj.id);
            self.codigo(obj.codigo);
            self.descripcion(obj.descripcion);
        };

        if(obj){
            self.setFromJS(obj);
        }
    };
});