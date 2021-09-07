$(function () {
    var str = true;
    $(".button_menu").click(function(e){
        if(str) {
            e.preventDefault();
            $(this).find("span:first").addClass("on");
            $(this).find(".btn2").addClass("on");
            $(this).find("span:last").addClass("on");
            $(".sub_menu").slideDown(500); 
            str = !str;
        } else {
            e.preventDefault();
            $(this).find("span:first").removeClass("on");
            $(this).find(".btn2").removeClass("on");
            $(this).find("span:last").removeClass("on");
            $(".sub_menu").slideUp(500);
            str = !str;
        }
        
    });
    $(".link_sing").click(function(e){
        if(str) {
            e.preventDefault();
            $(".button_menu").find("span:first").addClass("on");
            $(".button_menu").find(".btn2").addClass("on");
            $(".button_menu").find("span:last").addClass("on");
            $(".sub_menu").slideDown(500); 
            str = !str;
        } else {
            e.preventDefault();
            $(".button_menu").find("span:first").removeClass("on");
            $(".button_menu").find(".btn2").removeClass("on");
            $(".button_menu").find("span:last").removeClass("on");
            $(".sub_menu").slideUp(500);
            str = !str;
        }
        
    });
    
    $(".menu .dp1_1").hover(function(){
        $(".sub1").stop().slideDown(500);
        $(".sub_menu").animate({height:"800px"},500);
    },function(){
        $(".sub1").stop().slideUp(500);
        $(".sub_menu").animate({height:"600px"},500);
    });
    $(".menu .dp1").eq(2).hover(function(){
        $(".sub2").stop().slideDown(500);
        $(".sub_menu").animate({height:"800px"},500);
    },function(){
        $(".sub2").stop().slideUp(500);
        $(".sub_menu").animate({height:"600px"},500);
    });
    
    function the() {
        $(".text_logo").animate({opacity:"1"},600,function(){
            $(".text_slo").animate({opacity:"1"},300,function(){
                $(this).animate({marginLeft:"-100px"},600);
            });
        });
    }
    var intv = setInterval(the,800);
    var i = 1;
    function next_ani() {
        
         if(i < 4)  {
              i++;
             $("#num_before").text("0"+i);
            $(".swiper_wrap").animate({marginLeft:"-1920px"},1000,function(){
            $(".swiper_wrap ul").eq(0).appendTo($(".swiper_wrap"));
            $(".swiper_wrap").css({marginLeft:"0px"});
            $(".btn_prev").css({opacity:"1"});
         }); 
        }
    }
    function prev_ani() {
        if(i > 1) {
            i--;
            $("#num_before").text("0"+i);  
            $(".swiper_wrap ul").eq(3).prependTo($(".swiper_wrap"));
            $(".swiper_wrap").css({marginLeft:"-1920px"});
            $(".swiper_wrap").animate({marginLeft:"0px"},1000);
        }
    }
    $(".btn_next").click(function(){
        clearInterval(intv);
        next_ani();
    });
    $(".btn_prev").click(function(){
        clearInterval(intv);
        prev_ani();
    });
    
    $(window).scroll(function () {
        var ht = $(window).scrollTop();
        console.log(ht);
        
        var logo = $("body").offset().top;
        console.log("logo:" + logo);
        if (ht != logo) {
            $(".con_bg").css({backgroundColor: "rgba(0,0,0,0.6)"});
            $(".main_swipe").css({opacity:"0"});
        } else if(ht == logo) {
            $(".con_bg").css({backgroundColor: "rgba(0,0,0,0.3)"});
            $(".main_swipe").css({opacity:"1"});
        }
        
        var jenni = $(".main_txt").offset().top;
        console.log("jenni:" + jenni);
        if (ht >= jenni - 1200) {
            $(".main_txt").animate({top:"-200px"}, 1000);
            $(".main_txt").animate({transform:"translate(0px, 100%)"}, 700);
            $(".muse_con .sub_fr").animate({opacity:"1"},1500);
            $(".muse_con .visual_wrap img").css({transform:"scale(1)"});
        } else if(ht <= jenni - 1200) {
            $(".muse_con .visual_wrap img").css({transform:"scale(1.1)"});
            $(".main_txt").css({top:"200px"});
        }
        
        var black = $(".hera_con .main_txt1").offset().top;
        console.log("black:" + black);
        if(ht >= black - 1200) {
            $(".hera_con .main_txt1").animate({top:"-200px"}, 1000);
            $(".hera_con .main_txt1").animate({transform:"translate(0px, 100%)"}, 700);
            $(".hera_con .sub_fr").animate({opacity:"1"},1500);
            $(".hera_con .visual_wrap img").css({transform:"scale(1)"});
        } else if(ht <= black - 1200) {
            $(".hera_con .visual_wrap img").css({transform:"scale(1.1)"});
            $(".hera_con .main_txt1").css({top:"200px"});
        }
        
        var here = $(".here_wrap .main_title").offset().top;
        console.log("here:" + here);
        if(ht >= here - 1000) {
            $(".here_wrap .main_title").animate({top:"-200px"}, 1000);
            $(".here_wrap .main_title").animate({transform:"translate(0px, 100%)"}, 700);
            $(".here_wrap .text_sub").animate({opacity:"1"},1500);
        } else if(ht <= here - 1000) {
            $(".here_wrap .main_title").css({top:"0px"});
        }
        
        var grid = $(".grid1  .grid_vs").offset().top;
        if(ht >= grid - 500) {
            $(".grid_fr .grid1 .grid_vs img").css({transform:"scale(1)"});
        } else if(ht <= grid - 500) {
            $(".grid_fr .grid1 .grid_vs img").css({transform:"scale(1.1)"});
        }
        var grid = $(".grid2  .grid_vs").offset().top;
        if(ht >= grid - 500) {
            $(".grid_fr .grid2 .grid_vs img").css({transform:"scale(1)"});
        } else if(ht <= grid - 500) {
            $(".grid_fr .grid2 .grid_vs img").css({transform:"scale(1.1)"});
        }
        var grid = $(".grid3  .grid_vs").offset().top;
        if(ht >= grid - 500) {
            $(".grid_fr .grid3 .grid_vs img").css({transform:"scale(1)"});
        } else if(ht <= grid - 500) {
            $(".grid_fr .grid3 .grid_vs img").css({transform:"scale(1.1)"});
        }
        
        var best = $(".best_fr .text_title1").offset().top;
        console.log("best:" + best);
        if(ht >= best - 1200) {
            $(".best_fr .text_title1").animate({top:"-200px"}, 1000);
            $(".best_fr .text_title1").animate({transform:"translate(0px, 100%)"}, 700);
            $(".best_fr .grid1").animate({top:"-100px"}, 1500);
            $(".best_fr .text_sub").animate({opacity:"1"},1500);
        } else if(ht <= best - 1200) {
            $(".best_fr .text_title1").css({top:"0px"});
        }
        var best2 = $(".best_fr .grid1").offset().top;
        console.log("best2:" + best2);
        if(ht >= best2 - 500) {
            $(".best_fr .grid1").animate({top:"-100px"}, 1500);
            $(".best_fr .grid1").animate({transform:"translate(0px, 100%)"}, 700);
        }
        var best3 = $(".best_fr .grid2").offset().top;
        console.log("best3:" + best3);
        if(ht >= best3 - 700) {
            $(".best_fr .grid2").animate({top:"-70px"}, 1500);
            $(".best_fr .grid2 .vs_wrap").animate({bottom:"0px"}, 2000);
            $(".best_fr .grid2 .vs_wrap").animate({transform:"translate(0px, 100%)"}, 700);
        }
        var best4 = $(".best_fr .grid3").offset().top;
        console.log("best4:" + best4);
        if(ht >= best4 - 1000) {
            $(".best_fr .grid3").animate({top:"-10px"}, 1500);
            $(".best_fr .grid3").animate({transform:"translate(0px, 100%)"}, 700);
        }
        var best5 = $(".best_fr .grid4").offset().top;
        console.log("best5:" + best5);
        if(ht >= best5 - 1200) {
            $(".best_fr .grid4").animate({top:"-130px"}, 1500);
            $(".best_fr .grid4").animate({transform:"translate(0px, 100%)"}, 700);
        }
        
        var allPro = $(".all_wrap .text_title1").offset().top;
        console.log("allPro:" + allPro);
        if(ht >= allPro - 1000) {
            $(".all_wrap .text_title1").animate({top:"-200px"}, 1000);
            $(".all_wrap .text_title1").animate({transform:"translate(0px, 100%)"}, 700);
            $(".all_wrap .text_sub").animate({opacity:"1"},1500);
        } else if(ht <= allPro - 1000) {
            $(".all_wrap .text_title1").css({top:"0px"});
        }
        
        var foot = $(".ft").offset().top;
        if(ht >= foot - 1500) {
            $(".ft .list1, .list2").animate({top:"-100px"},500).animate({opacity:"1"},200);
            $(".ft_copy li").animate({top:"-20px"},500).animate({opacity:"1"},600);
            $(".con_bg").css({backgroundColor: "rgba(0,0,0,0.4)"});
        }
        var foot1 = $(".family_site").offset().top;
        if(ht >= foot1 - 1000) {
            $(".family_site").animate({top:"-20px"},700).animate({opacity:"1"},500);
            $(".sns").animate({top:"-20px"},1000).animate({opacity:"1"},500);
        }
    });
});
