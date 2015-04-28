Parse.initialize("O2zmBbmKr3hO6JJC0o5CxswEsEUxwIGpvviyYjsc", "Xexg4iA4TwdMu4hy6RNrbgrFEkLRTwMjmhplMGya");
    
$('document').ready(function() {
    var currentUser = Parse.User.current();
    if (currentUser) {
        
    } else {
        // show the login page if not logged in
        window.location.href = "login.html";
    }

    $("#submitSearch").click(function() { 
        var query = new Parse.Query(Parse.User);

        if($("#query_firstname").val()){
            query.equalTo("f_name", $("#query_firstname").val());
        }
        if($("#query_lastname").val()){
            query.equalTo("l_name", $("#query_lastname").val());
        }
        if($("#query_email").val()){
            query.equalTo("l_name", $("#query_email").val());
        }
        query.find({
            success: function(results){
                alert("Successfully retrieved " + results.length + " users.");
                for(var i = 0; i < results.length; i++){
                    // build table
                }    
            },
            error: function(error){
                alert("Error: " + error.code + " " + error.message);
            } 
        }); 
    });

     $("#submitShowAdvancedSearch").click(function() { 
        alert("Advanced");
    });
});