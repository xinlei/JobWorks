
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
    var h_year = $('#h_year').value();
    var r_homeless = $('#r_homeless').value();
    var d_year = $('#d_year').value();
    //placeholder for traits
    var characteristic = $('#characteristic').value();
    var d_characteristic = $('#d_characteristic').value();
    var u_circum = $('#u_circum').value();
    var d_job = $('#d_job').value();
    var goals = $('#goals').value();
    currentUser.set('h_year',h_year);
    currentUser.set('r_homeless',r_homeless);
    currentUser.set('d_year',d_year);
    currentUser.set('characteristic',characteristic);
    currentUser.set('d_characteristic',d_characteristic);
    currentUser.set('u_cirucm',u_circum);
    currentUser.set('d_job',d_job);
    currentUser.set('goals',goals);
});
