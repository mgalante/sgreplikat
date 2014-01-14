define(['knockout', 'jquery',
    'durandal/system',
    'services/ordendecompraitems',
    'models/ordendecompraitem',
    'plugins/router',
    
    'services/piezas',
    
    '../../../lib/knockout.selectedValue/knockout.selectedValue',
    'helpers/serializer',
    'ko.validation'], function (ko, $, system, ordendecompraitems, Ordendecompraitem, router,
    
       piezas,
	
    selectedValue, serializer, validation) {

    return function create()
    {
        var self = this;
        self.item = new Ordendecompraitem({
		
			  pieza_id: 0 
			  
		});

		        
        
        self.piezas = {};
        
		
        ko.validation.init({
            registerExtenders: true,
            messagesOnModified: true,
            insertMessages: true
        });

        self.errors = ko.validation.group(self.item);

		
        self.activate = function(id)
        {

            
            var piezasPromise = piezas.getAll()
			.then(function(data)
			{
                self.piezas = data;
            });
            

			
			
			
            return $.when(
                
					piezasPromise
				
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
                ordendecompraitems.save(self.item).then(function(){
                    router.navigate('ordendecompraitem/list');
                });
            }
        };

    };
});