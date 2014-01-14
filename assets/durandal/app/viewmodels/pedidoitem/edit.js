define(['knockout', 'jquery',
    'durandal/system',
    'services/pedidoitems',
    'plugins/router',
  
    'services/pedidos',
    
    'services/productos',
    
    '../../../lib/knockout.selectedValue/knockout.selectedValue',
    'helpers/serializer',
    'ko.validation'], function (ko, $, system, pedidoitems, router, 
       pedidos,
	   
       productos,
	    selectedValue, serializer, validation) {
    return function edit()
    {
        var self = this;
        self.item = {};
        
        self.pedidos = {};
        
        self.productos = {};
        
        self.activate = function(id)
        {
            var pedidoitemsPromise =  pedidoitems.getById(id).then(function(item){
                self.item = item;
            });

            
            var pedidosPromise = pedidos.getAll().then(function(data){
                self.pedidos = data;
            });
            
            var productosPromise = productos.getAll().then(function(data){
                self.productos = data;
            });
            

            return $.when(
                
                pedidosPromise,
                
                productosPromise,
                
                pedidoitemsPromise).then(function(){
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
                pedidoitems.save(self.item).then(function(){
                    router.navigate('pedidoitem/list');
                });
            }
        };

    };
});