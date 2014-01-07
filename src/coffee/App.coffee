class window._App

    UIApp                   : $(document)
    UIhtml                  : $('html')
    UIbody                  : document.getElementsByTagName('body')[0]
    UIHistory               : []
    UIHistoryIndex          : 0
    UICurrentPage           : null
    UINextPage              : null
    UIPrevPage              : null
    AreLinksActive          : true
    PageTransitionDirection : null
    DOMChangeObserver       : null
    MutationObserver        : window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
    Device                  : null
    UIRefresh               : false
    UIUseRefresh            : false

    ## Call initial UI Page View
    constructor:->
        $(document).ready(=>
            if @UIhtml.hasClass('device-android')
                @Device = 'android'
            else
                @Device = 'ios'

            Config.MakeInitialView()
        )

    #******** N° : Global X and Y position *****************************************************#
    cursorX:(event)->
        cursorX = event.originalEvent.targetTouches[0].pageX
        return cursorX

    cursorY:(event)->
        cursorY = event.originalEvent.targetTouches[0].pageY
        return cursorY


App = new _App()
