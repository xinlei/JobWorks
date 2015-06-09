Parse.initialize("O2zmBbmKr3hO6JJC0o5CxswEsEUxwIGpvviyYjsc", "Xexg4iA4TwdMu4hy6RNrbgrFEkLRTwMjmhplMGya");
    
$('document').ready(function() {
	var currentUser = Parse.User.current();

	if(!currentUser){
		window.location.href = "login.html";
	}
	var imageFile = currentUser.get('photo');
	if(imageFile){
	    var imageURL = imageFile.url();
	    $('.picture').append('<img class="photo" src='+imageURL+'>');
	}

           
    $('.name')[0].innerText = (currentUser.get('f_name')+' '+currentUser.get('l_name'));

    $('.contact')[0].href = 'mailto:'+currentUser.get('email');

    $('.industry')[0].innerText = industryToString(currentUser);

    $('.location')[0].innerText = currentUser.get('hometown');

    availabilityToString(currentUser); 

    experienceToString(currentUser, reset);

    /*

            $("input:radio[name=drug_test]").change(function () {
                currentUser.set('drug_test', $('input:radio[name=drug_test]:checked').val()); 
                currentUser.save();
            });

            availabilityToString(currentUser); 
            experienceToString(currentUser);

            $("input:radio[name=background_check]").change(function () {
                currentUser.set('background_check', $('input:radio[name=background_check]:checked').val()); 
                currentUser.save();
            });
*/
	
});

function reset(){
	$('.content').height($('.anchor').offset().top + 25);
}