+function($){
    $.fn.popit = function(options){

        var settings = $.extend({
            title: "title", //popover's title
            content: "some content from settings", //popover's body
            placement: "top", //where popover appears
            template: null //if template is defined it will be used in place of default template
        }, options); //element data- values will override options or defaults

        return this.each(function(){
            var $el = $(this);

            $el.popover({
                placement: $el.data("placement") || settings.placement,
                title: $el.data("title") || settings.title,
                content: $el.data("content") || settings.content,
                trigger: "click"
            });
        });
    }
}(jQuery);