class _RefreshView

    constructor:(OffsetTop)->

        target = $('#UILoader')
        createWheelEl = (i) ->
            spinnerWheel = $('<div>', {'id': i, 'class': 'spinnerWheel'})
            target.append(spinnerWheel)
            spinnerWheel.css(
                position: 'absolute',
                width: (5+2) + 'px',
                height: 2 + 'px',
                background: '#000',
                transformOrigin: 'left',
                transform: 'rotate(' + ~~(360/12*i) + 'deg) translate(' + 6+'px' +',0)',
                borderRadius: (1 * 2>>1) + 'px'
            )

        ## First sprite image
        if OffsetTop > 85 and OffsetTop < 88
            createWheelEl(0)

        ## Second sprite image
        if OffsetTop > 88 and OffsetTop < 91
            if document.getElementById(0) is null
                createWheelEl(0)
            createWheelEl(1)

        ## Third sprite image
        if OffsetTop > 91 and OffsetTop < 94
            if document.getElementById(0) is null
                createWheelEl(0)
            if document.getElementById(1) is null
                createWheelEl(1)
            createWheelEl(2)

        ## Fourth sprite image
        if OffsetTop > 94 and OffsetTop < 97
            if document.getElementById(0) is null
                createWheelEl(0)
            if document.getElementById(1) is null
                createWheelEl(1)
            if document.getElementById(2) is null
                createWheelEl(2)
            createWheelEl(3)

        ## Fifth sprite image
        if OffsetTop > 100 and OffsetTop < 103
            if document.getElementById(0) is null
                createWheelEl(0)
            if document.getElementById(1) is null
                createWheelEl(1)
            if document.getElementById(2) is null
                createWheelEl(2)
            if document.getElementById(3) is null
                createWheelEl(3)
            createWheelEl(4)

        ## Sixth sprite image
        if OffsetTop > 106 and OffsetTop < 109
            if document.getElementById(0) is null
                createWheelEl(0)
            if document.getElementById(1) is null
                createWheelEl(1)
            if document.getElementById(2) is null
                createWheelEl(2)
            if document.getElementById(3) is null
                createWheelEl(3)
            if document.getElementById(4) is null
                createWheelEl(4)
            createWheelEl(5)

        ## Seventh sprite image
        if OffsetTop > 109 and OffsetTop < 112
            if document.getElementById(0) is null
                createWheelEl(0)
            if document.getElementById(1) is null
                createWheelEl(1)
            if document.getElementById(2) is null
                createWheelEl(2)
            if document.getElementById(3) is null
                createWheelEl(3)
            if document.getElementById(4) is null
                createWheelEl(4)
            if document.getElementById(5) is null
                createWheelEl(5)
            createWheelEl(6)

        ## Eigth sprite image
        if OffsetTop > 112 and OffsetTop < 115
            if document.getElementById(0) is null
                createWheelEl(0)
            if document.getElementById(1) is null
                createWheelEl(1)
            if document.getElementById(2) is null
                createWheelEl(2)
            if document.getElementById(3) is null
                createWheelEl(3)
            if document.getElementById(4) is null
                createWheelEl(4)
            if document.getElementById(5) is null
                createWheelEl(5)
            if document.getElementById(6) is null
                createWheelEl(6)
            createWheelEl(7)

        ## Ninth sprite image
        if OffsetTop > 115 and OffsetTop < 118
            if document.getElementById(0) is null
                createWheelEl(0)
            if document.getElementById(1) is null
                createWheelEl(1)
            if document.getElementById(2) is null
                createWheelEl(2)
            if document.getElementById(3) is null
                createWheelEl(3)
            if document.getElementById(4) is null
                createWheelEl(4)
            if document.getElementById(5) is null
                createWheelEl(5)
            if document.getElementById(6) is null
                createWheelEl(6)
            if document.getElementById(7) is null
                createWheelEl(7)
            createWheelEl(8)

        ## Tenth sprite image
        if OffsetTop > 121 and OffsetTop < 124
            if document.getElementById(0) is null
                createWheelEl(0)
            if document.getElementById(1) is null
                createWheelEl(1)
            if document.getElementById(2) is null
                createWheelEl(2)
            if document.getElementById(3) is null
                createWheelEl(3)
            if document.getElementById(4) is null
                createWheelEl(4)
            if document.getElementById(5) is null
                createWheelEl(5)
            if document.getElementById(6) is null
                createWheelEl(6)
            if document.getElementById(7) is null
                createWheelEl(7)
            if document.getElementById(8) is null
                createWheelEl(8)
            createWheelEl(9)

        ## Eleventh sprite image
        if OffsetTop > 127 and OffsetTop < 130
            if document.getElementById(0) is null
                createWheelEl(0)
            if document.getElementById(1) is null
                createWheelEl(1)
            if document.getElementById(2) is null
                createWheelEl(2)
            if document.getElementById(3) is null
                createWheelEl(3)
            if document.getElementById(4) is null
                createWheelEl(4)
            if document.getElementById(5) is null
                createWheelEl(5)
            if document.getElementById(6) is null
                createWheelEl(6)
            if document.getElementById(7) is null
                createWheelEl(7)
            if document.getElementById(8) is null
                createWheelEl(8)
            if document.getElementById(9) is null
                createWheelEl(9)
            createWheelEl(10)

        ## Twelfth sprite image
        if OffsetTop > 133 and OffsetTop < 136
            if document.getElementById(0) is null
                createWheelEl(0)
            if document.getElementById(1) is null
                createWheelEl(1)
            if document.getElementById(2) is null
                createWheelEl(2)
            if document.getElementById(3) is null
                createWheelEl(3)
            if document.getElementById(4) is null
                createWheelEl(4)
            if document.getElementById(5) is null
                createWheelEl(5)
            if document.getElementById(6) is null
                createWheelEl(6)
            if document.getElementById(7) is null
                createWheelEl(7)
            if document.getElementById(8) is null
                createWheelEl(8)
            if document.getElementById(9) is null
                createWheelEl(9)
            if document.getElementById(10) is null
                createWheelEl(10)
            createWheelEl(11)

        if OffsetTop > 136
            if document.getElementById(0) is null
                createWheelEl(0)
            if document.getElementById(1) is null
                createWheelEl(1)
            if document.getElementById(2) is null
                createWheelEl(2)
            if document.getElementById(3) is null
                createWheelEl(3)
            if document.getElementById(4) is null
                createWheelEl(4)
            if document.getElementById(5) is null
                createWheelEl(5)
            if document.getElementById(6) is null
                createWheelEl(6)
            if document.getElementById(7) is null
                createWheelEl(7)
            if document.getElementById(8) is null
                createWheelEl(8)
            if document.getElementById(9) is null
                createWheelEl(9)
            if document.getElementById(10) is null
                createWheelEl(10)
            if document.getElementById(11) is null
                createWheelEl(11)
            createWheelEl(12)

            if App.UIRefresh
                App.UIRefresh = false
                opts = {
                    lines: 12, # The number of lines to draw
                    length: 5, # The length of each line
                    width: 2, # The line thickness
                    radius: 6, # The radius of the inner circle
                    corners: 1, # Corner roundness (0..1)
                    rotate: 0, # The rotation offset
                    direction: 1, # 1: clockwise, -1: counterclockwise
                    color: '#000', # #rgb or #rrggbb or array of colors
                    speed: 1, # Rounds per second
                    trail: 60, # Afterglow percentage
                    shadow: false, # Whether to render a shadow
                    hwaccel: true, # Whether to use hardware acceleration
                    className: 'spinner', # The CSS class to assign to the spinner
                    zIndex: 0, # The z-index (defaults to 2e9 ie. 2000000000)
                    top: 'auto', # Top position relative to parent in px
                    left: 'auto' # Left position relative to parent in px
                }
                loader = document.getElementById('UILoader')
                window.spinner = new Spinner(opts).spin();
                $('#UILoader').addClass('UISpinnerOpening')
                setTimeout(->
                    target.empty()
                    $('#UILoader').removeClass('UISpinnerOpening')
                    loader.appendChild(window.spinner.el);
                ,1000)
