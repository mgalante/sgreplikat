define(['knockout', 'jquery',
    'durandal/system',
    'services/ordendecompraitems',
    'plugins/router',
  
    'services/piezas',
    
    '../../../lib/knockout.selectedValue/knockout.selectedValue',
    'helpers/serializer',
    'ko.validation'], function (ko, $, system, ordendecompraitems, router, 
       piezas,
	    selectedValue, serializer, validation) {
    return function edit()
    {
        var self = this;
        self.item = {};
        
        self.piezas = {};
        
        self.activate = function(id)
        {
            var ordendecompraitemsPromise =  ordendecompraitems.getById(id).then(function(item){
                self.item = item;
            });

            
            var piezasPromise = piezas.getAll().then(function(data){
                self.piezas = data;
            });
            

            return $.when(
                
                piezasPromise,
                
                ordendecompraitemsPromise).then(function(){
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
                ordendecompraitems.save(self.item).then(function(){
                    router.navigate('ordendecompraitem/list');
                });
            }
        };

    };
});