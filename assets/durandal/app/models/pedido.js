define(['knockout', 'jquery'], function (ko, $) {
    return function pedido(obj)
    {
        var self = this;

        self.id = ko.observable();

        self.codigo = ko.observable();

        self.cliente_id = ko.observable();

        self.fecha_pedido = ko.observable();

        self.fecha_entrega = ko.observable();

        self.adelanto = ko.observable();

        self.restoabonado = ko.observable();

        self.comentarios = ko.observable();

        self.statuspedido_id = ko.observable();

        self.deshabilitado = ko.observable();


		self._description = ko.computed(function(){
			return self.codigo();
		});

        self.setFromJS = function(obj)
        {

			self.id(obj.id);

			self.codigo(obj.codigo);

			self.cliente_id(obj.cliente_id);

			self.fecha_pedido(obj.fecha_pedido);

			self.fecha_entrega(obj.fecha_entrega);

			self.adelanto(obj.adelanto);

			self.restoabonado(obj.restoabonado);

			self.comentarios(obj.comentarios);

			self.statuspedido_id(obj.statuspedido_id);

			self.deshabilitado(obj.deshabilitado);

        }

        if(obj){
            self.setFromJS(obj);
        }
    };
});