/*eslint-env es6*/ 

$(document).ready(function () {
    
    /* header animateion */
    $('.title h1').addClass('show')
    $('.header nav ul').addClass('show')

    $(window).scroll(function () {

        var win_t = $(this).scrollTop()

        var main_t = $('main').offset().top

        if (win_t >= main_t) {
            $('.header nav').css({
                position: 'fixed',
                left: '50%',
                top: 0,
                width: '100%',
                transform: 'translate(-50%)',
                backgroundColor: 'rgba(0,0,0,0.5)',
            })
            $('.header nav ul li').css({
                padding: '15px',
            })
        } else if (win_t <= main_t) {
            $('.header nav').css({
                position: 'relative',
                left: 'auto',
                top: 'auto',
                width: '100%',
                transform: 'none',
                backgroundColor: 'transparent'
            })
            $('.header nav ul li').css({
                padding: '25px 15px 25px 15px',
            })
        }

        /* animation */
        var history_t = $('#history').offset().top
        var about_t = $('#about_me').offset().top
        var work_t = $('#my_work').offset().top
        var win_h = $(window).height() / 3
        

        if (win_t >= history_t - win_h) {
            $('.h_box').addClass('show')
        }
        if (win_t >= about_t - win_h) {
            $('.my_info').addClass('show')
            $('.my_img').addClass('show')
            $('.my_details').addClass('show')
        }
        if(win_t >= work_t - win_h){
            $('#my_work ul').addClass('show')
            $('#my_work .work_item').addClass('show')
        }
    })
    
    /* skillbar */
    $(window).scroll(function(){
        var win_t = $(window).scrollTop()
        var s_top = $('.skill_container').offset().top
                
        if(win_t > s_top - 460){
            $('.bar1 .progress').animate({
                width:'90%',
            })
            $('.bar2 .progress').animate({
                width:'80%',
            })
            $('.bar3 .progress').animate({
                width:'75%',
            })
            $('.bar4 .progress').animate({
                width:'70%',
            })
            
            $('.bar span').css('opacity','1')
        
        }
        
    })
    
    
    /* 상위메뉴 클릭시 section 이동 */

    $('.header nav ul li').click(function(){
        var idx = $(this).index()
        console.log(idx)
        var header_top = $('header').offset().top
        var history_top = $('#history').offset().top
        var about_me_top = $('#about_me').offset().top
        var my_work = $('#my_work').offset().top
        
        if(idx == 0){
            $('html,body').stop().animate({
                scrollTop:header_top
            })
        }if(idx == 1){
            $('html,body').stop().animate({
                scrollTop:history_top +1
            })
        }
        if(idx == 2){
             $('html,body').stop().animate({
                scrollTop:about_me_top +1
            })
        }
        if(idx == 3){
            $('html,body').stop().animate({
                scrollTop:my_work + 1
            })
        }
    })
    
    $(window).scroll(function(){
        var win_t = $(window).scrollTop()
        var header_top = $('header').offset().top
        var history_top = $('#history').offset().top
        var about_me_top = $('#about_me').offset().top
        var my_work = $('#my_work').offset().top
        
        if(win_t >= header_top){
           $('.header nav ul li').removeClass('active')
           $('.header nav ul li').eq(0).addClass('active')
        }
        if(win_t >= history_top){
            $('.header nav ul li').removeClass('active')
            $('.header nav ul li').eq(1).addClass('active')
        }
        if(win_t >= about_me_top){
            $('.header nav ul li').removeClass('active')
            $('.header nav ul li').eq(2).addClass('active')
        }
        if(win_t >= my_work){
            $('.header nav ul li').removeClass('active')
            $('.header nav ul li').eq(3).addClass('active')
        }
    })
    
    
    /* work 탭클릭 */
    
    
    $('#my_work ul li').click(function(){
        var idx = $(this).index()
        var dataV = $(this).attr('data-filter')
    
        
        $('#my_work ul li').removeClass('active')
        $('#my_work ul li').eq(idx).addClass('active')
        
        if(dataV == 'all'){
            $('.work_project').show(1000)
        }else{
            $('.work_project').not('.'+dataV).hide(1000)
            $('.work_project').filter('.'+dataV).show(1000)
        }
    })
    
})

