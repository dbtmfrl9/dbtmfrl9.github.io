$(function(){
    var cur_data = new Date();  //현재 날짜
    var cur_year = cur_data.getFullYear();  //현재 년도
    var cur_month = cur_data.getMonth()+1;  //현재 월
    var cur_day = cur_data.getDate();  //현재 일

    var cur_start = new Date(cur_year, cur_month-1, 1);  //시작일
    var cur_start_day = cur_start.getDay();  //시작요일
    var cnt=0;

    //현재 달의 1일의 요일번호를 구하고 그 자리부터 1~마지막날까지를 출력
    $(".calender_arr tbody tr td").each(function(){
        $(this).find("span").text(cnt-cur_start_day+1);//일찍기
        cnt++;  //일 카운트
    });

    for(var i=0;i<cur_start_day;i++){
        $(".calender_arr tbody tr:first-child td").eq(i).text("");  //시작일보다 앞에 날짜 지우기
    }

    if(cur_month<10){
        cur_month="0"+cur_month;  //현재 월이 10 미만이면 0붙임
    }

    //년도와 월 출력하기
    $("#calender .calender_year").text(cur_year+"년");
    $("#calender .calender_month").text(cur_month+"월");
    
    
    $(".sub").css({display:"none"});
    $(".gnb li, .sub").hover(function(){
        $(".sub").stop().slideDown(500);
    },function(){
        $(".sub").stop().slideUp(500);
    });
    $("#lnb > li").hover(function(){
        var i = $(this).index();
        $(".gnb li a").removeClass("on");
        $(".gnb li").eq(i).find("a").addClass("on");
    },function(){

    });
    
    function next_ani() {
        $(".visual_fr").animate({marginLeft:"-1440px"},1000,function(){
            $(".visual_fr li").eq(0).appendTo(".visual_fr");
            $(".visual_fr").css({marginLeft:"0"});
        });
    }
    var intv = setInterval(next_ani, 5000);
    
    //비주얼 영역의 숫자 버튼을 클릭하면, 해당 이미지로 슬라이딩 
    $("#visual .btn_fr button").click(function(){
        var wd = parseInt($("#visual").width());
        var th = $(this).index();
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
        $("#visual .visual_fr").animate({"margin-left":(-wd*th)+"px"}, 500);
    });
    
    
    //한 페이지 스크롤시 to_top을 보이게 
    var ht = $(window).height();
    $(window).scroll(function(){
        var tp = $(window).scrollTop();
        if(tp>=ht) {
            
        }  
    });
    
    
    var c_date = new Date();
    var c_year = c_date.getFullYear();
    var c_month = c_date.getMonth()+1;
    var c_day = c_date.getDate();
    var e_date = new Date(c_year, c_month, 0);
    var e_day = e_date.getDate();

    var c_data;
    cal_load();
    function cal_load() {
        if(c_month<10) { c_data="0"+c_month; }
        else { c_data=c_month; }
        $(".cur_month_fr").attr("data-year",c_year);
        $(".cur_month_fr").attr("data-month",c_month);
        var month_ul = "<ul class='month_lst'></ul>";
        $(".cur_month_fr").append(month_ul);
        $("#pg1 .month_lst").append("<li class='item'><span class='month'>"+c_data+"</span><span class='year'>"+c_year+"</span></li>");
        $("#pg1 .cur_month_days").empty();
        for(var i=1;i<=e_day;i++) {
            if(c_day==i){
                $("#pg1 .cur_month_days").append("<li class='item on'><span class='day'>"+i+"</span></li>");
            } else {
                $("#pg1 .cur_month_days").append("<li class='item'><span class='day'>"+i+"</span></li>");
            }
        }
    }
    
    /* 라운딩 박스 썸네일 슬라이딩 */
    $(".month_card_lst").css("margin-left","0px");
       function thumb_ani() {
           $(".month_card_lst li").removeClass("on");
           $(".month_card_lst").not(":animated").animate({"margin-left":"-300px"}, 600, function(){
                $(".month_card_lst li").eq(0).appendTo($(".month_card_lst"));
                $(".month_card_lst").css("margin-left","0px");
                $(".month_card_lst li").eq(2).addClass("on");
            });

        }
        var intv1 = setInterval(function(){ thumb_ani(); }, 3000);
    
    /* 탭 패널에서 해당 버튼 요소의 data-val */
    $(".culture_btn_fr li").click(function(){
        $(this).find("button").addClass("on");
        $(this).siblings().find("button").removeClass("on");
        var tar = $(this).attr("data-val");
        $(".culture_lst_fr li").css("display", "none");
        if(tar=="all") {
            $(".culture_lst_fr li").css("display", "block");
        } else {
            $(".culture_lst_fr li").filter("[data-val="+tar+"]").css("display","block");
        } 
    });
    
    /* SNS 콘텐츠에 utb 클래스이면 유튜브 아이콘 추가 */
    $(".jumpbox_lst li").each(function(){
       if($(this).hasClass("utb")){
           $(this).find("a").append("<i class='xi-youtube'></i>");
       } else if($(this).hasClass("insta")){
           $(this).find("a").append("<i class='xi-instagram'></i>");
       }
    });
    
    /* SNS 콘텐츠 슬라이딩 */ 
    var ml = 0, cnt=0;
    var itv4 = setInterval(function(){ 
     ml = cnt*260;
     ani4(); 
     if(cnt>=3){
         cnt=0;
     } else {
         cnt++;
     }
    }, 2000);

    function ani4() {
     $(".jumpbox_lst").not(":animated").animate({"margin-left":-ml+"px"}, 500);
    }
});