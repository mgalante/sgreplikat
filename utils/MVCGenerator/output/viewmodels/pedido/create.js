define(['knockout', 'jquery',
    'durandal/system',
    'services/pedidos',
    'models/pedido',
    'plugins/router',
    
    'services/clientes',
    
    'services/statuspedidos',
    
    '../../../lib/knockout.selectedValue/knockout.selectedValue',
    'helpers/serializer',
    'ko.validation'], function (ko, $, system, pedidos, Pedido, router,
    
       clientes,
	
       statuspedidos,
	
    selectedValue, serializer, validation) {

    return function create()
    {
        var self = this;
        self.item = new Pedido({
		
			  cliente_id: 0 ,
		
			  statuspedido_id: 0 ,
			  
		});

		        
        
        self.clientes = {};
        
        self.statuspedidos = {};
        
		
        ko.validation.init({
            registerExtenders: true,
            messagesOnModified: true,
            insertMessages: true
        });

        self.errors = ko.validation.group(self.item);

		
        self.activate = function(id)
        {

            
            var clientesPromise = clientes.getAll()
			.then(function(data)
			{
                self.clientes = data;
            });
            
            var statuspedidosPromise = statuspedidos.getAll()
			.then(function(data)
			{
                self.statuspedidos = data;
            });
            

			
			
			
            return $.when(
                
					clientesPromise
				
					,statuspedidosPromise
				
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
                pedidos.save(self.item).then(function(){
                    router.navigate('pedido/list');
                });
            }
        };

    };
});