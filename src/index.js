+function($){
    $('[data-toggle="popover"]').popit().on("clicked.pop.confirm", function(event, btnEl){
        console.log("Confirm Clicked");
    });
}(jQuery);