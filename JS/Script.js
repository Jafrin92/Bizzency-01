// menu
let mainMenu = $('.main_menu').offset().top;

$(window).scroll(function(){
    let ScrollWin = $(window).scrollTop();
    if(ScrollWin> mainMenu){
        $('.main_menu').addClass('menu_fixed');
    }else{
        $('.main_menu').removeClass('menu_fixed');
    }
    //scroll
     if(ScrollWin > 4100){
        $('.scroll').fadeIn(1000);
    }else{
        $('.scroll').fadeOut(1000);
    }
});
//scroll
    $('.scroll').on("click",function(){
        $('body,html').animate({
        scrollTop: 0
    },500);
    });
   
//Search
   $('.search').click(function(){
       $('.pop_up').show();
   });


   $('.close').click(function(){
       $('.pop_up').hide();
   });

