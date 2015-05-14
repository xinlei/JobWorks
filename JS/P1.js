Parse.initialize("O2zmBbmKr3hO6JJC0o5CxswEsEUxwIGpvviyYjsc", "Xexg4iA4TwdMu4hy6RNrbgrFEkLRTwMjmhplMGya");
$('document').ready(function() {
    var currentUser = Parse.User.current();
    if (currentUser) {
        
    } else {
        // show the login page if not logged in
        window.location.href = "login.html";
    }
    $( '#next_button' ).click(function() {
        event.preventDefault();
        //console.log(currentUser);
        var f_name = $('#f_name').val();
        var l_name = $('#l_name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var ssn = $('#ssn').val();

        currentUser.set('f_name', f_name);
        currentUser.set('l_name', l_name);
        currentUser.set('email', email);
        currentUser.set('phone', phone);
        currentUser.set('ssn', ssn);
        currentUser.save(null, {
            success: function(currentUser) {
                alert('currentUser values updated');
                window.location.href = "P2.html"; 
            },
            error: function(currentUser, error) {
                alert('currentUser values failed to update, with error code: ' + error.message);
            }
        })
    });
});
