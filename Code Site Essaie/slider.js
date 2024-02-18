$(document).ready(function () {

    // On compte le nombre d'images
    var count = $('#slider ul li').length;

    // On affiche la 1ère image
    $('#slider ul li:eq(0)').show().addClass('active');
    $('#legend').append($('#slider ul li.active img').attr('alt'));

    // Image suivante
    $('#slider ul').swipeleft(function () {
        var current = $('#slider ul li.active').index();
        var next = current + 1;
        $('#slider ul li').hide().removeClass('active');
        if (current == (count - 1)) {
            $('#slider ul li:eq(0)').show().addClass('active');
        } else {
            $('#slider ul li:eq(' + next + ')').show().addClass('active');
        }
        $('#legend').html('').append($('#slider ul li.active img').attr('alt'));
    });

    // Image précédente
    $('#slider ul').swiperight(function () {
        var current = $('#slider ul li.active').index();
        var prev = current - 1;
        $('#slider ul li').hide().removeClass('active');
        if (current < count) {
            $('#slider ul li:eq(' + prev + ')').show().addClass('active');
        }
        $('#legend').html('').append($('#slider ul li.active img').attr('alt'));
    });

});