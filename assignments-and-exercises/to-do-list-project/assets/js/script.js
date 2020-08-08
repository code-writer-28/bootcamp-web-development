//check when click on to do list
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

//delete the todo by fading out the todos
$("ul").on("click", "li span", function (event) {
    $(this).parent().fadeOut(1000, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

//input the todos 
$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        //take the value of input into the variable
        var todoText = $(this).val();
        $(this).val("");
        //append the value of var into ul
        $("ul").append("<li><span><i class='fas fa-trash'></i></span>" + todoText + "</li>");
    }
});

//on click pencil icon
$(".fa-pencil-alt").on("click", function () {
    $("input").fadeToggle();
})