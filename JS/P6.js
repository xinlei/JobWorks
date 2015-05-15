
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
    var hometown = currentUser.get("hometown");
    var edu = currentUser.get("edu");
    var industry_interests = "";
    var category_interests = "";
    var start = currentUser.get("start");

    //add industry and category interests
    var industry_list = [];
    var construction = currentUser.get('construction');
    var office = currentUser.get('office');
    var warehouse = currentUser.get('warehouse');
    var sales = currentUser.get('sales');
    var automotive = currentUser.get('automotive');
    var caregiving = currentUser.get('caregiving');
    var culinary = currentUser.get('culinary');
    var financial = currentUser.get('financial');
    if (construction.length > 0) {
        industry_interests += "construction";
    }
    if (office.length > 0) {
        industry_interests += ", office";
    }
    if (warehouse.length > 0) {
        industry_interests += ", warehouse";
    }
    if (sales.length > 0) {
        industry_interests += "sales";
    }
    if (automotive.length > 0) {
        industry_interests += "automotive";
    }
    if (caregiving.length > 0) {
        industry_interests += "caregiving";
    }
    if (culinary.length > 0) {
        industry_interests += "culinary";
    }
    if (financial.length > 0) {
        industry_interests += "financial";
    }


    //Set values for the paragraph intro




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
                alert('currentUser values updated');
                window.location.href = "final_landing.html"; 
            },
            error: function(currentUser, error) {
                alert('currentUser values failed to update, with error code: ' + error.message);
            }
        })
    });
    
});

