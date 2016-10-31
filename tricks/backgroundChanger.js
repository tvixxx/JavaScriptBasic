//blur background before load full bg image
(function($, app){

    app.backGroundChange = (function(){

        var dataImgDesktopAttr = 'data-bg-url';
        var dataImgMobileAttr = 'data-bg-url--mobile';
        var lazyBgClass = 'js-lazy-bg';


        function init(desktopWidth){
            var currentImgAttr = dataImgMobileAttr;

            var styleSheet = (function() {
                var style = document.createElement("style");
                style.className = 'js-styles';
                // WebKit hack :(
                style.appendChild(document.createTextNode(""));

                // Add the <style> element to the page
                document.head.appendChild(style);

                return style.sheet;
            })();


            if (desktopWidth && window.matchMedia("(min-width:" +  desktopWidth + "px)").matches) {
                currentImgAttr = dataImgDesktopAttr;
            }

            var $lazyBlocks = $('.' + lazyBgClass);
            $lazyBlocks.each(function (index, elem) {
                var randomClass = 'randomClass' + new Date().getTime();
                var $currElem = $(elem);
                var imgElem = new Image();
                var imgUrl = $currElem.attr(currentImgAttr);
                imgElem.addEventListener('load', function () {
                    addCSSRule(styleSheet, '.' + randomClass + '{background-image:' + 'url(' + $currElem.attr(dataImgMobileAttr) + ');}', 0);
                    addCSSRule(styleSheet, '@media screen and (min-width: ' + desktopWidth + 'px) {' + '.' + randomClass + '{background-image:' + 'url(' + $currElem.attr(dataImgDesktopAttr) + ');}}', 1);
                    $currElem.addClass(randomClass);
                });
                imgElem.src = imgUrl;
            })
        }

        function addCSSRule(sheet, rules, index) {
            if("insertRule" in sheet) {
                sheet.insertRule(rules, index);
            }
        }


        return {
            init: init
        }
    })();

})(jQuery, window.MC_IVI_APP || (window.MC_IVI_APP = {}));

