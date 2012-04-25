(function ($) {

Drupal.Nodejs.callbacks.swapIt = {
  //grab the message and inject into the header
  callback: function (message) {
    if(message.channel == 'swapit_demo') {
      $('form #nodejs-selector').html(message.data.body);
    }
  }
};

})(jQuery);

