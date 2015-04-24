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
        var edu = $('#edu').value();
        var lang = $('#lang').value();
        var vet = $('#vet').value();
        //placeholder form crim
        currentUser.set('edu',edu);
        currentUser.set('lang',lang);
        currentUser.set('vet',vet);
    });
</script>