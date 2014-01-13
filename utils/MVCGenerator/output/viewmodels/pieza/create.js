define(['knockout', 'jquery',
    'durandal/system',
    'services/piezas',
    'models/pieza',
    'plugins/router',
    
    '../../../lib/knockout.selectedValue/knockout.selectedValue',
    'helpers/serializer',
    'ko.validation'], function (ko, $, system, piezas, Pieza, router,
    
    selectedValue, serializer, validation) {

    return function create()
    {
        var self = this;
        self.item = new Pieza({
			  
		});

		        
        
		
        ko.validation.init({
            registerExtenders: true,
            messagesOnModified: true,
            insertMessages: true
        });

        self.errors = ko.validation.group(self.item);

		
        self.activate = function(id)
        {

            

			
			
            return $.when(
                
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
                piezas.save(self.item).then(function(){
                    router.navigate('pieza/list');
                });
            }
        };

    };
});