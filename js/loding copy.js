$(function(){
// 인트로 페이지
$(window).on('load',function(){
    setInterval(function(){
        $(".intro").addClass("move",1000)
    },3000);
})

$(".main_headwrap").delay(3800).animate({ opacity: 1},
    function(){
        $(".main_headline").delay(800).animate({ opacity: 1})
    }      
)

$(window).resize(function(){
    if ( window.innerWidth < 780 ) {
        $(".main_headwrap").css({
            "width": "350px",
            "height": "350px"
        })
    } else {
        $(".main_headwrap").css({
            "width": "450px",
            "height": "450px"
        })
    };
});

    /*작업물 바꾸기*/

//     $(".thumbs em").hide();
//     $(".thumbs a").click(function(){
//         $("#caption").remove();
//         $("#largeImg img").attr("src",$(this).attr("href"));
        
//         const msg=$(this).next("em").text();
//         $("#largeImg").append("<div id='caption'></div>");
//         $("#largeImg #caption").text(msg);

//         const posy = $("#largeImg #caption").height()+25;
//         $("#largeImg #caption").animate({top:"-="+posy+"px"},500);
//         return false;
//     });

//     $(window).scroll(function () {
//     $(".last2").each(function (i) {
//       var bottom_of_object1 = $(this).offset().top + $(this).outerHeight();
//       var bottom_of_window1 = $(window).scrollTop() + $(window).height();

//       if (bottom_of_window1 > bottom_of_object1) {
//         setTimeout(function () {
//           $(".last2").animate({ opacity: "1" });
//         }, 1000);
//       }
//     });
//   });
$("div").slice(0, 1).show(); // 초기갯수
$("#load").click(function(e){ // 클릭시 more
    e.preventDefault();
    $("div:hidden").slice(0, 1).show(); // 클릭시 more 갯수 지저정
    if($("div:hidden").length == 0){ // 컨텐츠 남아있는지 확인
        alert("게시물의 끝입니다."); // 컨텐츠 없을시 alert 창 띄우기 
    }
});

})
