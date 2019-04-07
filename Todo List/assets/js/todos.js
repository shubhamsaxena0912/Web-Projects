$("ul").on("click", "li", function () {
   $(this).toggleClass("cutTodo");
});

$("ul").on("mouseover", "li", function () {
    $(this).children().removeClass("hide");
});

$("h1").on("click", "i" , function () {
    console.log("i is clicked");
    $('input').fadeToggle();
});

$("ul").on("mouseout", "li", function () {
   $(this).children().addClass("hide");
});

$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(function () {
        $(this).remove();
    });
    //console.log('Span is clicked');
    event.stopPropagation();
});

$('input').keypress(function (event) {
    if(event.which == 13){
        var text = $('input').val();
        $('input').val("");
        $('ul').append("<li><span class='hide'><i class = 'fa fa-trash-alt'></i></span> " + text + "</li>");
    }
});