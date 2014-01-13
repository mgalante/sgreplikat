define(['knockout', 'jquery',
    'durandal/system',
    'services/productopiezas',
    'models/productopieza',
    'plugins/router',
    
    'services/productos',
    
    'services/piezas',
    
    '../../../lib/knockout.selectedValue/knockout.selectedValue',
    'helpers/serializer',
    'ko.validation'], function (ko, $, system, productopiezas, Productopieza, router,
    
       productos,
	
       piezas,
	
    selectedValue, serializer, validation) {

    return function create()
    {
        var self = this;
        self.item = new Productopieza({
		
			  producto_id: 0 ,
		
			  pieza_id: 0 ,
			  
		});

		        
        
        self.productos = {};
        
        self.piezas = {};
        
		
        ko.validation.init({
            registerExtenders: true,
            messagesOnModified: true,
            insertMessages: true
        });

        self.errors = ko.validation.group(self.item);

		
        self.activate = function(id)
        {

            
            var productosPromise = productos.getAll()
			.then(function(data)
			{
                self.productos = data;
            });
            
            var piezasPromise = piezas.getAll()
			.then(function(data)
			{
                self.piezas = data;
            });
            

			
			
			
            return $.when(
                
					productosPromise
				
					,piezasPromise
				
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
                productopiezas.save(self.item).then(function(){
                    router.navigate('productopieza/list');
                });
            }
        };

    };
});