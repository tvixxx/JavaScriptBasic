
var model = {
    // emitter: $({}),
    controller: null,
    setSelectValues: function(selectId, optionValue){
        var that = this;
        var currentSelect = this.selects.filter(function(select){
            return select.id == selectId;
        })[0];

        var currentOption = currentSelect.options.filter(function(option){
            return option.value == optionValue;
        })[0];

        currentSelect.currentOption = currentOption;
        console.log(currentSelect.currentOption = currentOption);

        switch (selectId){
            case 'org_type':
                currentOption.isMo ?
                    ((model.selects[1].visible = true) && (model.selects[2].visible = false) && (model.selects[3].visible = false) ) :
                        ((model.selects[2].visible = true) && (model.selects[1].visible = false) && (model.selects[3].visible = false) );
                $('.search-section__search-label').text(currentSelect.currentOption.name);

                break;
            case 'mo':
                (model.selects[3].visible = false);
                (model.selects[2].visible = true);
                break;
            case 'list':
                (model.selects[3].visible = true);
                break;
        }
    },

    init: function(controller){
        this.controller = controller;
    },

    selects: [
        {
            id: 'org_type',
            changeEvent: 'ORG_CHANGES',
            currentOption: null,
            visible: true,
            placeholder: 'Тип организации',
            options: [
                {
                    name: 'Тип организации',
                    value: 'kindergarten',
                    isMo: true
                },
                {
                    name: 'ДС',
                    value: 'kindergarten',
                    isMo: true
                },
                {
                    name: 'Школа',
                    value: 'school',
                    isMo: true
                },
                {
                    name: 'СПО',
                    value: 'spo',
                    isMo: false
                }
            ]
        },
        {
            id: 'mo',
            currentOption: null,
            visible: false,
            placeholder: 'МО',
            options: [
                {
                    name: 'г.Ижевск',
                    value: '1',
                    isMo: false
                },
                {
                    name: 'г.Воткинск',
                    value: '2',
                    isMo: true
                },
                {
                    name: 'г.Глазов',
                    value: '3',
                    isMo: true
                }
            ]
        },
        {
            id: 'list',
            currentOption: null,
            visible: false,
            placeholder: 'Список',
            options: [
                {
                    name: 'Список 1',
                    value: 'list1',
                    isMo: false
                },
                {
                    name: 'Список 2',
                    value: 'list2',
                    isMo: true
                },
                {
                    name: 'Список 3',
                    value: 'list3',
                    isMo: true
                }
            ]
        },
        {
            id: 'groups',
            currentOption: null,
            visible: false,
            placeholder: 'Класс/группа',
            options: [
                {
                    name: 'Группа 1',
                    value: 'group1',
                    isMo: false
                },

                {
                    name: 'Класс А',
                    value: 'classA',
                    isMo: true
                }
            ]
        }
    ],
    inputSubmit: {
        valueInput: "Найти",
        className: 'search-section__button-search js-button-search',
        disableClass: 'disable-btn',
        activeClass: 'active-btn',
        type: 'submit'
    }
};

var view = {
    model: null,
    controller: null,
    $formWrapper: $('.js-search-stat-form'),
    selectInputSelector: '.search-section__search-select',

    init: function (model, controller){
        this.model = model;
        this.controller = controller;
        this.render();
    },
    render: function(){
        var $selects = this
            .model
            .filter(function(select){
                return select.visible;
            })
            .map(function(select){
                var $select = $('<select/>', {
                    class: 'search-section__search-select',
                    'data-id': select.id
                });
                select.options.forEach(function(option){
                    var $option = $('<option/>', {
                        value: option.value
                    });

                    if (select.currentOption && (select.currentOption.value == option.value)){
                        $option.prop('selected', true);
                    }
                    $option.html(option.name);
                    $select.append($option);
                });

                var $disabledOption = $('<option/>', {
                    disabled: true,
                    value: null,
                    selected: true

                }).html(select.placeholder);
                $select.prepend($disabledOption);

                return $select;
        });


        var $inputSubmit = $('<input/>', {
            value: model.inputSubmit.valueInput,
            class: model.inputSubmit.className,
            type: model.inputSubmit.type
        });

        var labelSelectWrapper = $("<label class='search-section__search-label'></label>");
        var SELECT_SEARCH = '.search-section__search-select';
        var $selector_label = $('<span class="search-section__search-label"/>');
        var $placeholder = $('<span class="search-section__name-select active-placeholder js-placeholder "></span>').text(model.placeholder);

        this.$formWrapper.html($selects);
        this.$formWrapper.append($inputSubmit);
        // this.$formWrapper.append($placeholder);

        this.setDOMEvents();

        this.$formWrapper.find(SELECT_SEARCH).wrap(labelSelectWrapper).after($placeholder);

        function FUNCTIONZ() {
            if (FUNCTIONZ.invoked === undefined) {
                setPlaceholder(model.placeholder);
                FUNCTIONZ.invoked = true
            } else {
                setPlaceholder(model.name);
            }
        }

    },
    setDOMEvents: function(){
        var that = this;
        this.$formWrapper
            .find(that.selectInputSelector)
            .on('change', function(e){
                $(this).each(function(i, el){
                    var $el = $(el);
                    console.log($el);
                    if ($el.prop('selected', true)) {
                        $el.text($el.name);
                    }
                });
                var selectId = $(this).closest(that.selectInputSelector).attr('data-id');
                var selectValue = $(this).val();
                that.controller.setSelect(selectId, selectValue);
            });
    }
};

var appController = {
    model: null,
    view: null,
    init: function(model, view){
        var that =  this;
        this.model = model;
        this.view = view;
        this.model.init(this);
        this.view.init(model.selects, this);
    },
    setSelect: function(selectId, selectValue){
        this
            .model
            .setSelectValues(selectId, selectValue);
        view.render();
    }
};

appController.init(model, view);

