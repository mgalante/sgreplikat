define(['knockout', 'jquery'], function (ko, $) {
    return function ordendecompraitem(obj)
    {
        var self = this;

        self.id = ko.observable();

        self.ordendecompra_id = ko.observable();

        self.pieza_id = ko.observable();

        self.cantidad = ko.observable();

        self.precio_unitario = ko.observable();

        self.deshabilitado = ko.observable();


		self._description = ko.computed(function(){
			return self.id();
		});

        self.setFromJS = function(obj)
        {

			self.id(obj.id);

			self.ordendecompra_id(obj.ordendecompra_id);

			self.pieza_id(obj.pieza_id);

			self.cantidad(obj.cantidad);

			self.precio_unitario(obj.precio_unitario);

			self.deshabilitado(obj.deshabilitado);

        }

        if(obj){
            self.setFromJS(obj);
        }
    };
});