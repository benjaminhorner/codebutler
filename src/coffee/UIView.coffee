class _UIView

    #******** General params *****************************************************#
    UIPage                : $('.UIPage')
    UIViewContainer       : "$('<div>', {'class': 'UIViewContainer'})"
    UISpinner             : "$('<div>', {'id': 'UILoader', 'class': 'UISpinner'})"
    UISimpleView          : "$('<div>', {'class': 'UISimpleView'})"
    UIPreventActions      : "$('<div>', {'class': 'UIPreventActions'})"

    #******** Navigation params *****************************************************#
    UINavigationBarBg     : "$('<div>', {'class': 'UINavigationBarBg'})"
    UINavigationBar       : "$('<div>', {'class': 'UINavigationBar'})"
    UINavigationTitle     : "$('<h1>', {'class': 'UINavigationTitle'})"
    UINavigationIconRight : "$('<div>', {'class': 'UIPageNavigation UIPageNavigationRight', 'data-role': 'link'})"
    UINavigationIconLeft  : "$('<div>', {'class': 'UIPageNavigation UIPageNavigationLeft', 'data-role': 'link'})"

    #******** Content params *****************************************************#
    UILabelHeadline       : "$('<h2>', {'class': 'UILabelHeadline'})"
    UILabelSubHeadline    : "$('<h3>', {'class': 'UILabelSubHeadline'})"
    UILabel               : "$('<div>', {'class': 'UILabel'})"

    #******** UI Elements *****************************************************#
    UIButton              : "$('<div>', {'class': 'UIButton', 'data-role': 'link'})"
    UICheckbox            : "$('<input>', {'type': 'checkbox', 'class': 'checkbox'})"
    UISlider              : "$('<input>', {'type': 'range', 'min': '1', 'max': '100', 'class': 'range'})"
    UIDatePicker          : "$('<input>', {'type': 'date', 'class': 'date'})"

    #******** Table View params *****************************************************#
    IsUITableView         : false
    UITableView           : "$('<ul>', {'class': 'UITableView'})"
    UITableCell           : "$('<li>', {'class': 'UITableCell', 'data-role': 'link'})"



    ## Load the page
    constructor:(UIPageData, push)->
        App.UIUseRefresh = false
        App.UIHistory.push(App.UICurrentPage)
        console.log App.UIHistory
        console.log App.UIHistoryIndex
        App.PageTransitionDirection = push
        if push is 'left'
            App.UIHistoryIndex = App.UIHistoryIndex + 1
        if push is 'right'
            App.UIHistoryIndex = App.UIHistoryIndex - 1


        # create an observer instance
        if App.MutationObserver isnt undefined
            observer = new App.MutationObserver((mutations) =>
                if push isnt 'initialView'
                    observer.disconnect()
                    @transitionPage(App.PageTransitionDirection)
            )

            # configuration of the observer:
            config =
                attributes: true
                childList: true
                characterData: true

            # pass in the target node, as well as the observer options and watch DOM changes
            UIPage = document.getElementsByClassName('UIPage')
            observer.observe UIPage[0], config

        ## Create New Page instance
        if App.AreLinksActive
            if push is 'initialView'
                UIInitialViewPos = "UIViewOpen"
            if push is 'right'
                UIInitialViewPos = 'UIClosedLeft'
            if push is 'left'
                UIInitialViewPos = 'UIClosedRight'
            UIPageID = Math.floor((Math.random()*100000)+1)
            UIViewHolder = "$('<div>', {'id': '" + UIPageID + "', 'class': 'UIViewHolder " + UIInitialViewPos + "'})"
            if UIPageData.name is undefined
                UIPageTitle = UIPageData.title
            else
                UIPageTitle = UIPageData.name
            @UIPage.append(
                if push isnt 'initialView' then eval(@UIPreventActions)
                if push is 'initialView' then eval(@UINavigationBarBg)
                eval(UIViewHolder).append(
                    eval(@UINavigationBar).append(eval(@UINavigationTitle).text(UIPageTitle))
                    eval(@UISpinner)
                    eval(@UIViewContainer)
                )
            )
            @buildPage(UIPageData, UIPageID)
            App.UICurrentPage = UIPageData

        else
            return false


    ## Page transitions are handled here
    transitionPage:(direction)->
        ## Remove loader on page transition
        $('#UILoader').empty()

        if App.AreLinksActive
            App.AreLinksActive = false
            if direction is 'left'
                transitionDirection = 'UIClosedLeft'
                initialPosition     = 'UIClosedRight'
            else
                transitionDirection = 'UIClosedRight'
                initialPosition     = 'UIClosedLeft'

            setTimeout( ->
                $('.UIViewOpen').removeClass('UIViewOpen').addClass(transitionDirection + ' UITransition').on('webkitTransitionEnd', ->
                    $(this).removeClass('UITransition').remove()
                )
                $('.' + initialPosition).removeClass(initialPosition).addClass('UIViewOpen UITransition').on('webkitTransitionEnd', ->
                    setTimeout( ->
                        $('.UIPreventActions').remove()
                        App.AreLinksActive = true
                        ## Reset page History NB le faire avec autre chose que UIPageNavigation.length
                        if $('.UIPageNavigation').length is 0 then App.UIHistory.length = 1
                    , 100)
                    $(this).removeClass('UITransition')
                )
            , 100)
        else
            return false

    ## Called at the end of page build to add Actions to UI
    addUiActions:->
        UIViewContainerScroll = document.getElementsByClassName('UIViewContainer')
        tableCellList         = document.getElementsByTagName('li')
        cellClass             = 'UITableCell'
        prevTime              = null
        listen                = null

        ## Set list elements highlight on touch and click + remove on scroll ##
        if App.Device is 'ios'
            for cell of tableCellList
                tableCellList[cell].onclick = (event) ->
                    @.className = @.className + ' selected'
                tableCellList[cell].ontouchstart = (event) ->
                    listen      = setTimeout(=>
                        @.className = @.className + ' selected'
                    , 100)

                ## Listen for touchend to determine wether Refresh is active
                tableCellList[cell].ontouchend = (event) ->
                    if App.UIRefresh and App.UIUseRefresh
                        $('#UILoader').empty()

                    if App.UIRefresh is false and App.UIUseRefresh
                        $('.UIViewHolder').removeClass('UIViewEndRefresh').addClass('UIViewRefreshing')

                        ## Trigger the Refresh End
                        new ResfreshEnd()

            ## Remove on Scroll ##
            if UIViewContainerScroll.length is 1 then UIScrollWatch = UIViewContainerScroll[0] else UIScrollWatch = UIViewContainerScroll[1]
            if App.Device is 'android'
                window.onscroll = ->
                    clearTimeout(listen)
                    for cell of tableCellList
                        tableCellList[cell].className = cellClass
            else
                UIScrollWatch.onscroll = ->
                    child = $(@).children(":first")
                    childHeight = child.height()
                    childOffsetTop = child.offset().top
                    childOffsetBottom = childHeight - childOffsetTop
                    clearTimeout(listen)
                    for cell of tableCellList
                        tableCellList[cell].className = cellClass
                    if App.UIRefresh and App.UIUseRefresh
                        new _RefreshView(childOffsetTop)

                    #if childOffsetBottom >= childHeight
                        #new _LoadMore()


        ## Handle inputs ##
        inputList = document.getElementsByTagName('input')
        if inputList.length >= 1
            for input of inputList
                inputEL = inputList[input]
                inputType = inputList[input].className
                ## Range Inputs
                if inputType is 'range'
                    id             = inputList[input].id
                    input          = document.getElementById(id)
                    input.onchange = ->
                        value = (@.value - @.min) / (@.max - @.min)
                        @.style.backgroundImage = ["-webkit-gradient(", "linear, ", "left top, ", "right top, ", "color-stop(" + value + ", " + Config.UISliderBGColor + "), ", "color-stop(" + value + ", " + Config.UISliderColor + ")", ")"].join("")

                ## Range Inputs
                if inputType is 'checkbox' or inputType is 'radio'
                    id     = inputList[input].id
                    input  = document.getElementById(id)
                    startX = null

                    input.ontouchstart = (event)->
                        startX = ($('#' + id).offset().left) + 18
                        $('#' + id).attr('checked', true)

                    input.ontouchmove = (event)->
                        moveX = event.changedTouches[0].pageX
                        console.log startX - moveX
                        if ((startX - moveX) < -10) and @.checked is false
                            @.checked = true

                        if ((startX - moveX) > 10) and @.checked
                            @.checked = false

                ## Date Inputs
                if inputType is 'date'
                    today = new Date()
                    dd = today.getDate()
                    mm = today.getMonth() + 1
                    yyyy = today.getFullYear()
                    dd = "0" + dd  if dd < 10
                    mm = "0" + mm  if mm < 10
                    today = yyyy + "-" + mm + "-" + dd
                    inputList[input].value = today
                    inputList[input].style.color = Config.UIDatePickerFontColor

        ## For older devices
        if App.MutationObserver is undefined and App.PageTransitionDirection isnt 'initialView'
            @transitionPage(App.PageTransitionDirection)
