$(document).ready(function(){
    var win_h = $(window).height();
    $(".pg").each(function(index){
        $(this).attr("data-index", win_h*index);
    });
    $(".pg").on("mousewheel DOMMouseScroll", function(e){
        var idx = $(this).index();
        var pagePos = parseInt($(this).attr("data-index"));

        /*if(idx>=1) { //스크롤시 두 번째 페이지를 스크롤했을 때
            $(".hd").addClass("on");
        } else {
            $(".hd").removeClass("on");
        }*/
        $(window).scroll(function(){
       var ht = $(window).height();
       var t = $(window).scrollTop();
        
       if(t >= ht*0 && t < ht*1) {
         $(".left_quick button").removeClass("on");
         $(".left_quick button").eq(0).addClass("on");
         $(".hd").removeClass("on");
       } else if(t >= ht*1 && t < ht*2) {
          $(".left_quick button").removeClass("on");
          $(".left_quick button").eq(1).addClass("on");
          $(".hd").removeClass("on");
          $(".pg1_img").animate({left:"1px"},800);
          $(".pg1_img2").animate({right:"-460px"},800);
          $(".left_quick span").removeClass("on");
          $(".left_quick").removeClass("on");
       } else if(t >= ht*2 && t < ht*3) {
          $(".left_quick button").removeClass("on");
          $(".left_quick button").eq(2).addClass("on");
          $(".hd").removeClass("on");
          $(".hd").addClass("on");
          $(".left_quick span").removeClass("on");
          $(".left_quick span").addClass("on");
          $(".left_quick").removeClass("on");
          $(".left_quick").addClass("on");
       } else if(t >= ht*3 && t < ht*4) {
          $(".left_quick button").removeClass("on");
          $(".left_quick button").eq(3).addClass("on"); 
          $(".left_quick").removeClass("on");
          $(".left_quick span").removeClass("on");
          $(".hd").removeClass("on");
       } else if(t >= ht*4 && t < ht*5) {
          $(".left_quick button").removeClass("on");
          $(".left_quick button").eq(4).addClass("on"); 
          $(".hd").removeClass("on");
          $(".left_quick span").removeClass("on");
          $(".left_quick").removeClass("on");
       } else if(t >= ht*5 && t < ht*6) {
          $(".left_quick button").removeClass("on");
          $(".left_quick button").eq(5).addClass("on"); 
          $(".hd").removeClass("on");
          $(".hd").addClass("on");
          $(".left_quick span").removeClass("on");
          $(".left_quick span").addClass("on");
          $(".left_quick").removeClass("on");
          $(".left_quick").addClass("on");
       }
    });
        if(e.originalEvent.wheelDelta >= 0) { //위로 스크롤시
            $("html, body").stop().animate({scrollTop:pagePos - win_h},1000,"easeOutCubic");
            return false;
        } else if(e.originalEvent.wheelDelta < 0) {  //아래로 스크롤
            $("html, body").stop().animate({scrollTop:pagePos + win_h},1000,"easeOutCubic");
            return false;
        }
    });
    $(".left_quick button").click(function(){ //퀵 메뉴를 클릭시 해당 화면으로
        var idx = $(this).index();
        $("html, body").stop().animate({scrollTop:win_h*idx});
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
    });
});    

/*$(function(){
   var ht = $(window).height();
   console.log("ht :"+ht);
   $(".pg").height(ht);
   $(window).resize(function(){
     var ht = $(window).height();
     $(".pg").height(ht);
     $(window).scrollTop(ht);
     location.reload();
    });
    $(window).scroll(function(){
       var ht = $(window).height();
       var t = $(window).scrollTop();
        
       if(t >= ht*0 && t < ht*1) {
         $(".left_quick button").removeClass("on");
         $(".left_quick button").eq(0).addClass("on");  
       } else if(t >= ht*1 && t < ht*2) {
          $(".left_quick button").removeClass("on");
          $(".left_quick button").eq(1).addClass("on");
       } else if(t >= ht*2 && t < ht*3) {
          $(".left_quick button").removeClass("on");
          $(".left_quick button").eq(2).addClass("on"); 
       } else if(t >= ht*3 && t < ht*4) {
          $(".left_quick button").removeClass("on");
          $(".left_quick button").eq(3).addClass("on"); 
       } else if(t >= ht*4 && t < ht*5) {
          $(".left_quick button").removeClass("on");
          $(".left_quick button").eq(4).addClass("on"); 
       } else if(t >= ht*5 && t < ht*6) {
          $(".left_quick button").removeClass("on");
          $(".left_quick button").eq(5).addClass("on"); 
       }
    });
    $(".pg").on("mousewheel", function(event, delta){
        console.log("delta :"+delta);
       //마우스를 올릴때
       if(delta > 0) {
         var prev = $(this).prev().offset().top;
         console.log("prev :"+prev);
           $("html, body").stop().animate({scrollTop:prev},1000,"easeOutCubic");
           
      //마우스를 내릴때
       } else if(delta < 0) {
           var next = $(this).next().offset().top;
           $("html, body").stop().animate({scrollTop:next},1000,"easeOutCubic");
       }
    });
    $(".left_quick button").click(function(){
      var num = $(this).index();
      var nowTop = num*ht;
      $("html, body").stop().animate({scrollTop:nowTop},1000,"easeOutCubic");
    });
});*/