define(['knockout', 'jquery'], function (ko, $) {
    return function proveedor()
    {
        var self = this;
        self.id = "";
        self.nombre = "";
        self.direccion = "";
        self.telefono = "";
        self.contacto = "";
        self.email = "";
        self.comentario = "";
        self.statusproveedor_id = "";
    };
});