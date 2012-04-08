(function ($) {

Drupal.Nodejs.callbacks.swapIt = {
  //grab the message and inject into the header
  callback: function (message) {
    $('form #nodejs-selector').html(message.data.body);
  }
};

})(jQuery);

