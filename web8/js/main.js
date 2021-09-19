$(function () {
    history.scrollRestoration = "manual";
    $(window).on('beforeunload', function(){
      $(window).scrollTop(0);
    });
    
    $("article").css({opacity:"0"});
    $(".btn_box").css({opacity:"0"});
    $(".slo_top .eg").animate({top:"-10px"},1000,function(){
        $(".slo_top .eg").animate({"animation-delay": "1s"},700,function(){
            $(".slo_top .eg").animate({top:"-100px"},1000);
        });
    });
    $(".slo_bottom .eg").animate({top:"-10px"},1100,function(){
        $(".slo_bottom .eg").animate({"animation-delay": "1s"},700,function(){
            $(".slo_bottom .eg").animate({top:"-100px"},1100);
        });
    });
    $(".slo_small .ko").animate({top:"-10px"},1200,function(){
        $(".slo_small .ko").animate({"animation-delay": "1s"},700,function(){
            $(".slo_small .ko").animate({top:"-100px"},1200);
        });
    });
    $(".main_active").animate({opacity:"0"},2500,function(){
        $(".main_active").css({display:"none"});
        $("article").animate({opacity:"1"},1000);
        $(".btn_box").animate({opacity:"1"},1000);
    });
    
    $(".btn_prev").addClass("on");
    var str = true;
    $(".button_menu").click(function(e){
        if(str) {
            e.preventDefault();
            $(this).find("span:first").addClass("on");
            $(this).find("span:last").addClass("on");
            $(".gnb").fadeIn(500); 
            str = !str;
        } else {
            e.preventDefault();
            $(this).find("span:first").removeClass("on");
            $(this).find("span:last").removeClass("on");
            $(".gnb").fadeOut(500);
            str = !str;
        }
    });
    
    $("article div.pg_img1").click(function(){
        $(".page1_slo").fadeIn(500);
    });
    $(".page1_slo .close").click(function(){
        $(".page1_slo").fadeOut(500);
    });
    
    $(".plus_box li").hover(function(){
        $(".plus_box li").find("a").removeClass();
        $(this).find("a").addClass("on");
    },function(){
        $(".plus_box li").find("a").removeClass();
        $(this).find("a").addClass("on1");
    });
    $(".sns_box li").hover(function(){
        $(".sns_box li").find("a").removeClass();
        $(this).find("a").addClass("on");
    },function(){
        $(".sns_box li").find("a").removeClass();
        $(this).find("a").addClass("on1");
    });
    
    var scrLeft0 = $("article").eq(0).offset().left - 10;
    var scrLeft1 = $("article").eq(1).offset().left - 10;
    var scrLeft2 = $("article").eq(2).offset().left - 10;
    var scrLeft3 = $("article").eq(3).offset().left - 10;
    var scrLeft4 = $("article").eq(4).offset().left - 10;
    var scrLeft5 = $("article").eq(5).offset().left - 10;
    $("article").eq(0).css({"z-index": "10"});
    /*$("article").eq(1).css({"z-index": "9"});
    $("article").eq(2).css({"z-index": "8"});
    $("article").eq(3).css({"z-index": "7"});
    $("article").eq(4).css({"z-index": "6"});
    $("article").eq(5).css({"z-index": "5"});*/
    console.log("scrLeft0 :" + scrLeft0);
    console.log("scrLeft1 :" + scrLeft1);
    console.log("scrLeft2 :" + scrLeft2);
    console.log("scrLeft3 :" + scrLeft3);
    console.log("scrLeft4 :" + scrLeft4);
    console.log("scrLeft5 :" + scrLeft5);
    
    
    var wd = $("article").width();
    $(".page").each(function (index) {
        // 개별적으로 Wheel 이벤트 적용
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
            var moveTop = $(window).scrollLeft();
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            } else if (event.detail)
                delta = -event.detail / 3;

            var elmSelecter = $(".page").eq(index);
            console.log("moveTop :" + moveTop);
            // 마우스휠을 위에서 아래로
            if (delta < 0) {
                if ($(elmSelecter).next() != undefined) {
                    try {
                        moveTop = $(elmSelecter).next().offset().left;
                        console.log("moveTopup"+moveTop);
                    } catch (e) {}
                }
                if (moveTop >= scrLeft0 && moveTop < scrLeft1) {
                    $("section").removeClass();
                    $("section").addClass("on");
                    /*$("section").toggleClass("pagewrap1");*/
                    $("article").eq(0).css({"z-index": "10"},function(){
                        $(".copy_tit_wrap1").addClass("on");
                        $(".top_tit").animate({opacity:"0"},800);
                        $(".bot_tit").animate({opacity:"0"},800);
                        $(".btn_prev").removeClass("on");
                        $(".btn_next").removeClass("on");
                    });
                } else if (moveTop >= scrLeft1 && moveTop < scrLeft2) {
                    $("section").removeClass();
                    /*$("section").toggleClass("pagewrap2");*/
                    $("section").addClass("on1",5000);
                    $("article").eq(1).css({"z-index": "10"});
                    $(".copy_tit_wrap1").removeClass("on");
                    $(".btn_prev").animate({opacity:"0"},500);
                    $(".btn_next").animate({opacity:"0"},500,function(){
                        $(".top_tit").animate({opacity:"1"},{marginTop:"500px"},500);
                        $(".bot_tit").animate({opacity:"1"},800);
                        $(".copy_tit_wrap2").addClass("on");
                        $(".btn_next").animate({opacity:"1"},500);
                        $(".btn_prev").removeClass("on");
                        $(".btn_prev").animate({opacity:"1"},500);
                        $(".btn_prev").find("span").text("Premium Coffee & Dessert");
                        $(".btn_next").find("span").text("Cake & Dessert");
                    });
                } else if (moveTop >= scrLeft2 && moveTop < scrLeft3) {
                    $("section").removeClass();
                    /*$("section").removeClass("pagewrap2");
                    $("section").toggleClass("pagewrap3");*/
                    $("section").addClass("on2");
                    $("article").eq(2).css({"z-index": "10"});
                    $(".copy_tit_wrap2").removeClass("on");
                    $(".btn_prev").animate({opacity:"0"},500);
                    $(".btn_next").animate({opacity:"0"},500);
                    $(".bot_tit").animate({opacity:"1"},800,function(){
                        $(".copy_tit_wrap3").addClass("on");
                        $(".btn_next").animate({opacity:"1"},500);
                        $(".btn_prev").removeClass("on");
                        $(".btn_prev").animate({opacity:"1"},500);
                        $(".btn_prev").find("span").text("Twosome Coffee");
                        $(".btn_next").find("span").text("Twosome Deli");
                    });
                } else if (moveTop >= scrLeft3 && moveTop < scrLeft4) {
                    $("section").removeClass();
                    /*$("section").removeClass("pagewrap3");
                    $("section").toggleClass("pagewrap4");*/
                    $("section").addClass("on3");
                    $("article").eq(3).css({"z-index": "10"});
                    $(".copy_tit_wrap3").removeClass("on");
                    $(".btn_prev").animate({opacity:"0"},500);
                    $(".btn_next").animate({opacity:"0"},500);
                    $(".bot_tit").animate({opacity:"1"},800,function(){
                        $(".btn_next").animate({opacity:"1"},500);
                        $(".btn_prev").removeClass("on");
                        $(".btn_prev").animate({opacity:"1"},500);
                        $(".btn_prev").find("span").text("Cake & Dessert");
                        $(".btn_next").find("span").text("Twosome In Your Mug");
                        $(".copy_tit_wrap4").addClass("on");
                    });
                } else if (moveTop >= scrLeft4 && moveTop < scrLeft5) {
                    $("section").removeClass();
                    $("section").addClass("on4");
                    /*$("section").removeClass("pagewrap2");*/
                    /*$("section").toggleClass("pagewrap3");*/
                    $("article").eq(4).css({"z-index": "10"});
                    $(".copy_tit_wrap4").removeClass("on");
                    $(".btn_prev").animate({opacity:"0"},500);
                    $(".btn_next").animate({opacity:"0"},500);
                    $(".bot_tit").animate({opacity:"1"},800,function(){
                        $(".btn_next").animate({opacity:"1"},500);
                        $(".btn_prev").removeClass("on");
                        $(".btn_prev").animate({opacity:"1"},500);
                        $(".btn_prev").find("span").text("Twosome Deli");
                        $(".btn_next").find("span").text("News & Notice");
                        $(".copy_tit_wrap5").addClass("on");
                    });
                } else if (moveTop >= scrLeft5) {
                    $("section").removeClass();
                    $("section").addClass("on5");
                    $("article").eq(5).css({"z-index": "10"});
                    $(".copy_tit_wrap5").removeClass("on");
                    $(".btn_prev").animate({opacity:"0"},500);
                    $(".btn_next").animate({opacity:"0"},500);
                    $(".bot_tit").animate({opacity:"1"},800,function(){
                        $(".btn_prev").removeClass("on");
                        $(".btn_prev").animate({opacity:"1"},500);
                        $(".btn_prev").find("span").text("Twosome In Your Mug");
                        $(".copy_tit_wrap6").addClass("on");
                    });
                    
                    $("article").eq(5).css({"z-index": "10"});
                    $("article").eq(4).css({"z-index": "9"});
                    $("article").eq(3).css({"z-index": "8"});
                    $("article").eq(2).css({"z-index": "7"});
                    $("article").eq(1).css({"z-index": "6"});
                    $("article").eq(0).css({"z-index": "5"});
                }



                // 마우스휠을 아래에서 위로
            } else {
                if ($(elmSelecter).prev() != undefined) {
                    try {
                        moveTop = $(elmSelecter).prev().offset().left;
                    } catch (e) {}
                }
                if (moveTop >= scrLeft0 && moveTop < scrLeft1) {
                    $("section").removeClass();
                    $("section").addClass("on");
                    $("article").eq(0).css({"z-index": "10"});
                    $("article").eq(1).css({"z-index": "9"});
                    $(".copy_tit_wrap2").removeClass("on");
                    $(".btn_prev").animate({opacity:"0"},500);
                    $(".btn_next").animate({opacity:"0"},500);
                    $(".top_tit").animate({opacity:"0"},{marginTop:"500px"},500);
                    $(".bot_tit").animate({opacity:"0"},1000,function(){
                        $(".btn_next").animate({opacity:"1"},500);
                        $(".btn_next").find("span").text("Twosome Coffee");
                        $(".copy_tit_wrap1").addClass("on");
                    });
                } else if (moveTop >= scrLeft1 && moveTop < scrLeft2) {
                    $("section").removeClass();
                    $("section").addClass("on1");
                    $("article").eq(1).css({"z-index": "10"});
                    $("article").eq(2).css({"z-index": "9"});
                    $(".btn_prev").animate({opacity:"0"},500);
                    $(".btn_next").animate({opacity:"0"},500);
                    $(".bot_tit").animate({opacity:"1"},1000,function(){
                        $(".copy_tit_wrap1").removeClass("on");
                        $(".copy_tit_wrap2").addClass("on");
                        $(".btn_next").animate({opacity:"1"},500);
                        $(".btn_prev").removeClass("on");
                        $(".btn_prev").animate({opacity:"1"},500);
                        $(".btn_prev").find("span").text("Premium Coffee & Dessert");
                        $(".btn_next").find("span").text("Cake & Dessert");
                    });
                } else if (moveTop >= scrLeft2 && moveTop < scrLeft3) {
                    $("section").removeClass();
                    $("section").addClass("on2");
                    $("article").eq(2).css({"z-index": "10"});
                    $("article").eq(3).css({"z-index": "9"});
                    $(".btn_prev").animate({opacity:"0"},500);
                    $(".btn_next").animate({opacity:"0"},500);
                    $(".bot_tit").animate({opacity:"1"},1000,function(){
                        $(".copy_tit_wrap4").removeClass("on");
                        $(".copy_tit_wrap3").addClass("on");
                        $(".btn_next").animate({opacity:"1"},500);
                        $(".btn_prev").removeClass("on");
                        $(".btn_prev").animate({opacity:"1"},500);
                        $(".btn_prev").find("span").text("Twosome Coffee");
                        $(".btn_next").find("span").text("Twosome Deli");
                    });
                } else if (moveTop >= scrLeft3 && moveTop < scrLeft4) {
                    $("section").removeClass();
                    $("section").addClass("on3");
                    $("article").eq(3).css({"z-index": "10"});
                    $("article").eq(4).css({"z-index": "9"});
                    $(".btn_prev").animate({opacity:"0"},500);
                    $(".btn_next").animate({opacity:"0"},500);
                    $(".bot_tit").animate({opacity:"1"},1000,function(){
                        $(".copy_tit_wrap5").removeClass("on");
                        $(".copy_tit_wrap4").addClass("on");
                        $(".btn_next").animate({opacity:"1"},500);
                        $(".btn_prev").removeClass("on");
                        $(".btn_prev").animate({opacity:"1"},500);
                        $(".btn_prev").find("span").text("Cake & Dessert");
                        $(".btn_next").find("span").text("Twosome In Your Mug");
                    });
                } else if (moveTop >= scrLeft4 && moveTop < scrLeft5) {
                    $("section").removeClass();
                    $("section").addClass("on4");
                    $("article").eq(4).css({"z-index": "10"});
                    $("article").eq(5).css({"z-index": "9"});
                    $(".btn_prev").animate({opacity:"0"},500);
                    $(".btn_next").animate({opacity:"0"},500);
                    $(".bot_tit").animate({opacity:"1"},1000,function(){
                        $(".copy_tit_wrap6").removeClass("on");
                        $(".copy_tit_wrap5").addClass("on");
                        $(".btn_next").animate({opacity:"1"},500);
                        $(".btn_prev").removeClass("on");
                        $(".btn_prev").animate({opacity:"1"},500);
                        $(".btn_prev").find("span").text("Twosome Deli");
                        $(".btn_next").find("span").text("News & Notice");
                    });
                } else if (moveTop >= scrLeft5) {
                    $("section").removeClass();
                    $("section").addClass("on5");
                    $(".copy_tit_wrap5").removeClass("on");
                    $("article").eq(4).css({"z-index": "9"});
                    $("article").eq(5).css({"z-index": "10"},function(){
                        $(".copy_tit_wrap6").addClass("on");
                    });
                }
            }

            // 화면 이동 0.8초(800)
            if (!$("html,body").is(":animated")) {
                $("html,body").animate({ scrollLeft: moveTop + 'px' }, 1000);
            }
        });
        //마우스휠이벤트 종료
        $("article div.pg_img2").click(function(){
            var n = $(this).parent().index()+1;
            $(".btn_next, .btn_prev").animate({opacity:"0"},500);
            $(".copy_tit_wrap .copy_tit").animate({opacity:"0"},500);
            $(".copy_tit_wrap .copy_con").animate({opacity:"0"},500);
            $("article").css({opacity:"1"});
            $(this).stop().animate({width:"100vw", height:"100vh", "z-index":"999"},800,function(){
                $(location).attr("href","sub0"+n+".html");
            });
        });
    });
});
