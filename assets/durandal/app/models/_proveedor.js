define(['knockout', 'jquery'], function (ko, $) {
    return function proveedor(obj)
    {
        var self = this;
        self.id = ko.observable();
        self.nombre = ko.observable().extend({ required: true });
        self.direccion = ko.observable();
        self.telefono = ko.observable();
        self.contacto = ko.observable();
        self.email = ko.observable();
        self.comentario = ko.observable();
        self.statusproveedor_id = ko.observable();
        self.statusproveedor = {};


        self.setFromJS = function(obj)
        {
            self.id(obj.id);
            self.nombre(obj.nombre);
            self.direccion(obj.direccion);
            self.telefono(obj.telefono);
            self.contacto(obj.contacto);
            self.email(obj.email);
            self.comentario(obj.comentario);
            self.statusproveedor_id(obj.statusproveedor_id);
            self.statusproveedor = obj.statusproveedor;
        };

        if(obj){
            self.setFromJS(obj);
        }
    };
});