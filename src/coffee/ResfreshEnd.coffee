class ResfreshEnd

    constructor:->
        ## Fake Loading. Mettre load()
        setTimeout(->
            window.spinner.stop()
            createWheelEl = (i) ->
                spinnerWheel = $('<div>', {'id': i, 'class': 'spinnerWheel'})
                $('#UILoader').append(spinnerWheel)
                spinnerWheel.css(
                    position: 'absolute',
                    width: (5+2) + 'px',
                    height: 2 + 'px',
                    background: '#000',
                    transformOrigin: 'left',
                    transform: 'rotate(' + ~~(360/12*i) + 'deg) translate(' + 6+'px' +',0)',
                    borderRadius: (1 * 2>>1) + 'px'
                )

            i = 0
            while i<11
                createWheelEl(i)
                i++

            $('#UILoader').removeClass('UISpinnerOpening').addClass('UISpinnerClosing')
            $('.UIViewHolder').removeClass('UIViewRefreshing').addClass('UIViewEndRefresh')
            setTimeout(->
                $('#UILoader').removeClass('UISpinnerClosing').empty()
            ,350)
            App.UIRefresh = true
        ,2000)
