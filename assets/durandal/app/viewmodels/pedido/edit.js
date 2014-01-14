define(['knockout', 'jquery',
    'durandal/system',
    'services/pedidos',
    'plugins/router',
  
    'services/clientes',
    
    'services/statuspedidos',
    
    '../../../lib/knockout.selectedValue/knockout.selectedValue',
    'helpers/serializer',
    'ko.validation'], function (ko, $, system, pedidos, router, 
       clientes,
	   
       statuspedidos,
	    selectedValue, serializer, validation) {
    return function edit()
    {
        var self = this;
        self.item = {};
        
        self.clientes = {};
        
        self.statuspedidos = {};
        
        self.activate = function(id)
        {
            var pedidosPromise =  pedidos.getById(id).then(function(item){
                self.item = item;
            });

            
            var clientesPromise = clientes.getAll().then(function(data){
                self.clientes = data;
            });
            
            var statuspedidosPromise = statuspedidos.getAll().then(function(data){
                self.statuspedidos = data;
            });
            

            return $.when(
                
                clientesPromise,
                
                statuspedidosPromise,
                
                pedidosPromise).then(function(){
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
                pedidos.save(self.item).then(function(){
                    router.navigate('pedido/list');
                });
            }
        };

    };
});