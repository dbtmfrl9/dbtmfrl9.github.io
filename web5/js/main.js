$(function(){
    $(".sub").css({display:"none"});
    $(".gnb ul li,#sub_wrap > div").hover(function(){
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
    
    $(".search").click(function(e){
        e.preventDefault();
        $("#search_form").fadeIn(500);
    });
    $(".close").click(function(e){
        e.preventDefault();
        $("#search_form").fadeOut(500);
    });
    
    var wd = parseInt($(".vs .img_box li").width());
    var len = parseInt($(".vs .img_box li").length);
    function next_ani() {
        $(".vs .img_fr").not(":animated").animate({"margin-left":"-1920px"}, 800, function(){
            $(".vs .img_fr li").eq(0).appendTo($(".vs .img_fr"));
            $(".vs .img_fr").css({"margin-left":"0px"});
        });
    }
    function prev_ani() {
        $(".vs .img_fr li").eq(len-1).prependTo($(".vs .img_fr"));
        $(".vs .img_fr").css("margin-left", -wd+"px");
        $(".vs .img_fr").not(":animated").animate({"margin-left":"0px"}, 800);
    }
    var intv = setInterval(next_ani, 5000);
    $(".control_box .prev").click(function(){
        clearInterval(intv);
        prev_ani();
        intv = setInterval(next_ani, 5000);
    });
    $(".control_box .next").click(function(){
        clearInterval(intv);
        next_ani();
        intv = setInterval(next_ani, 5000);
    });
    $(".control_box .stop").click(function(){
        clearInterval(intv);
    });
    $(".img_box").hover(function() {
        clearInterval(intv);
    }, function() {
        intv = setInterval(next_ani, 5000);
    });
    

    function ani3() {
        $(".card_lst2").not(":animated").animate({marginLeft:"-300px"},700,function(){
            $(".card_lst2 li").eq(0).appendTo(".card_lst2");
            $(".card_lst2").css({marginLeft:"0"});
        });
    }
    function next_ani3() {
        $(".card_lst2").not(":animated").animate({marginLeft:"-300px"},500,function(){
            $(".card_lst2 li").eq(0).appendTo(".card_lst2");
            $(".card_lst2").css({marginLeft:"0"});
        });
    }
    function prev_ani3() {
        $(".card_lst2 li").eq(3).prependTo(".card_lst2");
        $(".card_lst2").css({marginLeft:"-300px"});
        $(".card_lst2").not(":animated").animate({marginLeft:"0"},500);
    }
    var intv4 = setInterval(ani3, 3000);
    $(".card_lst2").hover(function(){
        clearInterval(intv4);
    },function(){
        itv4 = setInterval(ani3, 8000); 
    });
    $(".det .prev").click(function(e){
        e.preventDefault();
        prev_ani3();
    });
    $(".det .next").click(function(e){
        e.preventDefault();
        next_ani3();
    });
    $(".det .stop").click(function(e){
        e.preventDefault();
        clearInterval(intv3);
    });
    
    $(".detail_box > div").css({display:"none"});
    $(".detail_box .view1").css({display:"block"});
    $(".viewlist .view1 .tit").addClass("on");
    $(".viewlist .view1 .no").addClass("effect");
    $(".viewlist > li").find(".no").click(function(){
        var num = $(this).parent().index()+1;
        console.log("num :"+num);
        var $over = $(".viewlist .view"+num+" .no");
        var $link = $(".detail_box .view"+num);
        var $add = $(".viewlist > .view"+num+" .tit");
        $(".viewlist > li").find(".tit").removeClass("on");
        $add.addClass("on");
        $(".viewlist > li .no").removeClass("effect");
        $over.addClass("effect");
        $(".detail_box > div").css({display:"none"});
        $link.css({display:"block"});
    });
    

    function next_ani5() {
        $(".card_lst1").not(":animated").animate({marginLeft:"-330px"},500,function(){
            $(".card_lst1 li").eq(0).appendTo(".card_lst1");
            $(".card_lst1").css({marginLeft:"0"});
        });
    }
    function prev_ani5() {
        $(".card_lst1 li").eq(4).prependTo(".card_lst1");
        $(".card_lst1").css({marginLeft:"-330px"});
        $(".card_lst1").not(":animated").animate({marginLeft:"0"},500);
    }
    var intv5 = setInterval(next_ani5, 3000);
    $("#pg3 #prev").click(function(e){
        e.preventDefault();
        prev_ani5();
    });
    $("#pg3 #next").click(function(e){
        e.preventDefault();
        next_ani5();
    });
    $("#pg3 #stop").click(function(e){
        e.preventDefault();
        clearInterval(intv5);
    });
    $(".card_fr2").hover(function() {
        clearInterval(intv5);
    }, function() {
        intv5 = setInterval(next_ani5, 3000);
    });
    
    
    function next_ani4() {
        $(".utb_item").not(":animated").animate({marginLeft:"-435px"},500,function(){
            $(".utb_item li").eq(0).appendTo(".utb_item");
            $(".utb_item").css({marginLeft:"0"});
        });
    }
    function prev_ani4() {
        $(".utb_item li").eq(3).prependTo(".utb_item");
        $(".utb_item").css({marginLeft:"-435px"});
        $(".utb_item").not(":animated").animate({marginLeft:"0"},500);
    }
    var intv3 = setInterval(next_ani4, 3000);
    $("#pg4 #prev").click(function(e){
        e.preventDefault();
        prev_ani4();
    });
    $("#pg4 #next").click(function(e){
        e.preventDefault();
        next_ani4();
    });
    $("#pg4 #stop").click(function(e){
        e.preventDefault();
        clearInterval(intv3);
    });
    $(".utb_fr").hover(function() {
        clearInterval(intv3);
    }, function() {
        intv3 = setInterval(next_ani4, 3000);
    });
    
    
    $("#sel").change(function(){
        var url = $(this).val();
        location.href = url;
    });
});