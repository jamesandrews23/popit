+function($){
    const getTemplate = function(buttons, content){
        return `<div style="margin-bottom:10px;">${content}</div>
                <div style="text-align:center">
                <button class="${buttons.confirm.class}" id="popitBtnConfirm" type="button">${buttons.confirm.title}</button>
                <button class="${buttons.cancel.class}" id="popitBtnCancel" type="button">${buttons.cancel.title}</button>
                </div>`;
    };

    const handleClick = function($el, event){
        $el.trigger(event, [$el]);
        $el.prop("disabled", false).children().remove("#spinner");
        $el.popover("hide");
    };

    $.fn.popit = function(userOptions){
        return this.each(function(){
            let $el = $(this);

            //data-attributes take precedence over passed options, which take precedence over defaults
            let options = $.extend({}, $.fn.popit.defaults, userOptions, $el.data());

            let buttons =
                {
                    confirm: {title: options.btnConfirmTitle, class: options.btnConfirmStyle},
                    cancel: {title: options.btnCancelTitle, class: options.btnCancelStyle}
                };

            //set the content to the template with the confirm and cancel buttons
            options.content = getTemplate(buttons, options.content);

            $el.popover(options).on("inserted.bs.popover", function(){
                $('#popitBtnConfirm').click(function(){
                    handleClick($el, "clicked.pop.confirm");
                });

                $('#popitBtnCancel').click(function(){
                    handleClick($el, "clicked.pop.cancel");
                });
            });

            $el.click(function(){
                let $el = $(this);
                $el.prop("disabled", true)
                    .prepend('<span id="spinner" style="margin-right:5px;" class="spinner-border spinner-border-sm" ' +
                        'role="status" aria-hidden="true"></span>');
            });
        });
    };

    $.fn.popit.defaults = {
        title: "Confirm Selection", //popover's title
        content: "Are you sure you want to proceed?", //popover's body
        placement: "top", //where popover appears
        btnConfirmTitle: "Confirm",
        btnCancelTitle: "Cancel",
        btnConfirmStyle: "btn btn-sm btn-primary",
        btnCancelStyle: "btn btn-sm btn-secondary",
        html:true,
        sanitize: false
    };

    $.fn.popit.confirmEvent = "clicked.pop.confirm";

    $.fn.popit.cancelEvent = "clicked.pop.cancel";
}(jQuery);