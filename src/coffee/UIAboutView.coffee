class window._UIAboutView extends _UIView


    buildPage:(UIPageData, UIPageID)->

        ## Add icons to Navigation Bar
        $('#' + UIPageID).find('.UINavigationBar').append(
            eval(@UINavigationIconLeft).addClass('icon-arrow-prev')
                .on('click', =>
                    $('#' + UIPageID).find('[data-role="link"]').off('click')
                    new _UIHomeView(App.UIHistory[App.UIHistoryIndex], 'right')
                )
        )

        ## Build Page Contents
        $('#' + UIPageID).find('.UIViewContainer').append(
            eval(@UISimpleView).append(
                eval(@UILabel).html(UIPageData.content)
            )
        )

        @addUiActions()
