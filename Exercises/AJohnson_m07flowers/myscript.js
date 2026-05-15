// JavaScript Document
"use strict";
$(document).ready( () => {

/*The following interactions are based on scrolling*/
    $(window).scroll(function() {
        /*The keyword this looks at the 'current element'. We decide the current element with the following selectors.*/
        /*scrollTop looks at the position of the vertical scrollbar. If the position is above 100px run the next statements.*/
        if ($(this).scrollTop()> 100) {
            if (!$('.square').is('.run')) {
            $('.evanescere').fadeOut(1000); /*In one second anything with the evanescere class will fade out.*/
            $('.square').animate({width: "100%"}, 1000).addClass('run'); /*In one second everything with the class square will animate the width wider.*/
            }
        }
        else { /*If the scroll bar is above 100px run these statements*/
            if ($('.square').is('.run')) {
            $('.evanescere').fadeIn(1000); /*In one second anything with the evanescere class will fade in.*/
            $('.square').animate({width: "0px"}, 1000).removeClass('run'); /*In one second everything with the class square will animate the width smaller.*/
            }
        }

        if ($(this).scrollTop()> 200) {
        $('.content').fadeIn({queue: false, duration: 500}).animate({top: "0px"}, 1000); /*In 1/2 a second the content will fade in and in one second the content will move up.*/
        }
    }); /*END Scroll*/

/*
$('#peeka').mouseenter(() => {
    $('#peeka').animate({right: "90px"}, 500);
});
$('#peeka').mouseleave(() => {
    $('#peeka').animate({right: "0px"}, 500);
});
*/

$('#peeka').click(() => {
    if ($('#peeka').hasClass('open')) {
        $('#peeka').animate({right: "0px"}, 500).removeClass('open'); /*This will close the footer in 1/2 a second.*/
        $('#peeka').html('&lt;-- &copy; AJ');
    } else {
        $('#peeka').animate({right: "90px"}, 500).addClass('open'); /*This will open the footer in 1/2 a second.*/
        $('#peeka').html('&copy; AJ --&gt;');
    }
});

});