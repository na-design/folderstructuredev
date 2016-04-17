function setScroll(){
  var scroll = $(window).scrollTop();
  if(scroll > 50){
    $('.hotel-nav').addClass('scrolled');
  } else {
    $('.hotel-nav').removeClass('scrolled');

  }
}

$(document).ready(function(){

// INNER BANNER
// ---------------------------------------------------------------------------------------------------  */
$( ".owl-next" ).addClass( "arrow next" );
$('#slides').superslides({
  animation: 'fade',
  play: 5000,
  inherit_height_from:".wr-banner",
  pagination:false
});

// STICKY NAV
// ---------------------------------------------------------------------------------------------------  */
$(".hotel-nav-wrapper").stick_in_parent();

// INNER MENU
// ---------------------------------------------------------------------------------------------------  */
$(' #toggle-inner-nav').click(function() {
  $('.inner .left-menu').toggleClass('open');
  $('.left-menu-trigger .button_container').toggleClass('active');
  $('.left-menu-trigger .mobile-nav-btn').toggleClass('activated');
  $('.menu-overlay-banner').toggleClass('actived');
});

// INNER MENU MOBILE
// ---------------------------------------------------------------------------------------------------  */
$(' #toggle-inner-mobile').click(function() {
  $('.overlay').addClass('open');
});

$('#close-menu').click(function() {
  $('.overlay').removeClass('open');
});

// INNER HOTELS OVERLAY
// ---------------------------------------------------------------------------------------------------  */
$(' .inner-hotel-click').click(function() {
  $('.hotel-overlay').addClass('h-o-open');
});

$('.h-o-closeover').click(function() {
  $('.hotel-overlay').removeClass('h-o-open');
});

// MOBILE MENU SCROLL
// ---------------------------------------------------------------------------------------------------  */
$(".overlay").mCustomScrollbar(
{
  theme:"minimal"
});

// MAIN GALLERY
// ---------------------------------------------------------------------------------------------------  */
$(".fancybox").fancybox({
  helpers: {
    overlay: {
      locked: false
    }
  },
  fitToView: true,
  padding : 0,
  arrows: true,
  margin: 0,
  tpl : {
    closeBtn : '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"><i class="fa fa-times"></i></span></a>',
    next     : '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span><i class="fa fa-angle-right"></i></span></a>',
    prev     : '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span><i class="fa fa-angle-left"></i></span></a>'
  }
});


// ROOMS CAROUSEL
// ---------------------------------------------------------------------------------------------------  */
var rooms =    $('#rooms-carousel').owlCarousel({
  loop:true,
  dots:true,
  responsiveClass:true,
  items:1,
  autoplay:false,
  margin:25,
  nav:false,
  responsive:{
    0:{
      nav:false
    },
    580:{
      nav:false
    }
  } 
});

// YOUR DUBLIN CAROUSEL
// ---------------------------------------------------------------------------------------------------  */
$('#yourdublin').owlCarousel({
  loop:true,
  dots:false,
  responsiveClass:true,
  autoplay:false,
  nav:false,
  item:3
});

// SCROLL BARS
// ---------------------------------------------------------------------------------------------------  */
$(".dur-yr-stay").mCustomScrollbar(
{
  theme:"dark"
});
$(".rooms-carousel-text").mCustomScrollbar(
{
  theme:"dark"
});

// SCROLL BARS ON CHANGE IN CAROUSEL
// ---------------------------------------------------------------------------------------------------  */
rooms.on('changed.owl.carousel', function(event) {
  console.log("test");
  $(".rooms-carousel-text").mCustomScrollbar(
  {
    theme:"dark"
  });
});


// ADDING CLASS FOR CSS ARROWS
// ---------------------------------------------------------------------------------------------------  */

$( ".owl-next" ).addClass( "arrow next" );
$( ".owl-prev" ).addClass( "arrow prev" );

// TOOLTIPS ON ICONS
// ---------------------------------------------------------------------------------------------------  */
$('.tooltips').tooltipster({
  theme: 'tooltipster-noir',
  position: 'bottom',
  offsetY: '-10'
});


});//DOCUMENT READY

// SCROLL FUNCTION
// ---------------------------------------------------------------------------------------------------  */
$(window).scroll(function(){
  setScroll();
});