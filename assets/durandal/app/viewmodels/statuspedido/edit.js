define(['knockout', 'jquery',
    'durandal/system',
    'services/statuspedidos',
    'plugins/router',
  
    '../../../lib/knockout.selectedValue/knockout.selectedValue',
    'helpers/serializer',
    'ko.validation'], function (ko, $, system, statuspedidos, router,  selectedValue, serializer, validation) {
    return function edit()
    {
        var self = this;
        self.item = {};
        
        self.activate = function(id)
        {
            var statuspedidosPromise =  statuspedidos.getById(id).then(function(item){
                self.item = item;
            });

            

            return $.when(
                
                statuspedidosPromise).then(function(){
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
                statuspedidos.save(self.item).then(function(){
                    router.navigate('statuspedido/list');
                });
            }
        };

    };
});