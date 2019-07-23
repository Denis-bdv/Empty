$(document).ready(function() {
    $('.hamburger').on('click', function(){
      $(this).toggleClass('is-active');
      $('.menu').toggleClass('open');
    })/* нужна ли тут точка с запятой? */

    $('.slider-inner').slick({
      dots: false
    });/* нужна ли тут точка с запятой? */

  })