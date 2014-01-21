define(['knockout', 'jquery'], function (ko, $) {
    return function statusproveedor(obj)
    {
        var self = this;

        self.id = ko.observable();

        self.codigo = ko.observable();

        self.descripcion = ko.observable();

        self.deshabilitado = ko.observable();


		self._description = ko.computed(function(){
			return self.descripcion();
		});

        self.setFromJS = function(obj)
        {

			self.id(obj.id);

			self.codigo(obj.codigo);

			self.descripcion(obj.descripcion);

			self.deshabilitado(obj.deshabilitado);

        }

        if(obj){
            self.setFromJS(obj);
        }
    };
});