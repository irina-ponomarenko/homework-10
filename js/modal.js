$(document).ready(function(){
    $("#btn-click").click(function() {
        //Ширина и высота всего документа
        var HeightDocument = $(document).height();
        var WidthDocument = $(document).width();
        //Ширина и высота окна браузера
        var HeightScreen = $(window).height();
        //Плавное анимационное наложение на страницу темного фона
        $(".modal_bg").css({"width":WidthDocument,"height":HeightDocument});
        $(".modal_bg").fadeIn(1000);
        $(".modal_bg").fadeTo("slow",0.8);
        //Расположение модального окна с содержимым по высоте учитывая скроллинг документа
        var Top_modal_window = $(document).scrollTop() + HeightScreen/2-$(".modal_window").height()/2;
        $(".modal_window").css({"display":"block"});
        //Запрет на сколлинг страницы
        $("body").css({"overflow":"hidden"});
        return false;
    });
    //При клике на кнопке "Close", модальное окно и фон скрываются
    $(".modal_window button").click(function () {
        $(".modal_bg, .modal_window").hide();
        $("body").css({"overflow":"auto"});
    });
});
