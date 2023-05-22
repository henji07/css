$(document).ready(function() {
    $(window).endlessScroll({
        inflowPixels: 300,
        callback: function() {
            var $img = $('#images li:nth-last-child(5)').clone();
            $('#images').append($img);
        }
    });
});
