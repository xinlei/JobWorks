
Parse.initialize("O2zmBbmKr3hO6JJC0o5CxswEsEUxwIGpvviyYjsc", "Xexg4iA4TwdMu4hy6RNrbgrFEkLRTwMjmhplMGya");
$('document').ready(function() {
    var currentUser = Parse.User.current();
    if (currentUser) {
        
    } else {
        // show the login page if not logged in
        window.location.href = "login.html";
    }
    var name = currentUser.get('f_name') + " " + currentUser.get('l_name');
    var reason = currentUser.get('r_homeless');
    var email = currentUser.get('email');
    $('#name').html(name);
    $('#reason').html(reason);
    $('#email').html(email);
});

