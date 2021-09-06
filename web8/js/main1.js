$(document).ready(function(){
    $(".page").each(function(index) {
        // 개별적으로 Wheel 이벤트 적용
        $(this).on("mousewheel DOMMouseScroll", function(e) {
            e.preventDefault();
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            } 
            else if (event.detail)
                delta = -event.detail / 3;
            var moveTop = $(window).scrollLeft();
            var elmSelecter = $(".page").eq(index);
            // 마우스휠을 위에서 아래로
            if (delta < 0) {
                if ($(elmSelecter).next() != undefined) {
                    try {
                        moveTop = $(elmSelecter).next().offset().left;
                    } catch(e){}
                }
            // 마우스휠을 아래에서 위로
            } else {
                if ($(elmSelecter).prev() != undefined) {
                    try {
                        moveTop = $(elmSelecter).prev().offset().left;
                    } catch(e){}
                }
            }

            // 화면 이동 0.8초(800)
            $("html, body").stop().animate({
                scrollLeft: moveTop + 'px'
            }, {
                duration: 800, complete: function () {
                }
            });
        });
    }); 
});

/*$(function(){
    $(".bg_fr li:gt(0)").css({display:"none"});
    //page 길이
    var numAc = $(".page").length;
    //page width
    var wd = $(".main_con").width();
    var widSec = numAc*wd;
    var widTotal = widSec;
    $("body").height(widSec);
    $(".main_con").width(widTotal);
    $("html, body").animate({scrollTop:-widSec},1000);
    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        console.log("scroll:"+scroll);
        $(".main_con").stop().animate({left:-scroll},1000);
  });*/
    
  /*$("article h2").click(function(e){
	 e.preventDefault();
	 var i = $(this).parent().index();
	 var imgsrc = $(this).children("a").attr("href");
	  $("article p img").attr({src:imgsrc});
	 var pos = wd*i;
	  $("html, body").scrollTop(pos);
	 $("article").removeClass("on");
	 $(this).parent().addClass("on");
  });
  $("article span").click(function(){
	 $("article").removeClass("on");
  });
  $("#navi li").click(function(){
	 var i = $(this).index();
	 var pos = 1000 * i;
	 $("#navi li, article").removeClass();
	 $(this).addClass("on");
	 $("html, body").scrollTop(pos);
  });*/