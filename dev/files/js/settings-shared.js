function setScroll(){
  var scroll = $(window).scrollTop();
  if(scroll > 90){
    $('.banner-buttons-mobile').addClass('scrolled');
  } else {
    $('.banner-buttons-mobile').removeClass('scrolled');

  }
}

$(document).ready(function(){

// DESKTOP LEFT MENU
// ---------------------------------------------------------------------------------------------------  */

$('#toggle').click(function() {
  $('.left-menu').toggleClass('open');
  $('.button_container').toggleClass('active');
  $('.menu-title').html($('.menu-title').text() == 'Menu' ? 'Close' : 'Menu');
  $('.menu-overlay-banner').toggleClass('actived');
});

// MOBILE LEFT MENU
// ---------------------------------------------------------------------------------------------------  */
$('#toggle-mob').click(function() {
  $('.left-menu').toggleClass('open');
  $('.mobile-nav-btn .button_container').toggleClass('active');
  $('.mobile-nav-btn').toggleClass('activated');
  $('.mobile-nav-btn .menu-title').html($('.menu-title').text() == 'Menu' ? 'Close' : 'Menu');
  $('.menu-overlay-banner').toggleClass('actived');
});

// PROPERTIES DROPDOWN ON MOBILE
// ---------------------------------------------------------------------------------------------------  */
$('.hotels-dropdowns p').click(function() {
  $('.hotels-dropdowns ul').slideToggle(400);
});
$('.apartments-dropdowns p').click(function() {
  $('.apartments-dropdowns ul').slideToggle(400);
});
$('.guesthouses-dropdowns p').click(function() {
  $('.guesthouses-dropdowns ul').slideToggle(400);
});

// OUR PROPERTIES DROPDOWN ON MOBILE ABOVE MAP
// ---------------------------------------------------------------------------------------------------  */
$('.js-mobile-hotel').click(function() {
  $('.prop-hotel').slideToggle(800);
  $('.js-mobile-hotel').toggleClass('zmdi-plus zmdi-minus', 600);
});
$('.js-mobile-apart').click(function() {
  $('.prop-apart').slideToggle(800);
  $('.js-mobile-apart').toggleClass('zmdi-plus zmdi-minus', 600);
});
$('.js-mobile-guest').click(function() {
  $('.prop-guest').slideToggle(800);
  $('.js-mobile-guest').toggleClass('zmdi-plus zmdi-minus', 600);
});

// CUSTOM SCROLLBARS
// ---------------------------------------------------------------------------------------------------  */
$(".left-menu-content").mCustomScrollbar(
{
  theme:"minimal"
});

// HOME OFFERS CAROUSEL
// ---------------------------------------------------------------------------------------------------  */
$('#home-offers').owlCarousel({
  loop:true,
  dots:true,
  responsiveClass:true,
  items:1,
  autoplay:false,
  margin:25,
  nav:true,
  responsive:{
    0:{
      nav:false
    },
    580:{
      nav:true
    }
  } 
});

// SPECIAL OFFERS CAROUSELS
// ---------------------------------------------------------------------------------------------------  */
var carousel = $('#sp-offer').owlCarousel({
  loop:true,
  dots:false,
  responsiveClass:true,
  autoplay:false,
  margin:30,
  responsive : {
// breakpoint from 0 up
0 : {
  items:1,
  nav:true 
},
// breakpoint from 480 up
760 : {
  items:2,
  nav:true,
  stagePadding:10
},
// breakpoint from 768 up
993 : {
  items:4,
  nav:true
}
}
});

// HIGHLIGHTS LAST CAROUSEL ELEMENT TO MAKE BIGGER ON DESKTOP
// ---------------------------------------------------------------------------------------------------  */
if(windowWidth > 1024){
  carousel.on('changed.owl.carousel', function(event) {
    var el = event.item.index;
    $('.owl-item').removeClass('featured-item');
    $('.owl-item').eq(el+10).addClass('featured-item');
  });
  $('.active').eq(5).addClass('featured-item'); 
}


// ADDS CLASS TO OWL NAVIGATION FOR CSS ARROWS
// ---------------------------------------------------------------------------------------------------  */
$( ".owl-next" ).addClass( "arrow next" );
$( ".owl-prev" ).addClass( "arrow prev" );

// INITIALISE SKROLLR
// ---------------------------------------------------------------------------------------------------  */
var windowWidth = $(window).width();
if(windowWidth > 1024){
  var s = skrollr.init();
}

// LEFT MENU ACCORDION
// ---------------------------------------------------------------------------------------------------  */
$(function(){
  $(".accordian h3").click(function(e){
    $($(e.target).find('.fa.fa-angle-right').toggleClass('open'));
    $(".accordian ul ul").slideUp();
    if ($(this).next().is(":hidden")){
      $(this).next().slideDown();
    }
  });
});

// INITIALISE WOW
// ---------------------------------------------------------------------------------------------------  */
new WOW().init();


// READ MORE BUTTON IN WELCOME TEXT SECTION
// ---------------------------------------------------------------------------------------------------  */
$( ".rd-more-button" ).click(function() {
  $( ".read-more" ).slideToggle( "600", function() {
// Animation complete.
});
  $('.rd-more-button').find('i').toggleClass('zmdi-plus zmdi-minus', 600);
  $('.read-more-angles').toggleClass('rd-open');
}); 

// SEARCHBOX OVERLAY
// ---------------------------------------------------------------------------------------------------  */
$( ".open-sb-js" ).click(function() {
  $( ".overlaytextfull" ).fadeIn( "slow");
});
//
$( ".closeover" ).click(function() {
  $( ".overlaytextfull" ).fadeOut( "slow");
});

// FANCYBOX FOR MAPS
// ---------------------------------------------------------------------------------------------------  */
$(".fancymap").fancybox({
  maxWidth  : 800,
  maxHeight : 600,
  fitToView : false,
  width   : '70%',
  height    : '70%',
  autoSize  : false,
  closeClick  : false,
  openEffect  : 'none',
  closeEffect : 'none'
});



});//CLOSE DOCUMENT READY


// SCROLL FUNCTION
// ---------------------------------------------------------------------------------------------------  */
$(window).scroll(function(){
  setScroll();
});


// SMOOTHSCROLL
// ---------------------------------------------------------------------------------------------------  */
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top -5
        }, 1000, 'easeInOutCubic');
        return false;
      }
    }
  });
});