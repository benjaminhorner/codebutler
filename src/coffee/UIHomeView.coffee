class window._UIHomeView extends _UIView

    buildPage:(UIPageData, UIPageID)->

        ## Remove comments to enable the Refresh Class on this View
        App.UIUseRefresh = true
        App.UIRefresh    = true

        @IsUITableView   = true

        ## Build the page
        $('#' + UIPageID).find('.UIViewContainer').append(
            eval(@UITableView).addClass('hasArrows')
        )


        UIPageData = UIPageData.content

        ##Add Table Cells
        i = 0
        while i < UIPageData.length
            $('#' + UIPageID).find('.UITableView').append(eval(@UITableCell).attr({'data-index': i, 'data-link': UIPageData[i].link}).text(UIPageData[i].name)
                .on('click', (event)=>
                    $('#' + UIPageID).find('[data-role="link"]').off('click')
                    setTimeout(=>
                        dataIndex = event.target.attributes[2]
                        index     = parseInt(dataIndex.value)
                        link      = event.target.attributes[3].value
                        myclass   = window[link]
                        new myclass(UIPageData[index], 'left')
                    ,0)
                )
            )
            i++

        @addUiActions()

