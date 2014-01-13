define(['knockout', 'jquery',
    'durandal/system',
    'services/proveedorpiezas',
    'models/proveedorpieza',
    'plugins/router',
    
    'services/piezas',
    
    'services/proveedores',
    
    '../../../lib/knockout.selectedValue/knockout.selectedValue',
    'helpers/serializer',
    'ko.validation'], function (ko, $, system, proveedorpiezas, Proveedorpieza, router,
    
       piezas,
	
       proveedores,
	
    selectedValue, serializer, validation) {

    return function create()
    {
        var self = this;
        self.item = new Proveedorpieza({
		
			  pieza_id: 0 ,
		
			  proveedor_id: 0 ,
			  
		});

		        
        
        self.piezas = {};
        
        self.proveedores = {};
        
		
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
            
            var proveedoresPromise = proveedores.getAll()
			.then(function(data)
			{
                self.proveedores = data;
            });
            

			
			
			
            return $.when(
                
					piezasPromise
				
					,proveedoresPromise
				
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
                proveedorpiezas.save(self.item).then(function(){
                    router.navigate('proveedorpieza/list');
                });
            }
        };

    };
});