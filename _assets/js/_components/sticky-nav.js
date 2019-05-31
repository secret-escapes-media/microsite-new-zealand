////////////////////////////////////////////////////////////////////////////////
//      Sticky microsite nav
////////////////////////////////////////////////////////////////////////////////

// elements and classes
var stickyNavClass     = '.js-sticky-nav';
var stickyNavModifier  = 'is-stuck';

function stickyNav(){

  var scrollTop = $(document).scrollTop();
  var nav       = $(stickyNavClass);
  var distance  = nav.parent().offset().top;

  if( scrollTop > distance ){
    nav.addClass(stickyNavModifier);
    $('.js-sticky-cta').addClass(stickyNavModifier);
  }else{
    nav.removeClass(stickyNavModifier);
    $('.js-sticky-cta').removeClass(stickyNavModifier);
  }
}

// runs on page load and scroll
stickyNav();
$(document).scroll(function(){ stickyNav(); });

