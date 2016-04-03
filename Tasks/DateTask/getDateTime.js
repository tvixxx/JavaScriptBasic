/* jQery */
$(document).ready(function() {
  var currentDate = new Date();
  var datetime = '© 2000–' + currentDate.getFullYear();
  var footerCopyrightDate = $('.footer-copyright');
  footerCopyrightDate.prepend(datetime);
  
});

/* js */
 window.onload = function() {
    var currentDate = new Date();
    var footerCopyrightDate = document.querySelector('.footer-copyright__date');
    footerCopyrightDate.innerHTML = '© 2000–' + currentDate.getFullYear();
};
