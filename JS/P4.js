<script src="http://www.parsecdn.com/js/parse-1.4.2.min.js"></script>
<script language="JavaScript">
    Parse.initialize("O2zmBbmKr3hO6JJC0o5CxswEsEUxwIGpvviyYjsc", "Xexg4iA4TwdMu4hy6RNrbgrFEkLRTwMjmhplMGya");
    $('document').ready(function() {
        var currentUser = Parse.User.current();
        if (currentUser) {
            
        } else {
            // show the login page if not logged in
            window.location.href = "login.html";
        }
    });
    $('#next_button').click(function() {
        var interests = $('#f_name').value();
        var l_name = $('#l_name').value();
        var email = $('#email').value();
        var phone = $('#phone').value();
        var ssn = $('#ssn').value();
        currentUser.set('f_name',f_name);
        currentUser.set('l_name',l_name);
        currentUser.set('email',email);
        currentUser.set('phone',phone);
        currentUser.set('ssn',ssn);
    });
</script>