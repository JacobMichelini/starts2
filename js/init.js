(function($){
  $(function(){

    $('.button-collapse').sideNav();

  });

   $('.star').on('click', function() {
    $(this)
      .prevAll('.star')
        .addClass('filled') 
        .end()
      .nextAll('.star')
        .removeClass('filled'); 
    });

  $(".star").click(function() {  
    $(this).addClass("filled");     
  });



})(jQuery); // end of jQuery name space