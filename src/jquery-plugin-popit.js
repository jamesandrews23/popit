+function($){
    const getTemplate = function(btnConfirmTitle, btnCancelTitle, content){
        return `<div>${content}</div>
                <div style="text-align:center">
                <button class="btn btn-primary btn-sm" id="popitBtnConfirm" type="button">${btnConfirmTitle}</button>
                <button class="btn btn-secondary btn-sm" id="popitBtnCancel" type="button">${btnCancelTitle}</button>
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

            //override data-attributes take precedence over passed options, which take precedence over defaults
            let options = $.extend({}, $.fn.popit.defaults, userOptions, $el.data());

            //set the content to the template with the confirm and cancel buttons
            options.content = getTemplate(options.btnConfirmTitle, options.btnCancelTitle, options.content);

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
                    .prepend('<span id="spinner" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>');
            });
        });
    };

    $.fn.popit.defaults = {
        title: "Confirm Selection", //popover's title
        content: "Are you sure you want to proceed?", //popover's body
        placement: "top", //where popover appears
        btnConfirmTitle: "Confirm",
        btnCancelTitle: "Cancel",
        html:true,
        sanitize: false
    }
}(jQuery);