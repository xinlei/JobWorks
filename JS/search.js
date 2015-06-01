Parse.initialize("O2zmBbmKr3hO6JJC0o5CxswEsEUxwIGpvviyYjsc", "Xexg4iA4TwdMu4hy6RNrbgrFEkLRTwMjmhplMGya");
    
$('document').ready(function() {

    var currentUser = Parse.User.current();
    if (currentUser) {
        
    } else {
        // show the login page if not logged in
        window.location.href = "login.html";
    }

    var sidebarClone = $(".sidebar").clone(); 
    var mainClone = $('.main').clone();

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
                    alert("Successfully retrieved " + results.length + " users.");

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
        $('.main').replaceWith(mainClone.clone(true));
        var query = new Parse.Query(Parse.User);
        var id = $(this).attr('id');
        
        query.get(id, {
          success: function(object) {
            $('.name').append('<h1>'+object.get('f_name')+' '+object.get('l_name')+'</h1>');
            $('.contact').append('<p>'+object.get('email')+' | '+object.get('phone')+'</p>');
          },
          error: function(object, error) {
          }
        });
    });
});