
$(document).ready( function(){

    $('.menu-button').click(function(){
       $('.sideBarBG').slideToggle(500);
    });

    $(window).resize(function(){
        if($(window).width()>770){
            $('.sideBarBG').removeAttr('style');
        }
    });

    // $('#runschool1').click(function(e){
    //     $(this).parent().html('<h1>Is work</h1>');
    //     e.preventDefault();
    // });
    

    $('#runschool1').click(function() {
        // get the contents of the link that was clicked
        var linkText = $(this).text('<h1>Is work</h1>');
    
        // replace the contents of the div with the link text
        $('#runschool1').html(linkText);

        $(this).append('<div class="item"><p class="item-sale-text">План теренировок для начинающих</p><div class="item-prise">500 руб</div><button class="button button--item">получить</button></div>');
    
        // cancel the default action of the link by returning false
        return false;
    });

  


});