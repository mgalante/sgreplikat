define(['knockout','plugins/serializer'], function (ko,serializer) {
   return function () {
      var self = this;
      self.url = ko.observable();
      self.response = ko.observable();

       serializer.typeMap.tortuga = function(obj){
          // console.log('tortuga', obj);
           this
       };

       var ObjetoLoco = function(){
           this.coca = "asd";
       }

       var instanciaLoca = new ObjetoLoco();
       $.extend(intaciaLoca,data);

       serializer.typeMap.direccion = function(obj){
           //console.log('direccion', obj);
           this.lala = 123;
           return "lola";
       };


       window.manuelita = serializer.deserialize('{' +
           '"type" : "tortuga",' +
           '"nombre" : "manuelita",' +
           '"edad": 100,' +
           '"direccion" : {' +
               '"type" : "direccion",' +
                '"calle" : "Rivadavia"' +
            '}' +
       '}');

       window.
       console.log("manuelita",manuelita);
       console.groupEnd();

       self.tryMe = function(){

        self.response(new Date().getTime() + ":" + self.url());
      };

    };
});