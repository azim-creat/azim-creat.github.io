
$(document).ready( function(){
    $('.menu-button').click(function(){
       $('.sideBarBG').slideToggle(500);
    });

    $(window).resize(function(){
        if($(window).width()>770){
            $('.sideBarBG').removeAttr('style');
        }
    })

});