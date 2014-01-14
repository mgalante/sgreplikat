define(['knockout', 'jquery',
    'durandal/system',
    'services/productos',
    'plugins/router',
  
    'services/statusproductos',
    
    '../../../lib/knockout.selectedValue/knockout.selectedValue',
    'helpers/serializer',
    'ko.validation'], function (ko, $, system, productos, router, 
       statusproductos,
	    selectedValue, serializer, validation) {
    return function edit()
    {
        var self = this;
        self.item = {};
        
        self.statusproductos = {};
        
        self.activate = function(id)
        {
            var productosPromise =  productos.getById(id).then(function(item){
                self.item = item;
            });

            
            var statusproductosPromise = statusproductos.getAll().then(function(data){
                self.statusproductos = data;
            });
            

            return $.when(
                
                statusproductosPromise,
                
                productosPromise).then(function(){
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
                productos.save(self.item).then(function(){
                    router.navigate('producto/list');
                });
            }
        };

    };
});