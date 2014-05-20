$(document).ready(function(){

    /* Annotation Score Stars */
    $.fn.stars = function() {
        return this.each(function(i,e){$(e).html($('<span/>').width($(e).text()*16));});
    };
    $('.stars').stars();

    $('#annotationscore > span.annotatequestion').hover(function() {
        $('#annotationscore > span.annotatehelp').css({'display': 'block'});
    }, function() {
        $('#annotationscore > span.annotatehelp').css({'display': 'none'});
    });

    /* Annotate Marked Up Text */
    $('.linkedspan').hover(function() {
        $(this).find('.linkedterms').css({'display': 'block'});
    }, function() {
        $(this).find('.linkedterms').css({'display': 'none'});
    });

});
