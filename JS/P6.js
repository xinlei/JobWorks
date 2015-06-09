
Parse.initialize("O2zmBbmKr3hO6JJC0o5CxswEsEUxwIGpvviyYjsc", "Xexg4iA4TwdMu4hy6RNrbgrFEkLRTwMjmhplMGya");
$('document').ready(function() {
    var currentUser = Parse.User.current();
    if (currentUser) {
        
    } else {
        // show the login page if not logged in
        window.location.href = "login.html";
    }


    //Get initial value for the paragraph intro
    var f_name = currentUser.get("f_name");
    if (!f_name) {
        f_name = "we have not gotten your name yet"
    }
    var hometown = currentUser.get("hometown");
    if (!hometown) {
        hometown = "unspecified city";
    }
    var edu = currentUser.get("edu");
    if (!edu) {
        edu = "an unspecified school"
    }
    var industry_interests = "";
    var category_interests = "";
    var start = currentUser.get("start");
    if (!start) {
        start = "an unspecified date";
    }

    //add industry interests
    var industry_list = [];
    var construction = currentUser.get('construction');
    var office = currentUser.get('office');
    var warehouse = currentUser.get('warehouse');
    var sales = currentUser.get('sales');
    var automotive = currentUser.get('automotive');
    var caregiving = currentUser.get('caregiving');
    var culinary = currentUser.get('culinary');
    var financial = currentUser.get('financial');
    var counter = 0;
    if (construction && construction.length > 0) {
        industry_interests += "construction";
        counter++;
    }
    if (office && office.length > 0) {
        industry_interests += ", office";
        counter++;
    }
    if (warehouse && warehouse.length > 0) {
        industry_interests += ", warehouse";
        counter++;

    }
    if (sales && sales.length > 0) {
        industry_interests += ", sales";
        counter++;

    }
    if (automotive && automotive.length > 0) {
        industry_interests += ", automotive";
        counter++;

    }
    if (caregiving && caregiving.length > 0) {
        industry_interests += ", caregiving";
        counter++;

    }
    if (culinary && culinary.length > 0) {
        industry_interests += ", culinary";
        counter++;

    }
    if (financial && financial.length > 0) {
        industry_interests += ", financial";
        counter++;

    }

    //create the industry value
    var last_comma_index = industry_interests.lastIndexOf(",");
    var industry_string = "";
    if (counter == 0) {
        industry_string += "no specific industries"
    }
    else if (counter == 1) {
        industry_string += industry_interests;
    }
    else if (counter == 2) {
        industry_string = industry_interests.slice(0,last_comma_index) + " and" + industry_interests.slice(last_comma_index + 1);
    }
    else {
        industry_string = industry_interests.slice(0,last_comma_index + 1) + " and" + industry_interests.slice(last_comma_index + 1);
    }



    //Set values for the paragraph intro
    $('#f_name').html(f_name);
    $('#hometown').html(hometown);
    $('#edu').html(edu);
    $('#industry_interests').html(industry_string);
    $('#start').html(start);

    console.log(f_name);





    $('#save_button').click(function() {
        window.location.href = "Profile_Skeleton.html";
    });
    $('#next_button').click(function() {
        event.preventDefault();
        var h_year = $('#h_year').val();
        var r_homeless = $('#r_homeless').val();
        var d_year = $('#d_year').val();
        var traits = [];
        $('.trait').each(function() {
            var trait = $(this).val();
            if(trait) traits.push(trait);
        });
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
        currentUser.set('traits',traits);
        currentUser.save(null, {
            success: function(currentUser) {
                //alert('currentUser values updated');
                window.location.href = "final_landing.html"; 
            },
            error: function(currentUser, error) {
                alert('currentUser values failed to update, with error code: ' + error.message);
            }
        })
    });
    
});

