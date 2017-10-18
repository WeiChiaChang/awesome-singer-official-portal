jQuery(document).ready(function ($) {
  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
    //grab the "back to top" link
    $back_to_top = $('.cd-top');

  //hide or show the "back to top" link
  $(window).scroll(function () {
    ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
    if ($(this).scrollTop() > offset_opacity) {
      $back_to_top.addClass('cd-fade-out');
    }
  });

  //smooth scroll to top
  $back_to_top.on('click', function (event) {
    event.preventDefault();
    var elementButton = document.querySelector('.cd-top');
    var elevator = new Elevator({
      element: elementButton,
      // mainAudio from here:
      // https://github.com/tholman/elevator.js
      // Audio in the Demo (sourced from BenSound) is licenced under Creative Commons.
      mainAudio: 'https://weichiachang.github.io/Easter-egg/images/music/elevator.mp3',
      // endAudio from here:
      // https://www.findsounds.com/ISAPI/search.dll?keywords=ding+dinging
      endAudio: 'https://inventwithpython.com/pickup.wav',
      duration: 5000
    });
  });

});