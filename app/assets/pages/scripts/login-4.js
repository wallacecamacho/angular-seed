var Login = function () {

	var handleLogin = function() {}

	var handleForgetPassword = function () {}

	var handleRegister = function () {}
    
    return {
        //main function to initiate the module
        init: function () {
        	
            handleLogin();
            handleForgetPassword();
            handleRegister();    
            
            $("body").vegas({
            	timer: false,
                slides: [
         		       {src: "assets/pages/media/bg/1.jpg"},
         		       {src: "assets/pages/media/bg/2.jpg"},
         		       {src: "assets/pages/media/bg/3.jpg"},
         		       {src: "assets/pages/media/bg/4.jpg"}
        		        ]
            });

            // init background slide images
		    /*$.backstretch([
		        "../assets/pages/media/bg/1.jpg",
		        "../assets/pages/media/bg/2.jpg",
		        "../assets/pages/media/bg/3.jpg",
		        "../assets/pages/media/bg/4.jpg"
		        ], {
		          fade: 1000,
		          duration: 8000
		    	}
        	);*/
            
            
            
        }
    };

}();

jQuery(document).ready(function() {
    Login.init();
});