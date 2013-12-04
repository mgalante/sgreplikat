define(['knockout'], function (ko) {
   return function () {
      var self = this;
      self.url = ko.observable();
      self.response = ko.observable();


       self.tryMe = function(){

        self.response(new Date().getTime() + ":" + self.url());
      };

    };
});