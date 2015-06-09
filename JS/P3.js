
Parse.initialize("O2zmBbmKr3hO6JJC0o5CxswEsEUxwIGpvviyYjsc", "Xexg4iA4TwdMu4hy6RNrbgrFEkLRTwMjmhplMGya");
$('document').ready(function() {
    var currentUser = Parse.User.current();
    if (currentUser) {
        var e_start = currentUser.get("start");
        var e_hours = currentUser.get("hours");
        var e_times = currentUser.get("times");



        if(e_start) $('#start').val(e_start);
        if(e_hours) $('#hours').val(e_hours);
        if(e_times) {
            var i  = 0; 
            $('.times').each(function() {
                $(this).val(e_times[i]);
                i++; 
            });
        }
    } else {
        // show the login page if not logged in
        window.location.href = "login.html";
    }

    //mask fields
    $('#start').mask("00/00/0000", {placeholder: "__/__/____"});

    $('#next_button').click(function() {
        event.preventDefault();
        var start = $('#start').val();
        var hours = $('#hours').val();

        var times = [];
        $('.times').each(function() {
            var time = $(this).val();
            times.push(time);
        });

        currentUser.set('start', start);
        currentUser.set('hours', hours);
        currentUser.set('times', times); 
        currentUser.save(null, {
            success: function(currentUser) {
                //alert('currentUser values updated');
                window.location.href = "P4.html"; 
            },
            error: function(currentUser, error) {
                alert('currentUser values failed to update, with error code: ' + error.message);
            }
        })
    });
});

