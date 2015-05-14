Parse.initialize("O2zmBbmKr3hO6JJC0o5CxswEsEUxwIGpvviyYjsc", "Xexg4iA4TwdMu4hy6RNrbgrFEkLRTwMjmhplMGya");
$('document').ready(function() {
    var currentUser = Parse.User.current();
    if (currentUser) {
        var e_f_name = currentUser.get("f_name");
        var e_l_name = currentUser.get("l_name");
        var e_email = currentUser.get("email");
        var e_phone = currentUser.get("phone");
        var e_ssn = currentUser.get("ssn");

        if(e_f_name) $('#f_name').val(e_f_name);
        if(e_l_name) $('#l_name').val(e_l_name);
        if(e_email) $('#email').val(e_email);
        if(e_phone) $('#phone').val(e_phone);
        if(e_ssn) $('#ssn').val(e_ssn);

    } else {
        // show the login page if not logged in
        window.location.href = "login.html";
    }

    $('#next_button').click(function() {
        event.preventDefault();

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
