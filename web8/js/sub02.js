$(function () {
    history.scrollRestoration = "manual";
    $(window).on('beforeunload', function(){
      $(window).scrollTop(0);
    });
    
    $(".main_tit").animate({top:"-10px"},1500,function(){
        $(".main_con1").animate({top:"-4px"},1000,function(){
            $(".main_con2").animate({top:"-4px"},1000);
        });
    });
    
    var str = true;
    $(".button_menu").click(function(e){
        if(str) {
            e.preventDefault();
            $(this).find("span:first").addClass("on");
            $(this).find("span:last").addClass("on");
            $(".gnb").fadeIn(500);
            $(".logo").addClass("on1");
            str = !str;
        } else {
            e.preventDefault();
            $(this).find("span:first").removeClass("on");
            $(this).find("span:last").removeClass("on");
            $(".gnb").fadeOut(500);
            $(".logo").removeClass("on1");
            str = !str;
        }
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
    
    $(window).scroll(function () {
        var ht = $(window).scrollTop();
        console.log(ht);
        
        var logo = $(".content").offset().top;
        console.log("logo:" + logo);
        if (ht >= logo) {
            $(".logo").addClass("on");
        } else if(ht <= logo) {
            $(".logo").removeClass("on");
        }
        
        var item1 = $(".item1_txt").offset().top;
        if (ht >= item1 - 700) {
            $(".item1_txt").addClass("on",1000);
        } else if(ht <= item1 - 700) {
            $(".item1_txt").removeClass("on",500);
        }
        var item1_img = $(".img_item1").offset().top;
        if (ht >= item1_img - 700) {
            $(".img_item1 img").addClass("on");
            $(".img_item1").addClass("on",1000);
        } else if(ht <= item1_img - 700) {
            $(".img_item1 img").removeClass("on",500);
            $(".img_item1").removeClass("on",500);
        }
        var item2_img = $(".img_item2").offset().top;
        if (ht >= item2_img - 500) {
            $(".img_item2 img").addClass("on");
            $(".img_item2").addClass("on",1000);
        } else if(ht <= item2_img - 500) {
            $(".img_item2 img").removeClass("on",500);
            $(".img_item2").removeClass("on",500);
        }
        var item3_img = $(".img_item3").offset().top;
        if (ht >= item3_img - 700) {
            $(".img_item3 img").addClass("on");
            $(".img_item3").addClass("on",1000);
        } else if(ht <= item3_img - 700) {
            $(".img_item3 img").removeClass("on",500);
            $(".img_item3").removeClass("on",500);
        }
        
        var next = $(".content").offset().top;
        if (ht >= next - 10) {
            $(".next_fr").addClass("on");
        } else if(ht <= next - 10) {
            $(".next_fr").removeClass("on");
        }
    });
});
