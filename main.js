jQuery(function($){'use strict';(function(){$(window).on('load',function(){$(".outslider_loading").fadeOut("slow");$(".loadingio-spinner-ripple-kb352940pw").fadeOut("slow")})}());(function(){$(window).on('scroll',function(){if($(window).scrollTop()>10){$(".header-area").addClass("ds_padding")}else{$(".header-area").removeClass("ds_padding")}
var topHeight2=$(".v3-header-top").outerHeight();var windowScroll2=$(window).scrollTop();if(windowScroll2>topHeight2){$(".v3-header nav").addClass("navbar-fixed-top")}else{$(".v3-header nav").removeClass("navbar-fixed-top")}
if($(window).scrollTop()>topHeight2){$(".v3-header-bg").addClass("ds_padding")}else{$(".v3-header-bg").removeClass("ds_padding")}
$(".progress_cont").each(function(){var base=$(this);var windowHeight=$(window).height();var itemPos=base.offset().top;var scrollpos=$(window).scrollTop()+windowHeight-100;if(itemPos<=scrollpos){var auptcoun=base.find(".progress-bar").attr("aria-valuenow");base.find(".progress-bar").css({"width":auptcoun+"%"});var str=base.find(".skill>span").text();var res=str.replace("%","");if(res==0){$({countNumber:0}).animate({countNumber:auptcoun},{duration:4000,easing:'linear',step:function(){base.find(".skill>span").text(Math.ceil(this.countNumber)+"%")}})}}})})}());$("#menuzord").menuzord();$(".filter-search").click(function(){$(".full-page-search").addClass("open-search")});$(".sr-overlay").click(function(){$(".full-page-search").removeClass("open-search")});$(".log-in-search").click(function(){$(".log-in-up").addClass("open-log-in")});$(".remove-log-in").click(function(){$(".log-in-up").removeClass("open-log-in")});$('.right_menu').click(function(){$('.right-full-menu').addClass('menu_show')});$('.close_ic').click(function(){$('.right-full-menu').removeClass('menu_show')});$(".consult-search").click(function(){$(".consult-up").addClass("open-consult")});$(".remove-consult").click(function(){$(".consult-up").removeClass("open-consult")});var help_slider=$("#help-slider");help_slider.owlCarousel({loop:!0,margin:10,nav:!1,responsive:{0:{items:1},400:{items:1},768:{items:1},1200:{items:1}}});var client_slider=$("#client-slider");client_slider.owlCarousel({loop:!0,margin:0,nav:!1,responsive:{0:{items:2},400:{items:2},768:{items:4},1200:{items:6}}});var client_bg_slider=$("#client-bg-slider");client_bg_slider.owlCarousel({loop:!0,margin:0,nav:!1,dots:!1,responsive:{0:{items:2},400:{items:2},768:{items:4},1200:{items:6}}});var client_bg_2_slider=$("#client-bg-2-slider");client_bg_2_slider.owlCarousel({loop:!0,margin:30,nav:!1,responsive:{0:{items:1},400:{items:1},768:{items:2},1200:{items:3}}});var solution_slider=$("#solution-slider");solution_slider.owlCarousel({loop:!0,margin:30,nav:!1,responsive:{0:{items:1},400:{items:1},768:{items:2},1200:{items:3}}});var testimonial_slider=$("#testimonial-slider");testimonial_slider.owlCarousel({loop:!0,margin:30,nav:!0,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],responsive:{0:{items:1},400:{items:1},768:{items:1},1200:{items:1}}});var testimonial_slider2=$("#testimonial-slider-2");testimonial_slider2.owlCarousel({loop:!0,margin:30,nav:!0,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],responsive:{0:{items:1},400:{items:1},768:{items:1},1200:{items:1}}});var testimonial_slider3=$("#testimonial-slider-3");testimonial_slider3.owlCarousel({loop:!0,margin:30,nav:!0,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],responsive:{0:{items:1},400:{items:1},768:{items:1},1200:{items:1}}});var intro_slider=$("#intro-slider");intro_slider.owlCarousel({loop:!0,margin:0,dots:!1,nav:!0,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],responsive:{0:{items:1},400:{items:1},768:{items:1},1200:{items:1}}});var vertical_slider=$("#vertical-slider");vertical_slider.owlCarousel({loop:!0,margin:0,dots:!1,nav:!0,animateOut:'slideOutUp',animateIn:'slideInUp',navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],responsive:{0:{items:1},400:{items:1},768:{items:1},1200:{items:1}}});var intro_slider=$("#about-me-slider");intro_slider.owlCarousel({loop:!0,margin:15,nav:!1,responsive:{0:{items:1},400:{items:1},768:{items:2},1200:{items:2}}});$('.counter').counterUp({delay:10,time:1000});var endDate=$('.tk-countdown').data('time');$('.tk-countdown .row').countdown({date:endDate,render:function(data){$(this.el).html('<div><div class="days"><span>'+this.leadingZeros(data.days,2)+'</span><span>days</span></div><div class="hours"><span>'+this.leadingZeros(data.hours,2)+'</span><span>hours</span></div></div><div class="tk-countdown-ms"><div class="minutes"><span>'+this.leadingZeros(data.min,2)+'</span><span>minutes</span></div><div class="seconds"><span>'+this.leadingZeros(data.sec,2)+'</span><span>seconds</span></div></div>')}});$("#Name").keyup(function(){"use strict";var value=$(this).val();if(value.length>1){$(this).parent().find(".error_message").remove();$(this).css({"border-bottom":"2px solid rgba #464747"})}else{$(this).parent().find(".error_message").remove();$(this).parent().append("<div class='error_message'>Name value should be at least 2</div>")}});$("#Email").keyup(function(){"use strict";var value=$(this).val();var testEmail=/^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;if(testEmail.test(value)){$(this).parent().find(".error_message").remove();$(this).css({"border-bottom":"2px solid rgba #464747"})}else{$(this).parent().find(".error_message").remove();$(this).parent().append("<div class='error_message'>Please entire a valid email. </div>")}});$("#contact_submit").click(function(){"use strict";var nameValue=$("#Name").val();if(!nameValue.length){$("#Name").css({"border-bottom":"2px solid red"});$("#Name").parent().find(".error_message").remove();$("#Name").parent().append("<div class='error_message'>Name is required</div>");return!1}
if(nameValue.length<1){$("#Name").css({"border-bottom":"2px solid red"});$("#Name").parent().find(".error_message").remove();$("#Name").parent().append("<div class='error_message'>Name value should be at least 2</div>").show();return!1}
var emailValue=$("#Email").val();var testEmail=/^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;if(!emailValue){$("#Email").css({"border-bottom":"2px solid red"});$("#Email").parent().find(".error_message").remove();$("#Email").parent().append("<div class='error_message'>Email is required</div>").show();return!1}
if(!testEmail.test(emailValue)){$("#Email").css({"border-bottom":"2px solid red"});$("#Email").parent().find(".error_message").remove();$("#Email").parent().append("<div class='error_message'>Please entire a valid email.</div>").show();return!1}
var subjectValue=$("#Subject").val();var phoneValue=$("#Phone").val();var messageValue=$("#Message").val();if(nameValue&&emailValue){$(".feedback_box").slideDown();$.ajax({url:'mail/mail.php',data:{name:nameValue,email:emailValue,phone:phoneValue,subject:subjectValue,message:messageValue},type:'POST',success:function(result){"use strict";$(".show_result").append("<div class='result_message'>"+result+"</div>");$(".result_message").slideDown();$("#Name").val("");$("#Email").val("");$("#Phone").val("");$("#Subject").val("");$("#Message").val("")}})}
return!1});$("#second").bootFolio({bfLayout:"bflayhover",bfFullWidth:"full-width",bfHover:"bfhoverCrafty",bfAnimation:"scale",bfSpace:"20",bfAniDuration:500,bfCaptioncolor:"rgba(0, 0, 0, 0)",bfTextcolor:"#ffffff",bfTextalign:"center",bfNavalign:"center"});$('.image-link').magnificPopup({type:'image'});$('.bxslider').bxSlider({mode:'vertical',slideMargin:0,nextText:'<i class="fa fa-angle-right"></i>',prevText:'<i class="fa fa-angle-left"></i>'});var wow=new WOW({boxClass:'wow',animateClass:'animated',offset:0,mobile:!0,live:!0,callback:function(box){},scrollContainer:null});wow.init();$(function(){$("#slider-range").slider({range:!0,min:0,max:300,values:[50,200],slide:function(event,ui){$("#amount").val("$"+ui.values[0]+" - $"+ui.values[1])}});$("#amount").val("$"+$("#slider-range").slider("values",0)+" - $"+$("#slider-range").slider("values",1))});(function($){$('.spinner .btn:last-of-type').on('click',function(){$('.spinner input').val(parseInt($('.spinner input').val(),10)+1)});$('.spinner .btn:first-of-type').on('click',function(){$('.spinner input').val(parseInt($('.spinner input').val(),10)-1)})})(jQuery);(function($){$('.add-to-cart').on('click',function(){$('.add-to-cart-content').toggleClass("open-cart");return!1})})(jQuery)})