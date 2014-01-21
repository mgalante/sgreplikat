define(['knockout', 'jquery'], function (ko, $) {
    return function productopieza(obj)
    {
        var self = this;

        self.id = ko.observable();

        self.producto_id = ko.observable();

        self.pieza_id = ko.observable();

        self.cantidad = ko.observable();

        self.deshabilitado = ko.observable();


		self._description = ko.computed(function(){
			return self.id();
		});

        self.setFromJS = function(obj)
        {

			self.id(obj.id);

			self.producto_id(obj.producto_id);

			self.pieza_id(obj.pieza_id);

			self.cantidad(obj.cantidad);

			self.deshabilitado(obj.deshabilitado);

        }

        if(obj){
            self.setFromJS(obj);
        }
    };
});