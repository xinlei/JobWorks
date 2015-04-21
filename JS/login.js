$( "#login-form" ).submit(function( event ) {
	var username = $("#login-username").val();
    var password = $("#login-password").val();

	Parse.User.logIn("myname", "mypass", {
  		success: function(user) {
    		alert("success");
  		},
  		error: function(user, error) {
    		alert("failure"); 
  		}
	});
	event.preventDefault();
}); 

$( "#signup-form" ).submit(function( event ) {
	console.log("in signup");
	var user = new Parse.User();
	var username = $("#login-username").val();
    var password = $("#login-password").val();
	user.set("username", username);
	user.set("password", password);
	 
	user.signUp(null, {
	  	success: function(user) {
	    	alert("success");
	  	},
	  	error: function(user, error) {
	    	alert("failure");
	  	}
	});
	event.preventDefault();
});