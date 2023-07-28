$(function(){
// 인트로 페이지
$(window).on('load',function(){
    setInterval(function(){
        $(".intro").addClass("move",1500)
    },2000);
})

$(".main_headwrap").delay(500).animate({ opacity: 1},
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

  /*메뉴*/
  $(document).mouseup(function(e){
    if($(".flower-gnb").has(e.target).length === 0){//".header-gnb"영역외 다른 곳을 클릭할 경우 팝업창 혹은 창이 사라지게 만들어주는 함수
       $(".menu-btn, .flower-gnb").removeClass("active")
}

$(".menuimg .menu-btn").click(function(){
    $(".menu-btn, .flower-gnb").toggleClass("active")
})
})

$(".gnb-item").click(function(){
    $(".flower-gnb").removeClass("active")
})

/*작업물 애니*/
$(window).scroll(function () {
    $(".box_work").each(function (i) {
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_object) {
        $(this).animate({ opacity: "1","margin-left":"0" }, 1000);
      }
    });
  });

  



  

})




