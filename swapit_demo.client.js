(function ($) {

Drupal.Nodejs.callbacks.swapIt = {
  //grab the message and inject into the header
  callback: function (message) {
    $('form #nodejs-selector').text(message.data.body);
  }
};

})(jQuery);

