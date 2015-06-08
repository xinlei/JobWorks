Parse.initialize("O2zmBbmKr3hO6JJC0o5CxswEsEUxwIGpvviyYjsc", "Xexg4iA4TwdMu4hy6RNrbgrFEkLRTwMjmhplMGya");
    
$('document').ready(function() {

    var currentUser = Parse.User.current();

    var team_member = null;

    var last_note = null;

    if (currentUser) {
    } else {
        // show the login page if not logged in
        window.location.href = "login.html";
    }

    var sidebarClone = $(".sidebar").clone(); 
    var mainClone = $('.main').clone();
    $('.main').toggle(false);

    $("#submit-search").click(function() {
        
        event.preventDefault();

        Parse.initialize("O2zmBbmKr3hO6JJC0o5CxswEsEUxwIGpvviyYjsc", "Xexg4iA4TwdMu4hy6RNrbgrFEkLRTwMjmhplMGya"); 
        
        var query = new Parse.Query(Parse.User);

        if($("#query-firstname").val()){
            query.startsWith("f_name", $("#query-firstname").val());
        }
        if($("#query-lastname").val()){
            query.startsWith("l_name", $("#query-lastname").val());
        }
        if($("#query-email").val()){
            query.startsWith("email", $("#query-email").val());
        }
        query.find({
            success: function(results){
                alert("Successfully retrieved " + results.length + " users.");
                for(var i = 0; i < results.length; i++){
                    // build table
                }    
            },
            error: function(error){
                alert("Error: " + error.code + " " + error.message);
            } 
        }); 
    });

    $("#submit-advanced").click(function() { 
        alert("Advanced");
    });

    $(document.body).on("keydown", '#query-basic', function(e){
        Parse.initialize("O2zmBbmKr3hO6JJC0o5CxswEsEUxwIGpvviyYjsc", "Xexg4iA4TwdMu4hy6RNrbgrFEkLRTwMjmhplMGya"); 
        
        var keyCode = e.keyCode || e.which;
        if (keyCode == 13){
            event.preventDefault();
            var query = new Parse.Query(Parse.User);

            if($("#query-basic").val()){
                query.startsWith("f_name", $("#query-basic").val());
            }
            query.find({
                success: function(results){
                    //alert("Successfully retrieved " + results.length + " users.");

                    $('.sidebar').replaceWith(sidebarClone.clone(true));

                    for(var i = 0; i < results.length; i++){
                        var row = $("<div>", {class: "row result"});
                        var div = $("<div>", {class: "col-md-10 result"});
                        
                        div.append('<p><a id='+results[i].id+' class="open-profile">'+results[i].get("f_name")+' '+results[i].get("l_name")+'</a></p>')
                        
                        row.append('<div class="col-md-1 result">');
                        row.append(div);
                        row.append('<div class="col-md-1 result">');
                        $(".sidebar").append(row);
                    }
                    var row = $("<div>", {class: "row last-row"});
                    $(".sidebar").append(row);   
                },
                error: function(error){
                    alert("Error: " + error.code + " " + error.message);
                } 
            }); 
        }
    });

    $(document.body).on('click', '.open-profile', function(){

        //$(window).resize(function() {
        //    $('.last-row').height($(window).height()-$('.last-row').offset().top);
        //});

        $('.main').replaceWith(mainClone.clone(true));
        $('.main').toggle(true);
        var query = new Parse.Query(Parse.User);
        var id = $(this).attr('id');

        last_note = null;

        query.get(id, {
          success: function(object) {
            team_member = object;

            $('.name').append('<h1>'+object.get('f_name')+' '+object.get('l_name')+'</h1>');
            $('.contact').append('<p>'+object.get('email')+' | '+object.get('phone')+'</p>');
            $('input:radio[name=drug_test]').eq(object.get('drug_test')-1).prop("checked", true); 
            $('input:radio[name=background_check]').eq(object.get('background_check')-1).prop("checked", true); 
            $('.industry').append('<h4>'+industryToString(object)+'</h4>');
            $("input:radio[name=drug_test]").change(function () {
                object.set('drug_test', $('input:radio[name=drug_test]:checked').val()); 
                object.save();
            });

            availabilityToString(object); 
            experienceToString(object);

            $("input:radio[name=background_check]").change(function () {
                object.set('background_check', $('input:radio[name=background_check]:checked').val()); 
                object.save();
            });

          },
          error: function(object, error) {
          
          }
        });
    });
    
    $(document.body).on('click', '.add-more', function(){
                
        var curr_note = $('<textarea class="form-control note" rows="3" placeholder="Write a note about this team member."></textarea>');
        $('.note-section').prepend(curr_note);
        console.log('add textarea');
        
        if(last_note){
            var Note = Parse.Object.extend('Note');
            var note = new Note();

            note.set('content', last_note.val());
            note.set('user', team_member);
            note.set('creator', currentUser); 
            note.save();
            last_note.prop('disabled', true);
        }
        last_note = curr_note;
        resetHeight();
    }); 
});

function experienceToString(user){
    var query = new Parse.Query("Employer");
    query.equalTo("createdBy", user);   

    query.find({
        success: function(results) {
            for (var i = 0; i < results.length; i++){
                var employer = results[i];
                $('.experience').append('<h4>'+employer.get("title")+' at '+employer.get("emp")+'</h4>');
                $('.experience').append('<h4>Worked for '+employer.get("hours")+' per week | ' +employer.get("time")+'</h4>'); 
                $('.experience').append('<h4>Responsibilities include: '+employer.get('resp')+'</h4>');
                $('.experience').append('<h4>The reason for leaving: '+employer.get('r_leave')+'</h4>');
                $('.experience').append('<h4>For reference, contact: '+employer.get('contact_emp')+'</h4>');
                if(i + 1 < results.length){
                    $('.experience').append('<hr id="divider" />');
                }
            }
            appendNotes(user);
        },
        error: function(error){

        }
    });

}

function appendNotes(user){
    var Note = Parse.Object.extend("Note");
    var query = new Parse.Query(Note);
    query.equalTo("user", user);
    query.find({
        success: function(notes) {
            for (var i = 0; i < notes.length; i++){
                var date = $('<h3 class="date">'+(notes[i].createdAt).toLocaleString()+'</h3>');
                var curr_note = $('<textarea class="form-control note" rows="3" placeholder="Write a note about this team member."></textarea>');
                curr_note.val(notes[i].get("content"));
                curr_note.prop('disabled', true);
                $('.note-section').prepend(curr_note);
                $('.note-section').prepend(date);

            }
            resetHeight();
        }
    });
}


function availabilityToString(user){
    var e_times = user.get("times");
    console.log(e_times);
    if(e_times && e_times.length > 0) {
        console.log(e_times);
        var i  = 0; 
        $('.times').each(function() {
            if(e_times[i].length > 0){
                $(this).html(e_times[i]);
            } else {
                $(this).html("-");
            }
            i++; 
        });
    } else {
        $('.times').each(function(){
            $(this).html("-");
        })
    }
}

function industryToString(user){
    var industry_interests = "";
    var industry_list = [];
    var construction = user.get('construction');
    var office = user.get('office');
    var warehouse = user.get('warehouse');
    var sales = user.get('sales');
    var automotive = user.get('automotive');
    var caregiving = user.get('caregiving');
    var culinary = user.get('culinary');
    var financial = user.get('financial');
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
    return industry_string;
}

function resetHeight(){
    var height = Math.max($(window).height(), $('.anchor').offset().top);
    $('.last-row').height(height-$('.last-row').offset().top);
}