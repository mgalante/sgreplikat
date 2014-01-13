define(['knockout', 'jquery',
    'durandal/system',
    'services/statusproveedores',
    'plugins/router',
  
    '../../../lib/knockout.selectedValue/knockout.selectedValue',
    'helpers/serializer',
    'ko.validation'], function (ko, $, system, statusproveedores, router, , selectedValue, serializer, validation) {
    return function edit()
    {
        var self = this;
        self.item = {};
        
        self.activate = function(id)
        {
            var statusproveedoresPromise =  statusproveedores.getById(id).then(function(item){
                self.item = item;
            });

            

            return $.when(
                
                statusproveedoresPromise).then(function(){
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
                statusproveedores.save(self.item).then(function(){
                    router.navigate('statusproveedor/list');
                });
            }
        };

    };
});