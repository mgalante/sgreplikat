define(['knockout', 'jquery',
    'durandal/system',
    'services/productopiezas',
    'plugins/router',
  
    'services/productos',
    
    'services/piezas',
    
    '../../../lib/knockout.selectedValue/knockout.selectedValue',
    'helpers/serializer',
    'ko.validation'], function (ko, $, system, productopiezas, router, 
       productos,
	   
       piezas,
	   , selectedValue, serializer, validation) {
    return function edit()
    {
        var self = this;
        self.item = {};
        
        self.productos = {};
        
        self.piezas = {};
        
        self.activate = function(id)
        {
            var productopiezasPromise =  productopiezas.getById(id).then(function(item){
                self.item = item;
            });

            
            var productosPromise = productos.getAll().then(function(data){
                self.productos = data;
            });
            
            var piezasPromise = piezas.getAll().then(function(data){
                self.piezas = data;
            });
            

            return $.when(
                
                productosPromise,
                
                piezasPromise,
                
                productopiezasPromise).then(function(){
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
                productopiezas.save(self.item).then(function(){
                    router.navigate('productopieza/list');
                });
            }
        };

    };
});