
Parse.initialize("O2zmBbmKr3hO6JJC0o5CxswEsEUxwIGpvviyYjsc", "Xexg4iA4TwdMu4hy6RNrbgrFEkLRTwMjmhplMGya");
$('document').ready(function() {
    var currentUser = Parse.User.current();
    if (currentUser) {
        
    } else {
        // show the login page if not logged in
        window.location.href = "login.html";
    }
    //Currently Saves as String values for interests
    $('#next_button').click(function() {
        event.preventDefault();
        var interests = [];
        var o_interests = $('#o_interests').val();
        $('.job_cat:checked').each(function() {
            interests.push($(this).val());
        });
        currentUser.set('interests',interests);
        currentUser.set('o_interests',o_interests);
        currentUser.save(null, {
            success: function(currentUser) {
                alert('currentUser values updated');
                window.location.href = "P5.html"; 
            },
            error: function(currentUser, error) {
                alert('currentUser values failed to update, with error code: ' + error.message);
            }
        })
    });
    
});
