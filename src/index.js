+function($){
    $('#test1').popit().on("clicked.pop.confirm clicked.pop.cancel", function(event, btnEl){
        console.log("button " + btnEl + " clicked");
    });

}(jQuery);