Parse.initialize("O2zmBbmKr3hO6JJC0o5CxswEsEUxwIGpvviyYjsc", "Xexg4iA4TwdMu4hy6RNrbgrFEkLRTwMjmhplMGya");
    
$('document').ready(function() {
    var currentUser = Parse.User.current();
    if (currentUser) {
        
    } else {
        // show the login page if not logged in
        window.location.href = "login.html";
    }

    $("#submitSearch").click(function() { 
        alert("Go");
    });

     $("#submitShowAdvancedSearch").click(function() { 
        alert("Advanced");
    });
});

$("#query-form input[type=submit]").click(function() {
    $("input[type=submit]", $(this).parents("#query-form")).removeAttr("clicked");
    $(this).attr("clicked", "true");
});