define(['services/accounts', "models/account", 'plugins/router'], function(accountServices, Account, router)
{
    return function logout()
    {
        var self = this;
        self.activate = function(){
            accountServices.logout().then(function(){
              router.navigate("account/login");
            });
        };
    };
});