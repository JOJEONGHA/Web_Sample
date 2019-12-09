$(function () {
    var container = $(".container"),
        view = $(".view"),
        button = $(".btn"),
        offset = $(".container").offset().;
    //    debugger;
    button.on('click', function () {
    container.css({
        'left': offset
    })
    offset = $(".container").offset();
    })
});


