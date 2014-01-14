define(['knockout', 'jquery',
    'durandal/system',
    'services/pedidoitems',
    'models/pedidoitem',
    'plugins/router',
    
    'services/pedidos',
    
    'services/productos',
    
    '../../../lib/knockout.selectedValue/knockout.selectedValue',
    'helpers/serializer',
    'ko.validation'], function (ko, $, system, pedidoitems, Pedidoitem, router,
    
       pedidos,
	
       productos,
	
    selectedValue, serializer, validation) {

    return function create()
    {
        var self = this;
        self.item = new Pedidoitem({
		
			  pedido_id: 0 ,
		
			  producto_id: 0 ,
			  
		});

		        
        
        self.pedidos = {};
        
        self.productos = {};
        
		
        ko.validation.init({
            registerExtenders: true,
            messagesOnModified: true,
            insertMessages: true
        });

        self.errors = ko.validation.group(self.item);

		
        self.activate = function(id)
        {

            
            var pedidosPromise = pedidos.getAll()
			.then(function(data)
			{
                self.pedidos = data;
            });
            
            var productosPromise = productos.getAll()
			.then(function(data)
			{
                self.productos = data;
            });
            

			
			
			
            return $.when(
                
					pedidosPromise
				
					,productosPromise
				
			).then(function(){
                ko.validation.init({
                    registerExtenders: true,
                    messagesOnModified: true,
                    insertMessages: true
                });

            });
        };

        self.create = function(){
            if(self.item.isValid()){
                pedidoitems.save(self.item).then(function(){
                    router.navigate('pedidoitem/list');
                });
            }
        };

    };
});