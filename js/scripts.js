$(document).ready(function(){
    moveOut();
});
$(window).on("resize", function(){
    moveOut();
});
function moveOut(){
    var navMainItem=$(".nav_main_item");
    if ($(window).width() >= 980) {
        $(".breaking_news_img_wrap").hover(function () {
            $(".move_out_wrap").slideDown(200);
        }, function () {
            $(".move_out_wrap").slideUp(200);
        });
    } else {
        $(".breaking_news_img_wrap").off("mouseenter mouseleave");

        /*vertical menu*/
        $(".nav_main_list").on("click", function() {
            if (navMainItem.hasClass("show")) {
                navMainItem.removeClass("show");
            } else {
                navMainItem.addClass("show");
            }
        });
    }
}