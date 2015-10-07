(function() {
    var h3 = $('h3');
    var p = $('p');
    var slider = $('#slider');
    var img = $('.article-image');
    var selectedElement = null;
    
    var selectElement = function(elem) {
        h3.removeClass('selected');
        p.removeClass('selected');
        img.removeClass('selected');
        $(elem).addClass('selected');
    };

    var selectText = function() {
        selectedElement = this;
        selectElement(selectedElement);

        // Update slider
        slider.val(parseInt($(selectedElement).css('font-size'), 10));
        slider.attr('max', 99);
        updateText();
    };

    var selectImage = function() {
        selectedElement = this;
        selectElement(selectedElement);
        slider.attr('max', 1000);
        slider.val(parseInt($(selectedElement).css('height'), 10));
        updateText();
    };

    var updateText = function() {
        if(selectedElement !== null) {
            if($(selectedElement).hasClass('article-image')) {
                $(selectedElement).css('height', slider.val() + 'px');
            }
            else {
                $(selectedElement).css('font-size', slider.val() + 'px');
            }
            $('#slider-value').text(slider.val());
        }
    };

    slider.on('input', updateText);


    $('#slider_minus').click(function () {
        var val = Number(slider.val());
        if(val > 3) {
            slider.val(val - 1);
            updateText();
        }
    });

    $('#slider_plus').click(function () {
        var val = Number(slider.val());
        slider.val(val + 1);
        updateText();
    });

    h3.on('click', selectText);
    p.on('click', selectText);
    img.on('click', selectImage);
})();
