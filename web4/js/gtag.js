var eng = location.href.indexOf("/en/"); 
var device = util.isMobile() ? "m_":"w_"; // 디바이스
var lang = (eng > -1) ? "_en" : "_kr"; // 언어

/* [s] Google Analytics */
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-192231198-1');
/* [e] Google Analytics */

function click_tag(event,label_1,_this) {    
    var label_2 = $(_this).data("gtag");
    if(event == "depth1") { // 제품페이지 
        if(device == "m_") var depth1_txt = $(".gnb > li.on > a").text();
        else var depth1_txt = $(".gnb > li > a.on").text();

        gtag('event', 'button', { 'event_category': depth1_txt+lang,'event_label':device+depth1_txt+label_1+'_'+label_2} );
    } else {        
        if(label_1 == '') {
            gtag('event', 'button', { 'event_category': event+lang,'event_label':device+label_2} );
        } else {
            gtag('event', 'button', { 'event_category': event+lang,'event_label':device+label_1+'_'+label_2} );  
        }
    }
}
// 마크업 예시)
/*
onclick="click_tag('카테고리명', '라벨명', this)" data-gtag="라벨명 data"
onclick="click_tag('depth1', '라벨명', this)" data-gtag="라벨명 data"      // 제품 페이지
*/


$(window).on("load", function(){  
    // 공통 GNB메뉴
    $(".gnb > li > a").on("click", function(){        
        gtag('event', 'button', { 'event_category': "gnb"+lang,'event_label':device + $(this).text()} ); 
    });
    $(".gnb .depth2 a").on("click", function(){
        var depth1 = $(this).closest(".depth2").prev("a").text();
        gtag('event', 'button', { 'event_category': "gnb"+lang,'event_label':device + depth1 + "_" + $(this).text()} ); 
    });

    // 공통 전체메뉴
    $(".gnb_total .main_menu a").on("click", function(){ 
        gtag('event', 'button', { 'event_category': "gnbfull"+lang,'event_label':device + $(this).text()} ); 
    });
    $(".gnb_total .sub_menu_type1 li a").on("click", function(){ 
        var depth1 = $(this).closest("ul").prev(".main_menu").find("a").text();
        gtag('event', 'button', { 'event_category': "gnbfull"+lang,'event_label':device + depth1 + "_" + $(this).text()} ); 
    });
     $(".gnb_total .sub_menu_type2 li a").on("click", function(){ 
        var depth1 = $(this).closest("ul").closest("li").find(".main_menu a").text();
        gtag('event', 'button', { 'event_category': "gnbfull"+lang,'event_label':device + depth1 + "_" + $(this).text()} ); 
    });

    
});