$(function(){
    var mong = {};
    mong.countryArea = $("section.main > a");

    mong.countryArea.hover(function(){
        // Mouse Enter
        if($(this) != mong.countryArea){
            mong.countryArea.addClass("off");
        }
        $(this).addClass("on");
        $(this).removeClass("off");
    },function(){
        // Mouse Leave
        mong.countryArea.removeClass("off");
        mong.countryArea.removeClass("on");
    }) 
})