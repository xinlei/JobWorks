
Parse.initialize("O2zmBbmKr3hO6JJC0o5CxswEsEUxwIGpvviyYjsc", "Xexg4iA4TwdMu4hy6RNrbgrFEkLRTwMjmhplMGya");
$('document').ready(function() {
    var currentUser = Parse.User.current();
    if (currentUser) {
        
    } else {
        // show the login page if not logged in
        window.location.href = "login.html";
    }
    //Currently Saves as String values for interests
    $('#next_button').click(function() {
        event.preventDefault();
        //construction category
        var construction = [];
        $('.construction_cat:checked').each(function() {
            construction.push($(this).val());
        });
        currentUser.set('construction',construction);
        //office category
        var office = [];
        $('.office_cat:checked').each(function() {
            office.push($(this).val());
        });
        currentUser.set('office',office);
        //warehouse category
        var warehouse = [];
        $('.warehouse_cat:checked').each(function() {
            warehouse.push($(this).val());
        });
        currentUser.set('warehouse',warehouse);
        //sales category
        var sales = [];
        $('.sales_cat:checked').each(function() {
            sales.push($(this).val());
        });
        currentUser.set('sales',sales);
        //automotive category
        var automotive = [];
        $('.const_cat:checked').each(function() {
            automotive.push($(this).val());
        });
        currentUser.set('automotive',automotive);
        //caregiving category
        var caregiving = [];
        $('.caregiving_cat:checked').each(function() {
            caregiving.push($(this).val());
        });
        currentUser.set('caregiving',caregiving);
        //culinary category
        var culinary = [];
        $('.culinary_cat:checked').each(function() {
            culinary.push($(this).val());
        });
        currentUser.set('culinary',culinary);
        //financial category
        var financial = [];
        $('.financial_cat:checked').each(function() {
            financial.push($(this).val());
        });
        currentUser.set('financial',financial);
        
        //original code for complete interests
        /*var interests = [];*/
        var o_interests = $('#o_interests').val();
        /*$('.job_cat:checked').each(function() {
            interests.push($(this).val());
        });*/
        /*currentUser.set('interests',interests);*/
        currentUser.set('o_interests',o_interests);
        currentUser.save(null, {
            success: function(currentUser) {
                //alert('currentUser values updated');
                window.location.href = "P5.html"; 
            },
            error: function(currentUser, error) {
                alert('currentUser values failed to update, with error code: ' + error.message);
            }
        })
    });
    
});
