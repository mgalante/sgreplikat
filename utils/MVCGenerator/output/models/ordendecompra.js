define(['knockout', 'jquery'], function (ko, $) {
    return function ordendecompra(obj)
    {
        var self = this;

        self.id = ko.observable();

        self.numero = ko.observable();

        self.proveedor_id = ko.observable();

        self.fecha = ko.observable();

        self.fecha_recepcion_estimada = ko.observable();

        self.fecha_recepcion_real = ko.observable();

        self.estado = ko.observable();

        self.deshabilitado = ko.observable();


		self._description = ko.computed(function(){
			return self.numero();
		});

        self.setFromJS = function(obj)
        {

			self.id(obj.id);

			self.numero(obj.numero);

			self.proveedor_id(obj.proveedor_id);

			self.fecha(obj.fecha);

			self.fecha_recepcion_estimada(obj.fecha_recepcion_estimada);

			self.fecha_recepcion_real(obj.fecha_recepcion_real);

			self.estado(obj.estado);

			self.deshabilitado(obj.deshabilitado);

        }

        if(obj){
            self.setFromJS(obj);
        }
    };
});