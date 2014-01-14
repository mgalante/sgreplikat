define(['knockout', 'jquery',
    'durandal/system',
    'services/proveedores',
    'plugins/router',
  
    'services/statusproveedores',
    
    '../../../lib/knockout.selectedValue/knockout.selectedValue',
    'helpers/serializer',
    'ko.validation'], function (ko, $, system, proveedores, router, 
       statusproveedores,
	    selectedValue, serializer, validation) {
    return function edit()
    {
        var self = this;
        self.item = {};
        
        self.statusproveedores = {};
        
        self.activate = function(id)
        {
            var proveedoresPromise =  proveedores.getById(id).then(function(item){
                self.item = item;
            });

            
            var statusproveedoresPromise = statusproveedores.getAll().then(function(data){
                self.statusproveedores = data;
            });
            

            return $.when(
                
                statusproveedoresPromise,
                
                proveedoresPromise).then(function(){
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
                proveedores.save(self.item).then(function(){
                    router.navigate('proveedor/list');
                });
            }
        };

    };
});