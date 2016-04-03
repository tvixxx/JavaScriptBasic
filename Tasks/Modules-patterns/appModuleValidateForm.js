/* jQueryValidation module */

//Our module
(function(global, app){
    app.appModuleValidate = (function() {
        var init = function($elem, validSettings) {
            var $ourForm = $('.js-form');
            var defaultValidSettings = {
                rules: {
                    user_email: {
                        required: true,
                        email: true
                    },
                    user_name : {
                        required: true,
                        minlength: 3,
                        maxlength: 16
                    }
                }
            };
            
            // Here you can add new method for jQueryValidate and etc...

            validSettings = validSettings || {};

            validSettings = $.extend(true, defaultValidSettings, validSettings);

            $elem.validate(validSettings);
        };

        return {
            init : init
        };

    })();
})(window, window.TEST || (window.TEST = {}));


window.TEST.appModuleValidate.init($('.js-form'),{
        messages: { // Added new settings into our defaultValidSettings
            user_email: {
                required: 'Пожалуйста введите Email адрес!',
                email: 'Не верный email!'

            },
            user_name: {
                required: 'Пожалуйста введите настоящее имя!',
                minlength: 'Имя должно быть длиннее 5-ти символов',
                maxlength: 'Имя не должно превышать более 16 символов'
            }
        }
    });
