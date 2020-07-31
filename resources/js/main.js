$ = require('jquery');
window.$ = window.jQuery = require('jquery');
require('slick-carousel');
require('fancybox')($);
require('waypoints/lib/jquery.waypoints');


// Плавный scroll
$(document).ready(function(){
    $("a[href*='#']").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
    });
});
// end scroll

// Slider
var $imagesSlider = $(".gallery-slider .gallery-slider__images"),
    $thumbnailsSlider = $(".gallery-slider__thumbnails");
$imagesSlider.slick({
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    arrows: false,
    fade: true,
    draggable: false,
    asNavFor: ".gallery-slider__thumbnails",
    responsive: [
        {
            breakpoint: 768,
            settings: {
                adaptiveHeight: true
            }
        },

    ]
});
$thumbnailsSlider.slick({
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    arrows: true,
    centerMode: true,
    draggable: false,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    infinite: true,
    asNavFor: ".gallery-slider__images",
});
// End Slider


// FancyBox
$('.fancybox').fancybox({
    padding : 0,
    openEffect  : 'elastic'
});
// End FancyBox


// Animate with Waypoint

$('#commercial').waypoint(function() {
    $('.ls-anim').addClass('animate__animated animate__fadeInLeft');
    $('.rs-anim').addClass('animate__animated animate__fadeInRight');
    $('.ls-anim, .rs-anim').css('visibility','visible');
},{offset:'75%'});

$('#experience').waypoint(function() {
    $('.fadeT, .fadeL, .leftS, .rightS, .leftH, .formM').css('visibility','visible');
    $('.fadeL').addClass('animate__animated animate__slideInLeft');
    $('.fadeT').addClass('animate__animated animate__slideInDown');
    $('.leftS').addClass('animate__animated animate__fadeInBottomLeft animate__delay-0.5s');
    $('.rightS').addClass('animate__animated animate__fadeInBottomRight animate__delay-0.5s');
    $('.leftH').addClass('animate__animated animate__bounceInLeft animate__delay-1s');
    $('.formM').addClass('animate__animated animate__flipInX animate__delay-1s');
},{offset:'70%'});

$('#purchase').waypoint(function() {
    $('.purchT,.n1,.n2,.n3,.n4,.n5,.n6').css('visibility','visible');
    $('.purchT').addClass('animate__animated animate__slideInDown');
    $('.n1').addClass('animate__animated animate__slideInLeft');
    $('.n2').addClass('animate__animated animate__slideInLeft');
    $('.n3').addClass('animate__animated animate__slideInLeft');
    $('.n4').addClass('animate__animated animate__slideInLeft');
    $('.n5').addClass('animate__animated animate__slideInLeft');
    $('.n6').addClass('animate__animated animate__slideInLeft');

},{offset:'60%'});


$('#team').waypoint(function() {
    $('#ourTeam,.c1,.c2,.c3,.c4').css('visibility','visible');
    $('#ourTeam').addClass('animate__animated animate__slideInDown');
    $('.c1').addClass('animate__animated animate__fadeInDown');
    $('.c2').addClass('animate__animated animate__fadeInRight');
    $('.c3').addClass('animate__animated animate__fadeInLeft');
    $('.c4').addClass('animate__animated animate__fadeInUp');

},{offset:'60%'});

$('#service').waypoint(function() {
    $('#service,.cardLot,.textLot,.btnLot').css('visibility','visible');
    $('#service').addClass('animate__animated animate__slideInUp');
    $('.cardLot').addClass('animate__animated animate__zoomInLeft');
    $('.textLot').addClass('animate__animated animate__fadeInRightBig');
    $('.btnLot').addClass('animate__animated animate__rubberBand');
},{offset:'50%'});

$('#working').waypoint(function() {
    $('.cliT,.cli1,.cli2,.cli3,.cli4').css('visibility','visible');
    $('.cliT').addClass('animate__animated animate__slideInDown');
    $('.cli1').addClass('animate__animated animate__zoomInLeft');
    $('.cli2').addClass('animate__animated animate__zoomInLeft');
    $('.cli3').addClass('animate__animated animate__zoomInRight');
    $('.cli4').addClass('animate__animated animate__zoomInRight');
},{offset:'50%'});

$('#weWorking').waypoint(function() {
    $('#weWorking,.nw1,.nw2,.nw3,.nw4,.nw5').css('visibility','visible');
    $('#weWorking').addClass('animate__animated animate__slideInUp');
    $('.nw1').addClass('animate__animated animate__zoomInLeft');
    $('.nw2').addClass('animate__animated animate__zoomInLeft');
    $('.nw3').addClass('animate__animated animate__zoomInRight');
    $('.nw4').addClass('animate__animated animate__zoomInRight');
    $('.nw5').addClass('animate__animated animate__zoomInRight');
},{offset:'50%'});

$('#price').waypoint(function() {
    $('.priceT,.pri1,.pri2,.pri3,.pri4,.priA').css('visibility','visible');
    $('.priceT').addClass('animate__animated animate__slideInUp');
    $('.pri1').addClass('animate__animated animate__fadeInBottomLeft');
    $('.pri2').addClass('animate__animated animate__fadeInBottomLeft');
    $('.pri3').addClass('animate__animated animate__fadeInBottomLeft');
    $('.pri4').addClass('animate__animated animate__fadeInBottomLeft');
    $('.priA').addClass('animate__animated animate__zoomInRight');
},{offset:'50%'});

$('.priceSend').waypoint(function() {
    $('.priceL,.formR').css('visibility','visible');
    $('.priceL').addClass('animate__animated animate__bounceInLeft');
    $('.formR').addClass('animate__animated animate__flipInX');

},{offset:'40%'});

$('#events').waypoint(function() {
    $('.eventA,.eventT').css('visibility','visible');
    $('.eventT').addClass('animate__animated animate__slideInUp');
    $('.eventA').addClass('animate__animated animate__backInUp');

},{offset:'40%'});

$('#contacts').waypoint(function() {
    $('.conT,.conM').css('visibility','visible');
    $('.conT').addClass('animate__animated animate__fadeInRightBig');
    $('.conM').addClass('animate__animated animate__fadeInTopLeft');

},{offset:'40%'});

// End animate