
Parse.initialize("O2zmBbmKr3hO6JJC0o5CxswEsEUxwIGpvviyYjsc", "Xexg4iA4TwdMu4hy6RNrbgrFEkLRTwMjmhplMGya");
$('document').ready(function() {
    var currentUser = Parse.User.current();
    if (currentUser) {
        
    } else {
        // show the login page if not logged in
        window.location.href = "login.html";
    }
    $('#next_button').click(function() {
        event.preventDefault();
        var start = $('#start').val();
        var hours = $('#hours').val();
        currentUser.set('start',start);
        currentUser.set('hours',hours); 
        currentUser.save(null, {
            success: function(currentUser) {
                alert('currentUser values updated');
            },
            error: function(currentUser, error) {
                alert('currentUser values failed to update, with error code: ' + error.message);
            }
        })
    });
});

