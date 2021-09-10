$('.select-field .dropdown').focusin(function(){
    $(this).parent().addClass('has-value');
});

$('.select-field .dropdown').blur(function(){
    if(!$(this).val().length > 0) {
        $(this).parent().removeClass('has-value');
    }
});