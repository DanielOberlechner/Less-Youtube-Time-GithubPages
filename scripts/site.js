$(document).ready(function() {
    document.getElementById('link2').addEventListener('click', function(){
        $(window).scrollTo($('#main'), 500);
    })
    document.getElementById('link3').addEventListener('click', function(){
        $(window).scrollTo($('#functions'), 1000);
    })
    document.getElementById('link4').addEventListener('click', function(){
        $(window).scrollTo($('#contact'), 1500);
    })
})

// document.addEventListener("DOMContentLoaded", function() {
//     window.onscroll = function() {
//         console.log("we're scrolling");
//         //var scroller = document.getElementById('body');
//         var scroller = window;
//         var sh = scroller.offsetHeight;
//         var indicator = document.getElementById('indicator');
//         var ww = document.documentElement.offsetWidth;
//         var wh = document.documentElement.offsetHeight;
//         var y = window.pageYOffset + wh;
//         var idHeight = (wh - (((sh - wh)- (y - wh)) * (wh / (sh - wh))));
//         indicator.style.height = idHeight + "px";
//         if(y >= sh) {
//             console.log("Set go CRAZY")
//             document.body.setAttribute('class', 'gocrazy');
//         } else {
//             console.log("Remove GOCrazy...")
//             document.body.removeAttribute('class');
//         }
//     }
//   }, false);