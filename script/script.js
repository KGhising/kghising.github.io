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