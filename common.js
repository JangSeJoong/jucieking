$(function () {
    AOS.init();

    $('.ham').on('click', function () {
        $('.gnb').toggleClass('on')
    })

    $('.gnb>ul>li').on('click', function () {
        if ($(this).attr('class') != 'on') {
            $('.gnb>ul>li').children('.dep2').slideUp()
            $(this).children('.dep2').slideToggle()
            $('.gnb>ul>li').removeClass('on')
            $(this).addClass('on')
        } else {
            $(this).children('.dep2').slideToggle()
            $(this).removeClass('on')
        }
    })


    var intv = setInterval(function () {
        nextAni();
    }, 3000);

    
    function nextAni() {
        $('.p_list>li>div').removeClass('on');
        $('.p_list').rotate({
            angle: 0,
            animateTo: -30,
            callback: function () {
                $('.p_list>li').eq(0).appendTo('.p_list');
                $(this).css({
                    transform: 'rotate(0deg)'
                });
               
                $('.p_list>li:first-child>div').addClass('on');
                
            }
        })
    }

    var swiper = new Swiper(".sec4_2_inner", {
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        },
      });
})