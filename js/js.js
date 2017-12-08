$(document).ready(function () {
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 165) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    });
});

var menu_selector = ".navbar-nav";

function onScroll(){
    var scroll_top = $(document).scrollTop();
    $(menu_selector + " a").each(function(){
        var hash = $(this).attr("href");
        var target = $(hash);
        if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
            $(menu_selector + " a.active").removeClass("active");
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
}

$(document).ready(function () {

    $(document).on("scroll", onScroll);
    $("a[href^='#']").click(function(e){
        e.preventDefault();

        $(document).off("scroll");
        $(menu_selector + " a.active").removeClass("active");
        $(this).addClass("active");
        var hash = $(this).attr("href");
        var target = $(hash);

        $("html, body").animate({
            scrollTop: target.offset().top
        }, 500, function(){
            window.location.hash = hash;
            $(document).on("scroll", onScroll);
        });

    });
});

    $(document).ready(function(){
        $('#thumbnails a').lightBox();
        $('.hover-galery').on('click', function() {
            $(this).parent().find('img').trigger('click');
        });
    });






$(document).ready(function () {
    $('.open-modal').click( function(event){
        event.preventDefault();
        $('#overlay').fadeIn(400, // анимируем показ обложки
            function(){ // далее показываем мод. окно
                $('.b-popup')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });

// закрытие модального окна
    $('#modal, #overlay').click( function(){
        $('.b-popup')
            .animate({opacity: 0, top: '45%'}, 200,  // уменьшаем прозрачность
                function(){ // пoсле aнимaции
                    $(this).css('display', 'none'); // скрываем окно
                    $('#overlay').fadeOut(400); // скрывaем пoдлoжку
                }
            );
    });
})


