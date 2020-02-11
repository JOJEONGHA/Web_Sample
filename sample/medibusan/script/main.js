$(function(){
    var jh = {};
    jh.headerMenu = $("header .left_header .menuset");

    jh.headerMenu.mouseover(function () { 
        console.log("insert");
        $("header nav").removeClass("off");
    }).mouseout(function(){
        $("header nav").addClass("off");
    });     
})