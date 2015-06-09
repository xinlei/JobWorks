// Removed the work experience at given index
function clean(i){
    index = i + 1; 
    $('#emp'+index).val("");
    $('#addr'+index).val("");
    $('#title'+index).val("");
    $('#time'+index).val("");
    $('#hours'+index).val("");
    $('#super'+index).val("");
    $('#resp'+index).val("");
    $('#r_leave'+index).val("");
}

// Load all available employment experience from parse
function loadEmployers(currentUser, employers, toggle){
    var query = new Parse.Query("Employer");
    query.equalTo("createdBy", currentUser);   

    query.find({
        success: function(results) {
            //alert("Successfully retrieved " + results.length + " scores.");
            for (var i = 0; i < 4; i++) {
                var index = i + 1;

                if(i < results.length){ 
                    console.log(results.length);
                    var employer = results[i];
                    employers.push(employer); 
                    $('#emp'+index).val(employer.get("emp"));
                    $('#addr'+index).val(employer.get("addr"));
                    $('#title'+index).val(employer.get("title"));
                    $('#time'+index).val(employer.get("time"));
                    $('#hours'+index).val(employer.get("hours"));
                    $('#super'+index).val(employer.get("super"));
                    $('#resp'+index).val(employer.get("resp"));
                    $('#r_leave'+index).val(employer.get("r_leave"));
                    $('#contact_emp'+index).val(employer.get("contact_emp"));

                    // Reset toggle options
                    if(toggle){
                        $('#employer'+index).toggle(true);
                        $('#add_job_button'+index).toggle(false);
                        $('#min_job_button'+index).toggle(true);
                    }

                } else {
                    $('#emp'+index).val("");
                    $('#addr'+index).val("");
                    $('#title'+index).val("");
                    $('#time'+index).val("");
                    $('#hours'+index).val("");
                    $('#super'+index).val("");
                    $('#resp'+index).val("");
                    $('#r_leave'+index).val("");
                    $('#contact_emp'+index).val("");

                }
                
            }
            addEditButton();
            editTextField(); 
        },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });
}

// Update the database once the user enters his/her employment experience
function updateEmployers(currentUser){
    console.log(currentUser);
    var Employer = Parse.Object.extend("Employer");
    
    // maximum of 4 employment entries
    for(var i = 1; i < 5; i++){
        var checkString = $('#emp'+i).val();
        console.log(checkString)
        if(checkString && checkString.length > 0){
            var employer = new Employer();
            var emp = $('#emp'+i).val();
            var addr = $('#addr'+i).val();
            var title = $('#title'+i).val();
            var time = $('#time'+i).val();
            var hours = $('#hours'+i).val();
            var supervisor = $('#super'+i).val();
            var resp = $('#resp'+i).val();
            var r_leave = $('#r_leave'+i).val();
            var contact_emp = $('#contact_emp'+i).val();
            employer.set('emp',emp);
            employer.set('addr',addr);
            employer.set('title',title);
            employer.set('time',time);
            employer.set('hours',hours);
            employer.set('super',supervisor);
            employer.set('resp',resp);
            employer.set('r_leave',r_leave);
            employer.set('contact_emp',contact_emp);

            // Establish relation with the current user
            employer.set("createdBy", currentUser);

            employer.save(null, {
                success: function(currentUser) {
                    //alert('currentUser values updated');
                },
                error: function(currentUser, error) {
                    alert('displaye currentUser values failed to update, with error code: ' + error.message);
                }
            });
        }
    }
}

Parse.initialize("O2zmBbmKr3hO6JJC0o5CxswEsEUxwIGpvviyYjsc", "Xexg4iA4TwdMu4hy6RNrbgrFEkLRTwMjmhplMGya");
$('document').ready(function() {
    var currentUser = Parse.User.current();
    var employers = []; 
    if (currentUser) {
        loadEmployers(currentUser, employers, true); 
    } else {
        window.location.href = "login.html";
    }
    
    // Delete everything in the database and enter a fresh set of entries
    $('#next_button').click(function() {
        event.preventDefault();
        Parse.Object.destroyAll(employers).then(function(success){
            updateEmployers(currentUser); 
        }, function(error){
        
        });
    });

    var next = 1;
    $(".add-more").click(function(e){
        e.preventDefault();
        var addto = "#job_field" + next;
        var addRemove = "#job_field" + (next);
        next = next + 1;
        var newIn = '<input autocomplete="off" class="input form-control" id="job_field' + next + '" name="job_field' + next + '" type="text">';
        var newInput = $(newIn);
        var removeBtn = '<button id="remove' + (next - 1) + '" class="btn btn-default remove-me" >x</button></div><div id="job_field">';
        var removeButton = $(removeBtn);
        $(addto).after(newInput);
        $(addRemove).after(removeButton);
        $("#job_field" + next).attr('data-source',$(addto).attr('data-source'));
        $("#count").val(next);  
        
            $('.remove-me').click(function(e){
                e.preventDefault();
                var fieldNum = this.id.charAt(this.id.length-1);
                var fieldID = "#job_field" + fieldNum;
                $(this).remove();
                $(fieldID).remove();
            });
    });
    
    $("#add_job_button1").click(function() {
        $("#employer1").toggle();
        $(this).toggle();
        $('#min_job_button1').toggle();
    });
    $("#min_job_button1").click(function() {
        $("#employer1").toggle();
        $(this).toggle();
        $('#add_job_button1').toggle();
        clean(0, employers, removed);
    });
    $("#add_job_button2").click(function() {
        $("#employer2").toggle();
        $(this).toggle();
        $('#min_job_button2').toggle();
    });
    $("#min_job_button2").click(function() {
        $("#employer2").toggle();
        $(this).toggle();
        $('#add_job_button2').toggle();
        clean(1, employers, removed);
    });
    $("#add_job_button3").click(function() {
        $("#employer3").toggle();
        $(this).toggle();
        $('#min_job_button3').toggle();
    });
    $("#min_job_button3").click(function() {
        $("#employer3").toggle();
        $(this).toggle();
        $('#add_job_button3').toggle();
        clean(2, employers, removed);
        });
    $("#add_job_button4").click(function() {
        $("#employer4").toggle();
        $(this).toggle();
        $('#min_job_button4').toggle();
    });
    $("#min_job_button4").click(function() {
        $("#employer4").toggle();
        $(this).toggle();
        $('#add_job_button4').toggle();
        clean(3, employers, removed);
    });
});