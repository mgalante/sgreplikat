define(['knockout', 'jquery'], function (ko, $) {
    return function cliente(obj)
    {
        var self = this;

        self.id = ko.observable();

        self.nombre = ko.observable();

        self.apellido = ko.observable();

        self.empresa = ko.observable();

        self.email = ko.observable();

        self.telefono = ko.observable();

        self.comentarios = ko.observable();

        self.direccion = ko.observable();

        self.deshabilitado = ko.observable();


		self._description = ko.computed(function(){
			return self.nombre()+ " " + self.apellido();
		});

        self.setFromJS = function(obj)
        {

			self.id(obj.id);

			self.nombre(obj.nombre);

			self.apellido(obj.apellido);

			self.empresa(obj.empresa);

			self.email(obj.email);

			self.telefono(obj.telefono);

			self.comentarios(obj.comentarios);

			self.direccion(obj.direccion);

			self.deshabilitado(obj.deshabilitado);

        }

        if(obj){
            self.setFromJS(obj);
        }
    };
});