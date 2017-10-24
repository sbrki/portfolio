var $ = require("jquery");

export  function intro_animation() {
    /* Hide stuff */
    $("h1").css("display","none");
    $(".link").css("display","none");

    /* Display stuff */
    $("h1").slideDown();
    setTimeout(()=>{$("h1").addClass("sliding-middle-out-hovered");},300);
    var time = 300;
    $(".link").each(function(){
        time = time + 100;
        setTimeout(()=>{
            $(this).fadeIn();
        },time);
    });
};


export function intro_left_to_right(){
    $("h1").css("display","none");
    $("h1").fadeIn();
    setTimeout(()=>{$("h1").addClass("sliding-left-right-hovered");},200)
};


export function fade_in(){
    $(".fade-in").css("display","none");
    var time = 400;
    $(".fade-in").each(function(){
        time = time + 100;
        setTimeout(()=>{
            $(this).fadeIn(600);
        },time);
    });
};
