
Parse.initialize("O2zmBbmKr3hO6JJC0o5CxswEsEUxwIGpvviyYjsc", "Xexg4iA4TwdMu4hy6RNrbgrFEkLRTwMjmhplMGya");
$('document').ready(function() {
    var currentUser = Parse.User.current();
    if (currentUser) {
        
    } else {
        // show the login page if not logged in
        window.location.href = "login.html";
    }
});
//Temporarily nulled
$('#next_button').click(function() {
    /*var Employer = Parse.Object.extend("Employer");
    //first employer
    var employer1 = new Employer();
    var emp1 = $('#emp1').value();
    var addr1 = $('#addr1').value();
    var title1 = $('#title1').value();
    var time1 = $('#time1').value();
    var hours1 = $('#hours1').value();
    var super1 = $('#super1').value();
    var resp1 = $('#resp1').value();
    var r_leave1 = $('#r_leave1').value();
    var contact_emp1 = $('#contact_emp1').value();
    employer1.set('emp',emp1);
    employer1.set('addr',addr1);
    employer1.set('title',title1);
    employer1.set('time',time1);
    employer1.set('hours',hours1);
    employer1.set('super',super1);
    employer1.set('resp',resp1);
    employer1.set('r_leave',r_leave1);
    employer1.set('contact_emp',contact_emp1);
    //second employer
    var employer2 = new Employer();
    var emp2 = $('#emp2').value();
    var addr2 = $('#addr2').value();
    var title2 = $('#title2').value();
    var time2 = $('#time2').value();
    var hours2 = $('#hours2').value();
    var super2 = $('#super2').value();
    var resp2 = $('#resp2').value();
    var r_leave2 = $('#r_leave2').value();
    var contact_emp2 = $('#r_leave2').value();
    employer2.set('emp',emp2);
    employer2.set('addr',addr2);
    employer2.set('title',title2);
    employer2.set('time',time2);
    employer2.set('hours',hours2);
    employer2.set('super',super2);
    employer2.set('resp',resp2);
    employer2.set('r_leave',r_leave2);
    employer2.set('contact_emp',contact_emp2);
    //third employer
    var employer3 = new Employer();
    var emp3 = $('#emp3').value();
    var addr3 = $('#addr3').value();
    var title3 = $('#title3').value();
    var time3 = $('#time3').value();
    var hours3 = $('#hours3').value();
    var super3 = $('#super3').value();
    var resp3 = $('#resp3').value();
    var r_leave3 = $('#r_leave3').value();
    var contact_emp3 = $('#r_leave3').value();
    employer3.set('emp',emp3);
    employer3.set('addr',addr3);
    employer3.set('title',title3);
    employer3.set('time',time3);
    employer3.set('hours',hours3);
    employer3.set('super',super3);  
    employer3.set('resp',resp3);
    employer3.set('r_leave',r_leave3);
    employer3.set('contact_emp',contact_emp3);
    //fourth employer
    var employer4 = new Employer();
    var emp4 = $('#emp4').value();
    var addr4 = $('#addr4').value();
    var title4 = $('#title4').value();
    var time4 = $('#time4').value();
    var hours4 = $('#hours4').value();
    var super4 = $('#super4').value();
    var resp4 = $('#resp4').value();
    var r_leave4 = $('#r_leave4').value();
    var contact_emp4 = $('#r_leave4').value();
    employer4.set('emp',emp4);
    employer4.set('addr',addr4);
    employer4.set('title',title4);
    employer4.set('time',time4);
    employer4.set('hours',hours4);
    employer4.set('super',super4);
    employer4.set('resp',resp4);
    employer4.set('r_leave',r_leave4);
    employer4.set('contact_emp',contact_emp4);
    //set user employer attributes
    currentUser.set('exp1', exp1);
    currentUser.set('exp2', exp2);
    currentUser.set('exp3', exp3);
    currentUser.set('exp4', exp4);*/
    
});
