define(['knockout'], function(ko){
    return function account()
    {
        var self = this;
        self.user = ko.observable();
        self.password = ko.observable();

    };
});