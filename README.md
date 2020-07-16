# popit
Display a bootstrap popover as a confirmation popover on any button
# How to

After including jquery-plugin-popit call it like this `$('yourelement').popit()` you can choose to pass options as an object
literal or use data attributes. As an object `$('yourelement').popit({placement: "top")`, as a data attribute within the element
 `<button type="button" data-placement="top">My Button</button>`

# Options

Pass options via data-attributes within the element tag, an object literal, or use the default settings. 
Data attributes will take precedence. 

* All bootstrap popover options, please reference their site
* btnConfirmTitle (Sets the title of the confirm button)
* btnConfirmStyle (Sets the style of the confirm button pass css classes like `btn btn-primary`)
* btnCancelTitle (Sets the title of the cancel button)
* btnCancelStyle (Sets the style of the cancel button)


# Multiple

Apply to multiple buttons at the same time by calling popit on a class like `$([data-toggle="popover"]).popit()`

#Events

Listen for the event `clicked.pop.confirm` to run your logic on the confirm click. Likewise for cancel listen for 
`clicked.pop.cancel`. For example `$("yourelement").popit().on("clicked.pop.confirm", function(event, buttonEl){ your logic });`


