define(['knockout', 'jquery',
    'durandal/system',
    'services/statusproductos',
    'models/statusproducto',
    'plugins/router',
    
    '../../../lib/knockout.selectedValue/knockout.selectedValue',
    'helpers/serializer',
    'ko.validation'], function (ko, $, system, statusproductos, Statusproducto, router,
    
    selectedValue, serializer, validation) {

    return function create()
    {
        var self = this;
        self.item = new Statusproducto({
			  
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
                statusproductos.save(self.item).then(function(){
                    router.navigate('statusproducto/list');
                });
            }
        };

    };
});