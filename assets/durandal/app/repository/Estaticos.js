define(['jquery'],function($){
    var estaticos  = {
        dfd: null,
        getStatus: function(){
            if(this.dfd == null)
            {
                this.dfd = new $.Deferred();
                $.ajax({
                    type: "get",
                    url: "/sgreplikat/index.php/estaticos/getall"
                }).then($.proxy(function(data){
                    this.dfd.resolve(data);
                },this)).fail($.proxy(function(){
                    this.dfd.reject();
                    this.dfd = null;
                },this));
            }
            return this.dfd.promise();
        }
    };
    return estaticos;
});
