define(['knockout', 'jquery',
    'durandal/system',
    'services/proveedorpiezas',
    'plugins/router',
  
    'services/piezas',
    
    'services/proveedores',
    
    '../../../lib/knockout.selectedValue/knockout.selectedValue',
    'helpers/serializer',
    'ko.validation'], function (ko, $, system, proveedorpiezas, router, 
       piezas,
	   
       proveedores,
	    selectedValue, serializer, validation) {
    return function edit()
    {
        var self = this;
        self.item = {};
        
        self.piezas = {};
        
        self.proveedores = {};
        
        self.activate = function(id)
        {
            var proveedorpiezasPromise =  proveedorpiezas.getById(id).then(function(item){
                self.item = item;
            });

            
            var piezasPromise = piezas.getAll().then(function(data){
                self.piezas = data;
            });
            
            var proveedoresPromise = proveedores.getAll().then(function(data){
                self.proveedores = data;
            });
            

            return $.when(
                
                piezasPromise,
                
                proveedoresPromise,
                
                proveedorpiezasPromise).then(function(){
                ko.validation.init({
                    registerExtenders: true,
                    messagesOnModified: true,
                    insertMessages: true
                });

                self.errors = ko.validation.group(self.item);
            });
        };

        self.save = function(){
            if(self.item.isValid()){
                proveedorpiezas.save(self.item).then(function(){
                    router.navigate('proveedorpieza/list');
                });
            }
        };

    };
});