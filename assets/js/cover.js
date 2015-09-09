$(document).ready(function() {

  var currentUrl = window.location.href;
   if (window.location.pathname=="/" && window.location.hash=="" ){
      $('header').addClass('mdl-layout__header--waterfall');
   }
   //$('header .blog-title').click(function(e){
   $('header .mdl-layout-title').click(function(e){
     if( e.target == this ){
       $('header').addClass('mdl-layout__header--waterfall');
     }
   });

  $('nav.buttons a[href*=#].mdl-button, nav.links a[href*=#].mdl-navigation__link').click(function(){

    var url = new URL(this.href);
    if (url.pathname=="/" && url.hash!="" ){
      $('header').removeClass('mdl-layout__header--waterfall');
    }

   });

});
