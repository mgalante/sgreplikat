define(['knockout', 'jquery',
    'durandal/system',
    'services/statusmodelos',
    'plugins/router',
  
    '../../../lib/knockout.selectedValue/knockout.selectedValue',
    'helpers/serializer',
    'ko.validation'], function (ko, $, system, statusmodelos, router, , selectedValue, serializer, validation) {
    return function edit()
    {
        var self = this;
        self.item = {};
        
        self.activate = function(id)
        {
            var statusmodelosPromise =  statusmodelos.getById(id).then(function(item){
                self.item = item;
            });

            

            return $.when(
                
                statusmodelosPromise).then(function(){
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
                statusmodelos.save(self.item).then(function(){
                    router.navigate('statusmodelo/list');
                });
            }
        };

    };
});