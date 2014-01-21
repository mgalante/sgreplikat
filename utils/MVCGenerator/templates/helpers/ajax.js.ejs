define(['jquery', 'knockout', 'plugins/router', 'helpers/serializer'], function($, ko, router,serializer) {    
	
	function doRequest(type, url, data) {
		return $.ajax({
			url: url,
			type: type,
			dataType: "text",
			data: data
		}).then(function(data){
            if(!data) return void 0;
			return serializer.deserialize(data);
		},function(opts)
		{
			if(opts.status == 401)
			{
				alert("Debe loggearse");
			}
			return opts;
		});
	}
	
	return {    
		get: function(url, data) {
			return doRequest("get", url, data);
        },
		post: function(url, data) {
			return doRequest("post", url, {request: ko.toJSON(data)});
        }		
    };
});