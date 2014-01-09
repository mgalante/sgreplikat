define(['knockout', 'jquery',
    'durandal/system',
    'services/clientes',
    'plugins/router',
  
    'services/statusproveedores',
    
    '../../../lib/knockout.selectedValue/knockout.selectedValue',
    'helpers/serializer',
    'ko.validation'], function (ko, $, system, clientes, router, 
       statusproveedores,
	   , selectedValue, serializer, validation) {
    return function edit()
    {
        var self = this;
        self.item = {};
        
        self.statusproveedores = {};
        
        self.activate = function(id)
        {
            var clientesPromise =  clientes.getById(id).then(function(item){
                self.item = item;
            });

            
            var statusproveedoresPromise = statusproveedores.getAll().then(function(data){
                self.statusproveedores = data;
            });
            

            return $.when(
                
                statusproveedoresPromise,
                
                clientesPromise).then(function(){
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
                clientes.save(self.item).then(function(){
                    router.navigate('cliente/list');
                });
            }
        };

    };
});