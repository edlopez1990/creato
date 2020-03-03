$(document).ready(function() {
    set_height();
    /*$('#nav-icon').click(function() {
         $(this).toggleClass('open');
     });*/
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