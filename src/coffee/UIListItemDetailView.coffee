class _UIListItemDetailView extends _UIView

    buildPage:(UIPageData, UIPageID)->

        ## Add icons to Navigation Bar
        $('#' + UIPageID).find('.UINavigationBar').append(
            eval(@UINavigationIconLeft).addClass('icon-arrow-prev')
                .on('click', =>
                    console.log 'click'
                    $('#' + UIPageID).find('[data-role="link"]').off('click')
                    new _UIStaticListView(App.UIHistory[App.UIHistoryIndex], 'right')
                )
        )

        ## Build Page Contents
        $('#' + UIPageID).find('.UIViewContainer').append(
            eval(@UISimpleView).append(
                eval(@UILabelHeadline).text(UIPageData.name)
                eval(@UILabel).text(UIPageData.content)
            )
        )

        @addUiActions()
