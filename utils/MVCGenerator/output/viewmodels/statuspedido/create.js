define(['knockout', 'jquery',
    'durandal/system',
    'services/statuspedidos',
    'models/statuspedido',
    'plugins/router',
    
    '../../../lib/knockout.selectedValue/knockout.selectedValue',
    'helpers/serializer',
    'ko.validation'], function (ko, $, system, statuspedidos, Statuspedido, router,
    
    selectedValue, serializer, validation) {

    return function create()
    {
        var self = this;
        self.item = new Statuspedido({
			  
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
                statuspedidos.save(self.item).then(function(){
                    router.navigate('statuspedido/list');
                });
            }
        };

    };
});