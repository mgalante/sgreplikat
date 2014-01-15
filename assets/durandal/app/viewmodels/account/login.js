define(['services/accounts', "models/account", 'plugins/router'], function(accountServices, Account, router)
{
    return function login()
    {
      var self = this;
      self.account = new Account();

      self.login = function()
      {
        accountServices.login(self.account).then(function(){
            console.log("lalalslas");
            router.navigate("/");
        },function(obj){
            alert("usuario invalido");
            console.log(obj);
        });
          return false;
      }
    };
});