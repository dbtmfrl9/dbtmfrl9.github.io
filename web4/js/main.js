$(function(){
    $(".sub").css({display:"none"});
    $(".gnb ul li, #sub_wrap > div").hover(function(){
        var i = $(this).index();
        $("#sub_wrap > div").eq(i).stop().slideDown(300);
    },function(){
        $("#sub_wrap > div").stop().slideUp(300);
        
    });
    $("#sub_wrap > div").hover(function(){
        var i = $(this).index();
        $(".gnb ul li").eq(i).find("a").addClass("on");   
    },function(){
        $(".gnb ul li a").removeClass("on");     
    });
    
    $(".visual_fr li:gt(0)").css({display:"none"});
    function next_ani() {
        $(".visual_fr li:first").fadeIn(800).next().fadeOut(800).end().appendTo(".visual_fr");
    }
    var intv = setInterval(next_ani, 4000);
    
    
    $(".slick_track li").eq(0).click(function(){
        $(this).css({opacity:"1"}).addClass("on");
        $(".slick_track2 li").eq(0).addClass("on");
    });

    $(".slick_track li").eq(0).addClass("on");
    $(this).addClass("on");
    $(".slick_track li").click(function(){
        $(this).addClass("on");
        $(".slick_track li").eq(0).removeClass("on");
    });

    function next() {
        $(".slick_track2").animate({marginLeft:"-1100px"},800,function(){
            $(".slick_track2 li").eq(0).appendTo($(".slick_track2"));
            $(".slick_track2").css({marginLeft:"0"});
        });
    }
    function prev() {
        $(".slick_track2 li").eq(2).prependTo($(".slick_track2"));
        $(".slick_track2").css({marginLeft:"-1100px"});
        $(".slick_track2").animate({marginLeft:"0"},800);
    }
    $(".next_btn").click(function(){
        next();
    });
    $(".prev_btn").click(function(){
        prev();
    });
});