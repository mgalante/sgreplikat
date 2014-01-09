define(['knockout', 'jquery',
    'durandal/system',
    'services/clientes',
    'models/cliente',
    'plugins/router',
    
    'services/statusproveedores',
    
    '../../../lib/knockout.selectedValue/knockout.selectedValue',
    'helpers/serializer',
    'ko.validation'], function (ko, $, system, clientes, Cliente, router,
    
       statusproveedores,
	
    selectedValue, serializer, validation) {

    return function create()
    {
        var self = this;
        self.item = new Cliente({
		
			  statusproveedor_id: 0 
			  
		});

		        
        
        self.statusproveedores = {};
        
		
        ko.validation.init({
            registerExtenders: true,
            messagesOnModified: true,
            insertMessages: true
        });

        self.errors = ko.validation.group(self.item);

		
        self.activate = function(id)
        {

            
            var statusproveedoresPromise = statusproveedores.getAll()
			.then(function(data)
			{
                self.statusproveedores = data;
            });
            

			
			
			
            return $.when(
                
					statusproveedoresPromise
				
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
                clientes.save(self.item).then(function(){
                    router.navigate('cliente/list');
                });
            }
        };

    };
});