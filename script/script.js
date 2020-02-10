new WOW().init()
 
$(document).ready(function() {
    
    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
            $('#scrollToTop').fadeIn();
        }else{
            $('#scrollToTop').fadeOut();
        }
    });
    
    $("#scrollToTop").click(function(){
        $('html, body').animate({ scrollTop : 0},800);
    });
});

//form send

// function sendEmail() {
// 	Email.send({
// 	Host: "smtp.gmail.com",
// 	Username : "<sender’s email address>",
// 	Password : "<email password>",
// 	To : '<recipient’s email address>',
// 	From : "<sender’s email address>",
// 	Subject : "<email subject>",
// 	Body : "<email body>",
// 	}).then(
// 		message => alert("mail sent successfully")
// 	);
// }