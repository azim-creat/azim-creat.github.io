
$(document).ready(function () {

    $('.menu-button').click(function () {
        $('.sideBarBG').slideToggle(500);
    });

    $(window).resize(function () {
        if ($(window).width() > 770) {
            $('.sideBarBG').removeAttr('style');
        }
    });


    $('.main').hover(function () {
        $(this).find('.front').toggleClass('item-hidden');
    });

    //Form

    $('.button').click(function () {
        $('.form , .black-screen').toggleClass('item-hidden');
    });

    $(document).keyup(function (e) {
        if (e.key === "Escape") {
            $('.form , .form-email , .black-screen').addClass('item-hidden');
            $(".item-active").remove()
            $('button').removeClass('item-hidden');
        }
    });

    $('.form--cross').click(function () {
        $('.form , .form-email , .black-screen').addClass('item-hidden');
        $(".item-active").remove()
        $('button').removeClass('item-hidden');
    });


    //Заполнение формы

    $('.button--item').click(function () {
        $(this).parent().clone().addClass("item-active").appendTo(".item-name");
        $('.button--item').toggleClass('item-hidden');
    });

    //Email support

    $('.button--footer').click(function () {
        $('.form-email , .black-screen').toggleClass('item-hidden');
    });


});