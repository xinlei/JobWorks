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
        var edu = $('#edu').val();
        var lang = $('#lang').val();
        var vet = $('#vet').val();
        //placeholder form crim
        currentUser.set('edu',edu);
        currentUser.set('lang',lang);
        currentUser.set('vet',vet);
        currentUser.save(null, {
            success: function(currentUser) {
                alert('currentUser values updated');
                window.location.href = "P6.html"; 
            },
            error: function(currentUser, error) {
                alert('currentUser values failed to update, with error code: ' + error.message);
            }
        })
    });
});
