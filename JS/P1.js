Parse.initialize("O2zmBbmKr3hO6JJC0o5CxswEsEUxwIGpvviyYjsc", "Xexg4iA4TwdMu4hy6RNrbgrFEkLRTwMjmhplMGya");
$('document').ready(function() {
    var currentUser = Parse.User.current();
    if (currentUser) {
        var e_f_name = currentUser.get("f_name");
        var e_l_name = currentUser.get("l_name");
        var e_hometown = currentUser.get("hometown");
        var e_email = currentUser.get("email");
        var e_phone = currentUser.get("phone");
        var e_ssn = currentUser.get("ssn");
        var e_photo = currentUser.get("photo");
        console.log(e_email);

        if(e_f_name) $('#f_name').val(e_f_name);
        if(e_l_name) $('#l_name').val(e_l_name);
        if(e_hometown) $('#hometown').val(e_hometown);
        if(e_email) $('#email').val(e_email);
        if(e_phone) $('#phone').val(e_phone);
        if(e_ssn) $('#ssn').val(e_ssn);
        //if(e_photo) $('#photo').val(e_photo);

    } else {
        // show the login page if not logged in
        window.location.href = "login.html";
    }

    //mask fields
    $('#phone').mask('(000) 000-0000');
    $('#ssn').mask('000-00-0000');


    $('#next_button').click(function() {
        var form = $('#P1_form');
        form.validate({

        });
        if (form.valid()) {
        //Form Validation
        
            event.preventDefault();

            var f_name = $('#f_name').val();
            var l_name = $('#l_name').val();
            var hometown = $('#hometown').val();
            var email = $('#email').val();
            var phone = $('#phone').val();
            var ssn = $('#ssn').val();
            var photo_file = document.getElementById("photo").files[0];
            if(photo_file){
                var photo_name = f_name + "_"+ l_name + ".jpg";
                var photo = new Parse.File(photo_name, photo_file);
                currentUser.set('photo', photo);
            }
            currentUser.set('f_name', f_name);
            currentUser.set('l_name', l_name);
            currentUser.set('hometown', hometown);
            currentUser.set('email', email);
            currentUser.set('phone', phone);
            currentUser.set('ssn', ssn);
            

            
            currentUser.save(null, {
                success: function(currentUser) {
                    //alert('currentUser values updated');
                    //console.log(hometown);
                    window.location.href = "P2.html"; 
                },
                error: function(currentUser, error) {
                    alert('currentUser values failed to update, with error code: ' + error.message);
                }
            });
        }
    });
});
