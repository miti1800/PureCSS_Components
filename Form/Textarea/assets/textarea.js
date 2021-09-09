$('.main-div textarea').focusin(function(){
    $(this).parent().addClass('has-value');
});

$('.main-div textarea').blur(function(){
    if(!$(this).val().length > 0) {
        $(this).parent().removeClass('has-value');
    }
});
