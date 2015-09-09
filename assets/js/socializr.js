;(function() {
  var Socializer = {
    init: function() {
      this.page_url = window.location.href;
      this.page_title = "\"" + $('.js-post-title').html() + "\"";
      this.blog_logo = $('.logo').attr('src');
      this.post_content = $('.js-post-content').html();
      this.twitter();
      this.facebook();
      this.googleplus();
      this.emailit();
    },
    twitter: function() {
      this.message = encodeURIComponent(this.page_title + " " + this.page_url);
      this.intent_url = "https://twitter.com/intent/tweet?text=" + this.message;
      $('.js-post-twitter').attr({
        'href': this.intent_url
      });
      $('.js-index-twitter').each(function(index){
        this.message = encodeURIComponent($(this).parent('.share').data("title") + " " + $(this).parent('.share').data("url") );
        this.intent_url = "https://twitter.com/intent/tweet?text=" + this.message;
        $(this).attr("href",this.intent_url);

      });
    },
    facebook: function() {
      this.message = encodeURIComponent(this.page_url);
      this.intent_url = "https://www.facebook.com/sharer/sharer.php?u=" + this.message;
      $('.js-post-facebook').attr({
        'href': this.intent_url
      });
      $('.js-index-facebook').each(function(index){
        this.message = encodeURIComponent($(this).parent('.share').data("url"));
        this.intent_url = "https://www.facebook.com/sharer/sharer.php?u=" + this.message;
        $(this).attr("href",this.intent_url);
      });
    },
    googleplus: function() {
      this.message = encodeURIComponent($(this).parent('.share').data("url"));
      this.intent_url = "https://plus.google.com/share?url=" + this.message;
      $('.js-post-googleplus').attr({
        'href': this.intent_url
      });
      $('.js-index-googleplus').each(function(index){
        this.message = encodeURIComponent($(this).parent('.share').data("url"));
        this.intent_url = "https://www.facebook.com/sharer/sharer.php?u=" + this.message;
        $(this).attr("href",this.intent_url);
      });
    },
    emailit: function() {
      this.message = encodeURIComponent("<h2>" + this.page_title + "</h2><h3>" + this.page_url + "</h3>" + this.post_content);
      this.intent_url = "mailto:?to=&subject=" + this.page_title + "&body=" + this.message;
      $('.js-post-email').attr({
        'href': this.intent_url
      });
      $('.js-index-email').each(function(index){
        this.message = encodeURIComponent("<h2>" + $(this).parent('.share').data("title") + "</h2><h3>" + $(this).parent('.share').data("url") + "</h3>" + $(this).parent('.share').data("content") );
        this.intent_url = "mailto:?to=&subject=" + $(this).parent('.share').data("title") + "&body=" + this.message;
        $(this).attr("href",this.intent_url);
      });
    },
  };
  Socializer.init();
})();
