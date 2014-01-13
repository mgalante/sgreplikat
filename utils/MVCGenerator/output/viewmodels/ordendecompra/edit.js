define(['knockout', 'jquery',
    'durandal/system',
    'services/ordendecompras',
    'plugins/router',
  
    'services/proveedores',
    
    '../../../lib/knockout.selectedValue/knockout.selectedValue',
    'helpers/serializer',
    'ko.validation'], function (ko, $, system, ordendecompras, router, 
       proveedores,
	   , selectedValue, serializer, validation) {
    return function edit()
    {
        var self = this;
        self.item = {};
        
        self.proveedores = {};
        
        self.activate = function(id)
        {
            var ordendecomprasPromise =  ordendecompras.getById(id).then(function(item){
                self.item = item;
            });

            
            var proveedoresPromise = proveedores.getAll().then(function(data){
                self.proveedores = data;
            });
            

            return $.when(
                
                proveedoresPromise,
                
                ordendecomprasPromise).then(function(){
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
                ordendecompras.save(self.item).then(function(){
                    router.navigate('ordendecompra/list');
                });
            }
        };

    };
});