$(document).ready(function(){
    moveOut();
});
$(window).on("resize", function(){
    moveOut();
});
function moveOut(){
    console.log($(window).width());
    if ($(window).width() >= 980) {
        $(".nav_main_item").show();
        $(".breaking_news_img_wrap").hover(function () {
            $(".move_out_wrap").slideDown(200);
        }, function () {
            $(".move_out_wrap").slideUp(200);
        });
    } else {
        $(".breaking_news_img_wrap").off("mouseenter mouseleave");

        /*vertical menu*/
        $(".nav_main_item").hide();
        $(".nav_main_list").on("click", function() {
            $(".nav_main_item").toggle();
        });
    }
}