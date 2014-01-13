define(['knockout', 'jquery',
    'durandal/system',
    'services/productos',
    'models/producto',
    'plugins/router',
    
    'services/statusproductos',
    
    '../../../lib/knockout.selectedValue/knockout.selectedValue',
    'helpers/serializer',
    'ko.validation'], function (ko, $, system, productos, Producto, router,
    
       statusproductos,
	
    selectedValue, serializer, validation) {

    return function create()
    {
        var self = this;
        self.item = new Producto({
		
			  statusproducto_id: 0 
			  
		});

		        
        
        self.statusproductos = {};
        
		
        ko.validation.init({
            registerExtenders: true,
            messagesOnModified: true,
            insertMessages: true
        });

        self.errors = ko.validation.group(self.item);

		
        self.activate = function(id)
        {

            
            var statusproductosPromise = statusproductos.getAll()
			.then(function(data)
			{
                self.statusproductos = data;
            });
            

			
			
			
            return $.when(
                
					statusproductosPromise
				
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
                productos.save(self.item).then(function(){
                    router.navigate('producto/list');
                });
            }
        };

    };
});