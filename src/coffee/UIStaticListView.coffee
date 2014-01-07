class window._UIStaticListView extends _UIView

    buildPage:(UIPageData, UIPageID)->

        ## Add icons to Navigation Bar
        $('#' + UIPageID).find('.UINavigationBar').append(
            eval(@UINavigationIconLeft).addClass('icon-arrow-prev')
                .on('click', ->
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
        while i < 50
            $('#' + UIPageID).find('.UITableView').append(eval(@UITableCell).attr('data-index', i).text('Item ' + i)
                .on('click', (event)=>
                    setTimeout(=>
                        UIPageData         = {}
                        UIPageData.title   = 'Static Title'
                        UIPageData.content = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, corporis, ullam dolorum nisi quia ut labore mollitia consequuntur. Hic, vitae, voluptatibus expedita cumque nihil velit non voluptate rerum repellendus nemo.'
                        new _UIListItemDetailView(UIPageData, 'left')
                    ,0)
                )
            )
            i++

        @addUiActions()
