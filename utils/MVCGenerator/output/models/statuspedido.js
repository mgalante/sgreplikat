define(['knockout', 'jquery'], function (ko, $) {
    return function proveedor(obj)
    {
        var self = this;

        self.id = ko.observable();

        self.descripcion = ko.observable();

        self.deshabilitado = ko.observable();


		self._description = ko.computed(function(){
			return self.descripcion();
		});

        self.setFromJS = function(obj)
        {

			self.id(obj.id);

			self.descripcion(obj.descripcion);

			self.deshabilitado(obj.deshabilitado);

        }

        if(obj){
            self.setFromJS(obj);
        }
    };
});