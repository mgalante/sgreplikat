define(['knockout', 'jquery'], function (ko, $) {
    return function proveedor(obj)
    {
        var self = this;

        self.id = ko.observable();

        self.codigo = ko.observable();

        self.descripcion = ko.observable();

        self.precio = ko.observable();

        self.stockactual = ko.observable();

        self.stockminimo = ko.observable();

        self.stockmaximo = ko.observable();

        self.deshabilitado = ko.observable();


		self._description = ko.computed(function(){
			return self.codigo()+ " " + self.descripcion();
		});

        self.setFromJS = function(obj)
        {

			self.id(obj.id);

			self.codigo(obj.codigo);

			self.descripcion(obj.descripcion);

			self.precio(obj.precio);

			self.stockactual(obj.stockactual);

			self.stockminimo(obj.stockminimo);

			self.stockmaximo(obj.stockmaximo);

			self.deshabilitado(obj.deshabilitado);

        }

        if(obj){
            self.setFromJS(obj);
        }
    };
});