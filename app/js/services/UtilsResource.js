MetronicApp.factory('GetResources', function ($http) {

    return {
        get: function (url) {
          return $http.get(url,{cache:true});
        },
    
        
    	get2: function (url) {
        	return $http({
        		  method: 'GET',
        	  url: url,
        	  cache:true
        	}).then(function successCallback(response) {
        	    return response.data;
        	  }, function errorCallback(response) {
        	    console.log(response);
        	  });
        }

    };
});

MetronicApp.factory('I18NValorMensagem', function ($translate) {

	return {
		traduzir:function(value){
		return $translate(value).then(function (param) {
           return param;
        });
		}	
	}
	
});

