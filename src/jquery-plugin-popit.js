+function($){
    const getTemplate = function(btnConfirmTitle, btnCancelTitle, content){
        return `<div style="text-align: center">${content}</div>
                <div style="text-align:center">
                <button class="btn btn-primary btn-sm" id="popitBtnConfirm" type="button">${btnConfirmTitle}</button>
                <button class="btn btn-default btn-sm" id="popitBtnCancel" type="button">${btnCancelTitle}</button>
                </div>`;
    };

    $.fn.popit = function(userOptions){
        return this.each(function(){
            let $el = $(this);

            //override data-attributes take precedence over passed options, which take precedence over defaults
            let options = $.extend({}, $.fn.popit.defaults, userOptions, $el.data());

            //set the content to the template with the confirm and cancel buttons
            options.content = getTemplate(options.btnConfirmTitle, options.btnCancelTitle, options.content);

            $el.popover(options).on("inserted.bs.popover", function(){
                $('#popitBtnConfirm').click(function(){
                    $el.trigger("clicked.pop.confirm", [$el]);
                    $el.popover("hide");
                });

                $('#popitBtnCancel').click(function(){
                    $el.trigger("clicked.pop.cancel", [$el]);
                    $el.popover("hide");
                });

            });
        });
    };

    $.fn.popit.defaults = {
        title: "title", //popover's title
        content: "some content from settings", //popover's body
        placement: "top", //where popover appears
        btnConfirmTitle: "Confirm",
        btnCancelTitle: "Cancel",
        html:true,
        sanitize: false
    }
}(jQuery);