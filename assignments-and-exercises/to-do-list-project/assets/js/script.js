//check when click on to do list
$("li").on("click", function () {
    $(this).toggleClass("completed");
})