define(['knockout', 'jquery'], function (ko, $) {
    return function proveedorpieza(obj)
    {
        var self = this;

        self.id = ko.observable();

        self.pieza_id = ko.observable();

        self.proveedor_id = ko.observable();

        self.precio = ko.observable();

        self.comentarios = ko.observable();

        self.deshabilitado = ko.observable();


		self._description = ko.computed(function(){
			return self.id();
		});

        self.setFromJS = function(obj)
        {

			self.id(obj.id);

			self.pieza_id(obj.pieza_id);

			self.proveedor_id(obj.proveedor_id);

			self.precio(obj.precio);

			self.comentarios(obj.comentarios);

			self.deshabilitado(obj.deshabilitado);

        }

        if(obj){
            self.setFromJS(obj);
        }
    };
});