class window._UIDynamicListView extends _UIView

    buildPage:(UIPageData, UIPageID)->

        ## Add icons to Navigation Bar
        $('#' + UIPageID).find('.UINavigationBar').append(
            console.log 'append'
            eval(@UINavigationIconLeft).addClass('icon-arrow-prev')
                .on('click', =>
                    new _UIAllListsView(App.UIHistory[App.UIHistoryIndex], 'right')
                )
        )

        @IsUITableView = true

        ## Build the page
        $('#' + UIPageID).find('.UIViewContainer').append(
            eval(@UITableView).addClass('hasArrows')
        )


        UIPageData = UIPageData.content

        ##Add Table Cells
        i = 0
        while i < UIPageData.length
            $('#' + UIPageID).find('.UITableView').append(eval(@UITableCell).attr('data-index', i).text(UIPageData[i].name)
                .on('click', (event)=>
                    setTimeout(=>
                        dataIndex = event.target.attributes[2]
                        index = parseInt(dataIndex.value)
                        new _UIDynamicListDetailView(UIPageData[index], 'left')
                    ,0)
                )
            )
            i++

        @addUiActions()
