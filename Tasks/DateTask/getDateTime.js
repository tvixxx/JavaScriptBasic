var currentDate = new Date();
var datetime = '© 2000–' + currentDate.getFullYear();
var footerCopyrightDate = $('.footer-copyright');
footerCopyrightDate.prepend(datetime);
