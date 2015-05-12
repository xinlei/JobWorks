
Parse.initialize("O2zmBbmKr3hO6JJC0o5CxswEsEUxwIGpvviyYjsc", "Xexg4iA4TwdMu4hy6RNrbgrFEkLRTwMjmhplMGya");
$('document').ready(function() {
    var currentUser = Parse.User.current();
    if (currentUser) {
        
    } else {
        // show the login page if not logged in
        window.location.href = "login.html";
    }
    $('#save_button').click(function() {
        window.location.href = "Profile_Skeleton.html";
    });
    $('#next_button').click(function() {
        event.preventDefault();
        var h_year = $('#h_year').val();
        var r_homeless = $('#r_homeless').val();
        var d_year = $('#d_year').val();
        //placeholder for traits
        var characteristic = $('#characteristic').val();
        var d_characteristic = $('#d_characteristic').val();
        var u_circum = $('#u_circum').val();
        var d_job = $('#d_job').val();
        var goals = $('#goals').val();
        currentUser.set('h_year',h_year);
        currentUser.set('r_homeless',r_homeless);
        currentUser.set('d_year',d_year);
        currentUser.set('characteristic',characteristic);
        currentUser.set('d_characteristic',d_characteristic);
        currentUser.set('u_circum',u_circum);
        currentUser.set('d_job',d_job);
        currentUser.set('goals',goals);
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

