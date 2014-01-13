define(['knockout', 'jquery'], function (ko, $) {
    return function proveedor(obj)
    {
        var self = this;

        self.id = ko.observable();

        self.pedido_id = ko.observable();

        self.producto_id = ko.observable();

        self.precio_unitario = ko.observable();

        self.cantidad = ko.observable();

        self.deshabilitado = ko.observable();


		self._description = ko.computed(function(){
			return self.id();
		});

        self.setFromJS = function(obj)
        {

			self.id(obj.id);

			self.pedido_id(obj.pedido_id);

			self.producto_id(obj.producto_id);

			self.precio_unitario(obj.precio_unitario);

			self.cantidad(obj.cantidad);

			self.deshabilitado(obj.deshabilitado);

        }

        if(obj){
            self.setFromJS(obj);
        }
    };
});