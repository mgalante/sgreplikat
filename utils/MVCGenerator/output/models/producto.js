define(['knockout', 'jquery'], function (ko, $) {
    return function proveedor(obj)
    {
        var self = this;

        self.id = ko.observable();

        self.codigo = ko.observable();

        self.titulo = ko.observable();

        self.descripcion = ko.observable();

        self.precio = ko.observable();

        self.statusproducto_id = ko.observable();

        self.deshabilitado = ko.observable();


		self._description = ko.computed(function(){
			return self.codigo()+ &quot; &quot; + self.titulo();
		});

        self.setFromJS = function(obj)
        {

			self.id(obj.id);

			self.codigo(obj.codigo);

			self.titulo(obj.titulo);

			self.descripcion(obj.descripcion);

			self.precio(obj.precio);

			self.statusproducto_id(obj.statusproducto_id);

			self.deshabilitado(obj.deshabilitado);

        }

        if(obj){
            self.setFromJS(obj);
        }
    };
});