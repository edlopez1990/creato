$(document).ready(function() {
    set_height();
    /*$('#nav-icon').click(function() {
         $(this).toggleClass('open');
     });*/

    $('.slide-header').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        dotsClass: "vertical-dots-left"
    });


    $('.slide-our-work').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        dotsClass: "vertical-dots-right"
    });
});

$(window).resize(function() {
    //aqui el codigo que se ejecutara cuando se redimencione la ventana
    set_height();
})

function set_height() {
    //height = $(window).height();
    //$(".block").height(height);
}

function openNav() {
    document.getElementById("nav").style.width = "100%";
}

function closeNav() {
    document.getElementById("nav").style.width = "0%";
}