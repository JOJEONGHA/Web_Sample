<<<<<<< HEAD
var left = $(".left"),
    right = $(".right"),
    box = $(".box").offset(),
    count = 0;

$(document).ready(function () {
    $(".right").on('click',function(){
        $('.box').css({
            'bottom': '980px'
        })
=======
var COUNT = 0,
    SIZE = $('.image').length,
    left = $('#left'),
    right = $('#right'),
    container = $('.container'),
    view = $('.view'),
    start,stop;

// Function ----------------------------------------
var leftF = function() {
    COUNT--;
    if (COUNT < 0) {
        COUNT = SIZE - 1;
    }
    container.animate({
        "left": -500 * COUNT
    })
}

var rightF = function() {
    COUNT++;
    if (COUNT == SIZE) {
        COUNT = 0;
    }

    container.animate({
        "left": -500 * COUNT
>>>>>>> aeb82a1c314bda2867bbf21701a49f065132ac1e
    })
}
start = function(){
    stop = setInterval(rightF, 1000);
}

// Opertaion --------------------------------------------
start();
right.on('click', function () {
    rightF();
})

left.on('click', function () {
    leftF();
})

view.mouseenter(function(){
    clearInterval(stop);
})

view.mouseleave(function(){
    start();
})





