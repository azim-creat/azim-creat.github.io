
$(document).ready( function(){

    $('.menu-button').click(function(){
       $('.sideBarBG').slideToggle(500);
    });

    $(window).resize(function(){
        if($(window).width()>770){
            $('.sideBarBG').removeAttr('style');
        }
    });

    
    //  $('#test1').hover(function(){
    //     $('#test1').toggleClass('item-hidden');
    //     $('#test2').toggleClass('item-hidden');
    //  });

    //  $('#test2').hover(function(){
    //     $('#test1').toggleClass('item-hidden');
    //     $('#test2').toggleClass('item-hidden');
    //  });


    // $('.front').hover(function(){
    //     $('.front').toggleClass('item-hidden');
    //     $('.back').toggleClass('item-hidden');
    //  });

    //  $('.back').hover(function(){
    //     $('.front').toggleClass('item-hidden');
    //     $('.back').toggleClass('item-hidden');
    //  });
  

    // $('.main').hover(function(){
    //     $('.front').toggleClass('item-hidden');
    //  });

     $('.main').hover(function(){
        $(this).find('.front').toggleClass('item-hidden');
     });

     //Form

     $('.button').click(function(){
            $('.form , .black-screen').toggleClass('item-hidden');
         });

    $(document).keyup(function(e) {
            if (e.key === "Escape") { 
                $('.form , .black-screen').addClass('item-hidden');
           }
       });
});