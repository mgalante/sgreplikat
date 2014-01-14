define(['jquery','helpers/serializer'],function($,serializer){
    var estaticos  = {
        dfd: null,
        getStatus: function(){
            if(this.dfd == null)
            {
                this.dfd = new $.Deferred();
                $.ajax({
                    type: "get",
                    url: "/sgreplikat/index.php/statusproveedores/list"
                }).then($.proxy(function(data){
                    this.dfd.resolve(serializer.deserialize(JSON.stringify(data)));
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
