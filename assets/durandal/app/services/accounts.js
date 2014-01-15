define(["jquery", 'helpers/appSettings', 'knockout'], function($, appSettings, ko){

    var accounts = {
        login: function(account){
               return $.ajax({
                url: appSettings.root + "account/login",
                type: "post",
                dataType: "json",
                data: ko.toJS(account)
            });
        }
    };

    return accounts;

});