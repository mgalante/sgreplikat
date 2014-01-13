define(['knockout', 'jquery',
    'durandal/system',
    'services/piezas',
    'plugins/router',
  
    '../../../lib/knockout.selectedValue/knockout.selectedValue',
    'helpers/serializer',
    'ko.validation'], function (ko, $, system, piezas, router, , selectedValue, serializer, validation) {
    return function edit()
    {
        var self = this;
        self.item = {};
        
        self.activate = function(id)
        {
            var piezasPromise =  piezas.getById(id).then(function(item){
                self.item = item;
            });

            

            return $.when(
                
                piezasPromise).then(function(){
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
                piezas.save(self.item).then(function(){
                    router.navigate('pieza/list');
                });
            }
        };

    };
});