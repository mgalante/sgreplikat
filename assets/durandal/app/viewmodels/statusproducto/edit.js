define(['knockout', 'jquery',
    'durandal/system',
    'services/statusproductos',
    'plugins/router',
  
    '../../../lib/knockout.selectedValue/knockout.selectedValue',
    'helpers/serializer',
    'ko.validation'], function (ko, $, system, statusproductos, router,  selectedValue, serializer, validation) {
    return function edit()
    {
        var self = this;
        self.item = {};
        
        self.activate = function(id)
        {
            var statusproductosPromise =  statusproductos.getById(id).then(function(item){
                self.item = item;
            });

            

            return $.when(
                
                statusproductosPromise).then(function(){
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
                statusproductos.save(self.item).then(function(){
                    router.navigate('statusproducto/list');
                });
            }
        };

    };
});