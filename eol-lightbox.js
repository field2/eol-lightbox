jQuery(document).ready(function($) {
  
  // global variables for script
  var current, size;
  
  $('.blocks-gallery-item a').click(function(e) {
    
    // prevent default click event
    e.preventDefault();
          // scroll to the top of the page if they're scrolled down
var scroll = $(window).scrollTop();
console.log("windowscroll is " + scroll);
if(scroll !== 0) {
	$(window).scrollTop(0);
}
    
    // grab href from clicked element
    var image_href = $(this).attr("href");  
    console.log(image_href);
    // determine the index of clicked trigger
    var slideNum = $('.blocks-gallery-item a').index(this);
        console.log(slideNum);

    // find out if #eol_lightbox exists
    if ($('#eol_lightbox').length > 0) {        
      // #eol_lightbox exists
      $('#eol_lightbox').fadeIn(300);
      // #eol_lightbox does not exist - create and insert (runs 1st time only)
    } else {                                
      // create HTML markup for lightbox window
      var lightbox =
          '<div id="eol_lightbox">' +
          '<a href="#" class="eol_close"></a>' +
          '<ul id="eol_slider"></ul>' +        

                    '<div class="eol_nav">' +
          '<a href="#" class="eol_prev eol_slide-nav"></a>' +
          '<a href="#" class="eol_next eol_slide-nav"></a>' +
          '</div><!-- .eol_nav -->' +

          '</div><!-- #eol_lightbox -->';
      
      //insert lightbox HTML into page
      $('body').append(lightbox);

      $('body').addClass("eol_noscroll");
     
      // fill lightbox with .blocks-gallery-grid a hrefs in #imageSet
      $('.wp-block-gallery').find('.blocks-gallery-item a').each(function() {
        var $href = $(this).attr('href');
        console.log($href);
        $('ul#eol_slider').append(
          '<li>' +
          '<img src="' + $href + '">' +
          '</li>'
        );
      });
      
    }
    
    // setting size based on number of objects in slideshow
    size = $('ul#eol_slider > li').length;
    
    // hide all slides, then show the selected slide
    $('ul#eol_slider > li').hide();
    $('ul#eol_slider > li:eq(' + slideNum + ')').show();
    
    // set current to selected slide
    current = slideNum;
  });
  
  //Click anywhere on the page to get rid of lightbox window
  $('body').on('click', '#eol_lightbox', function() { // using .on() instead of .live(). more modern, and fixes event bubbling issues
    $('#eol_lightbox').fadeOut(300);
          $('body').removeClass("eol_noscroll");

  });
  
  // show/hide navigation when hovering over #slideshow
  // $('body').on(
  //   { mouseenter: function() {
  //     $('.eol_nav').fadeIn(300);
  //   }, mouseleave: function() {
  //     $('.eol_nav').fadeOut(300);
  //   }
  //   },'#eol_slider');
  
  // navigation prev/next
  $('body').on('click', '.eol_slide-nav', function(e) {
    
    // prevent default click event, and prevent event bubbling to prevent lightbox from closing
    e.preventDefault();
    e.stopPropagation();
    
    var $this = $(this);
    var dest;
    
    // looking for .prev
    if ($this.hasClass('eol_prev')) {
      dest = current - 1;
      if (dest < 0) {
        dest = size - 1;
      }
    } else {
      // in absence of .prev, assume .next
      dest = current + 1;
      if (dest > size - 1) {
        dest = 0;
      }
    }
    
    // fadeOut curent slide, FadeIn next/prev slide
    $('ul#eol_slider > li:eq(' + current + ')').fadeOut(750);
    $('ul#eol_slider > li:eq(' + dest + ')').fadeIn(750);
    
    // update current slide
    current = dest;
  });
  
});