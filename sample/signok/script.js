// video size controll
var video = $("video");

video.css({
    height : "100vh" - 500,
    width : 1500
})

// video text controll
var text = $(".main1 .video_wrapper .text");

text.fadeTo("slow",500).animate({
    fontSize : "8.75rem",
    opacity : 1
},"slow")

// main2 size
var main2 = $(".main2"),
    vh = $(window).height();

main2.css({
    height : vh - 102
})
