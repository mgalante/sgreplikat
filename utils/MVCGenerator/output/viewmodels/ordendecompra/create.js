define(['knockout', 'jquery',
    'durandal/system',
    'services/ordendecompras',
    'models/ordendecompra',
    'plugins/router',
    
    'services/proveedores',
    
    '../../../lib/knockout.selectedValue/knockout.selectedValue',
    'helpers/serializer',
    'ko.validation'], function (ko, $, system, ordendecompras, Ordendecompra, router,
    
       proveedores,
	
    selectedValue, serializer, validation) {

    return function create()
    {
        var self = this;
        self.item = new Ordendecompra({
		
			  proveedor_id: 0 
			  
		});

		        
        
        self.proveedores = {};
        
		
        ko.validation.init({
            registerExtenders: true,
            messagesOnModified: true,
            insertMessages: true
        });

        self.errors = ko.validation.group(self.item);

		
        self.activate = function(id)
        {

            
            var proveedoresPromise = proveedores.getAll()
			.then(function(data)
			{
                self.proveedores = data;
            });
            

			
			
			
            return $.when(
                
					proveedoresPromise
				
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
                ordendecompras.save(self.item).then(function(){
                    router.navigate('ordendecompra/list');
                });
            }
        };

    };
});