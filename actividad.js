$(".dropdown-header").click(function(){
    toggleElement($(".dropdown-body"));
});

$(".dropdown-body a").click(function(){
    toggleElement($(".dropdown-chocolates"));
});

$(".dropdown-chocolates a").each(function(){
    ($(this).css("display","block"));
    ($(this).css("text-decoration","none"));
});

function toggleElement(element){
    element.toggle();
};

$(".button").click(function(){
    $(".div-modal").css("display","block");
    $(".overlay").css("display","block");
});

$(".close-modal, .overlay").click(function(){
    $(".div-modal").hide();
    $(".overlay").hide();
});


