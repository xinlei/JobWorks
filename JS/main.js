Parse.initialize("O2zmBbmKr3hO6JJC0o5CxswEsEUxwIGpvviyYjsc", "Xexg4iA4TwdMu4hy6RNrbgrFEkLRTwMjmhplMGya");
    
$('document').ready(function() {
	$("#save_button").click(function() {
		Parse.User.logOut();
		window.location.href = "index.html";
	});

	addEditButton(); 
	
	editTextField(); 
});

function addEditButton(){
	$('.form-control').each(function() {
        if($(this).val()){
        	$(this).prop('disabled', true);

        	$(this).wrap($('<div class="input-group">')); 
        	$(this).after($('<span class="input-group-btn edit-btn"><button class="btn btn-warning" type="button">Edit</button></span>'));
        }
    });
}

function editTextField(){
	$('.edit-btn').each(function(){
		$(this).click(function(){
			var textfield = $(this).prev();
			textfield.prop('disabled', false);
		})
	})
}