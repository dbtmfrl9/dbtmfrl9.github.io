$(function(){
    var ht = $(window).height();
    $("section").height(ht);
    $(window).resize(function(){
        var ht = $(window).height();
        $("section").height(ht);
        $(window).scrollTop(0);
        /*location.reload(); //새로고침*/
    });
    
    
    $(".pg8_view_btn1").click(function(){
        $(".gra1").fadeIn(600);
    });
    $(".gra1 .close").click(function(){
        $(".gra1").fadeOut(600);
    });
    $(".pg8_view_btn2").click(function(){
        $(".gra2").fadeIn(600);
    });
    $(".gra2 .close").click(function(){
        $(".gra2").fadeOut(600);
    });
    $(".pg8_view_btn3").click(function(){
        $(".gra3").fadeIn(600);
    });
    $(".gra3 .close").click(function(){
        $(".gra3").fadeOut(600);
    });
    $(".pg8_view_btn4").click(function(){
        $(".gra4").fadeIn(600);
    });
    $(".gra4 .close").click(function(){
        $(".gra4").fadeOut(600);
    });
    $(".pg8_view_btn5").click(function(){
        $(".gra5").fadeIn(600);
    });
    $(".gra5 .close").click(function(){
        $(".gra5").fadeOut(600);
    });
    $(".pg8_view_btn6").click(function(){
        $(".gra6").fadeIn(600);
    });
    $(".gra6 .close").click(function(){
        $(".gra6").fadeOut(600);
    });
    
    var typingBool = false; 
    var typingIdx=0; 
    var liIndex = 0;
    var liLength = $(".typing_txt>ul>li").length;
    var del = -1;
    var repeatInt= null;
    var tyInt = null;


    // 타이핑될 텍스트를 가져온다 
    var typingTxt = $(".typing_txt>ul>li").eq(liIndex).text(); 

    typingTxt=typingTxt.split(""); // 한글자씩 자른다. 

    if(typingBool==false){ 
      // 타이핑이 진행되지 않았다면 
        typingBool=true; 
        tyInt = setInterval(typing,200); // 첫번재 반복동작 
    } 

    function typing(){ 
      if(typingIdx<typingTxt.length){ 
        // 타이핑될 텍스트 길이만큼 반복 
       $(".typing").append(typingTxt[typingIdx]); 
        // 한글자씩 이어준다. 
         typingIdx++; 
        if(typingIdx == typingTxt.length){
          //첫번째 단어가 써지면 1분쉰다.
            clearInterval(tyInt);
             setTimeout(function(){
               tyInt = setInterval(typing,200);
             },500);
           }
       } else{ 

         //한문장이끝나면
           if(-typingTxt.length-1 < del ){
             //한글자씩 지운다.
              $(".typing").html(typingTxt.slice(0, del))
              del--;
           }else{
             if(liIndex >= liLength-1){
                  liIndex=0;
             }else{
               liIndex++;
             }

             //변수초기화 
             typingIdx=0;
             del= -1;
             typingTxt = $(".typing_txt>ul>li").eq(liIndex).text(); 

             //1분후 다음분장 타이핑 
             clearInterval(tyInt);
             setTimeout(function(){
               tyInt = setInterval(typing,200);
             },500);
           }


        } 
    }  
    
    
    $(window).scroll(function(){
        var ht = $(window).height();
        var t = $(window).scrollTop();
        if(t >= ht*0 && t < ht*1) {
            $("#menu li").removeClass("on");
            $("#menu li").eq(0).addClass("on");
            $("#menu li").find("span").removeClass("on");
            $("#menu li").eq(0).find("span").addClass("on");
        } else if(t <= ht*1 && t < ht*2) {
            $("#menu li").removeClass("on");
            $("#menu li").eq(1).addClass("on");
            $("#menu li").find("span").removeClass("on");
            $("#menu li").eq(1).find("span").addClass("on");
            $("#page3 .pg3_tit_box").removeClass("on");
            
            draw(85, '.pie_cha1', '#ffc400');
            draw(70, '.pie_cha2', '#471baf');
            draw(60, '.pie_cha3', '#ffc400');
            draw(95, '.pie_cha4', '#471baf');
            draw(95, '.pie_cha5', '#ffc400');
            draw(95, '.pie_cha6', '#471baf');

            function draw(max, classname, colorname){
                var i=1;
                var func1 = setInterval(function(){
                  if(i<max){
                      color1(i,classname,colorname);
                      i++;
                  } else {
                    clearInterval(func1);
                  }
                },15);
            }
            function color1(i, classname, colorname){
               $(classname).css({
                    "background":"conic-gradient("+colorname+" 0% "+i+"%, #eaeaea "+i+"% 100%)"
               }).animate({opacity:"1"},500);
            }
        } else if(t >= ht*2 && t < ht*3) {
            $("#menu li").removeClass("on");
            $("#menu li").eq(2).addClass("on");
            $("#menu li").find("span").removeClass("on");
            $("#menu li").eq(2).find("span").addClass("on");
            $("#page3 .pg3_tit_box").addClass("on");
            $("#page4 .pg4_tit_box").removeClass("on");
        } else if(t >= ht*3 && t < ht*4) {
            $("#menu li").removeClass("on");
            $("#menu li").eq(3).addClass("on");
            $("#menu li").find("span").removeClass("on");
            $("#menu li").eq(3).find("span").addClass("on");
            $("#page3 .pg3_tit_box").removeClass("on");
            $("#page4 .pg4_tit_box").addClass("on");
            $("#page5 .pg5_tit_box").removeClass("on");
        } else if(t >= ht*4 && t < ht*5) {
            $("#menu li").removeClass("on");
            $("#menu li").eq(4).addClass("on");
            $("#menu li").find("span").removeClass("on");
            $("#menu li").eq(4).find("span").addClass("on");
            $("#page4 .pg4_tit_box").removeClass("on");
            $("#page6 .pg6_tit_box").removeClass("on");
            $("#page5 .pg5_tit_box").addClass("on");
        } else if(t >= ht*5 && t < ht*6) {
            $("#menu li").removeClass("on");
            $("#menu li").eq(5).addClass("on");
            $("#menu li").find("span").removeClass("on");
            $("#menu li").eq(5).find("span").addClass("on");
            $("#page5 .pg5_tit_box").removeClass("on");
            $("#page6 .pg6_tit_box").addClass("on");
            $(".pg7_img_box").removeClass("on");
            $(".pg7_tit_box").removeClass("on");
        } else if(t >= ht*6 && t < ht*7) {
            $("#menu li").removeClass("on");
            $("#menu li").eq(6).addClass("on");
            $("#menu li").find("span").removeClass("on");
            $("#menu li").eq(6).find("span").addClass("on");
            $("#page6 .pg6_tit_box").removeClass("on");
            $(".pg8_img_box").removeClass("on");
            $(".pg7_tit_box").addClass("on");
        } else if(t >= ht*7 && t < ht*8) {
            $("#menu li").removeClass("on");
            $("#menu li").eq(7).addClass("on");
            $("#menu li").find("span").removeClass("on");
            $("#menu li").eq(7).find("span").addClass("on");
            $("#page6 .pg6_tit_box").removeClass("on");
            $(".pg7_tit_box").removeClass("on");
            $(".pg8_img_box").addClass("on");
        }
    });
    
    $("section").on("mousewheel", function(event, delta){
        console.log(delta);
        //마우스를 올릴때
        if(delta > 0) {
            var prev = $(this).prev().offset().top;
            console.log("prev :"+prev);
            $("html, body").stop().animate({scrollTop:prev},500,"linear");
            
        //마우스를 내릴때
        } else if(delta < 0) {
            var next = $(this).next().offset().top;
            $("html, body").stop().animate({scrollTop:next},500,"linear");
        }
    });
    $("#menu li").click(function(e){
        e.preventDefault();
        var num = $(this).index();
        var nowTop = num*ht;
        $("html, body").stop().animate({scrollTop:nowTop},500,"linear");
    });
});