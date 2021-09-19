$(function(){
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'UA-109283150-1');
    
    
    $(".cur_num").text(1);
    $(".arr_box li label").click(function() {
        $(".cur_num").text(parseInt($(this).attr("data-val")));
    });

    $(".tit_box li:gt(0)").css({display:"none"});
    function nextani(){
        $(".tit_box li:first").fadeOut(500).next().fadeIn(500).end().appendTo(".tit_box");
    }
    function prevani(){
        $(".tit_box li:last").fadeOut(500).next().fadeIn(500).end().appendTo(".tit_box");
    }
    var interval = setInterval(nextani, 4000);

    function nextAni() {
        $(".img_fr").not(":animated").animate({marginLeft:"-1200px"},800, function(){
            $(".img_fr li").eq(0).appendTo($(".img_fr"));
            $(".img_fr").css({marginLeft:"0px"});
            var i = $(".img_fr li").eq(0).index();
            $(".cur_num").text(i+1);
        });
    }
    function prevAni() {
        $(".img_fr li").eq(2).prependTo($(".img_fr"));
        $(".img_fr").css({marginLeft:"-1200px"});
        $(".img_fr").not(":animated").animate({marginLeft:"0px"},800);
    }
    var interval = setInterval(nextAni, 4000);
    $(".btn_next").click(function(){
        clearInterval(interval);
        nextAni();
        interval = setInterval(nextAni, 4000);
    });
    $(".btn_prev").click(function(){
        clearInterval(interval);
        prevAni();
        interval = setInterval(prevAni, 4000);
    });
    
    $("#sel").change(function() {
        var url = $(this).val();
        location.href = url;
    });
    
    
    var str = true;
    $(".menu_call_btn").click(function(e){
        if(str) {
            e.preventDefault();
            $(this).find("span:first").addClass("on");
            $(this).find(".bar2").animate({opacity:"0"},100);
            $(this).find("span:last").addClass("on");
            $("#all_menu").slideDown(500); 
            str = !str;
        } else {
            e.preventDefault();
            $(this).find("span:first").removeClass("on");
            $(this).find(".bar2").animate({opacity:"1"},100);
            $(this).find("span:last").removeClass("on");
            $("#all_menu").slideUp(500);
            str = !str;
        }
    });
    
    $(window).scroll(function() {
        var ht = $(window).scrollTop();
        console.log(ht);
        
        var lst1 = $("#page1").offset().top;
        console.log("lst1:" + lst1);
        if (ht >= lst1 - 700) {
            $(".lst_box1 > li").eq(0).animate({marginTop:"-200px"},500);
            $(".lst_box1 > li").eq(1).animate({marginTop:"-200px"},700);
            $(".lst_box1 > li").eq(2).animate({marginTop:"-200px"},900);
        } else if(ht <= lst1 - 700) {
            
        }
        
        var lst3 = $("#page3").offset().top;
        console.log("lst3:" + lst3);
        if (ht >= lst3 - 800) {
            $(".lst_box3 li img").css({transform:"scale(1)"});
        } else if(ht <= lst3 - 800) {
            $(".lst_box3 li img").css({transform:"scale(2)"});
        }
    });
});