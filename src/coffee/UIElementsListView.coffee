class window._UIElementsListView extends _UIView


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
                eval(@UILabel).text(UIPageData.content)
                eval(@UICheckbox).attr('id', 'myCheckbox')
                eval(@UILabel).text('Select Date : ').css(display: 'inline-block')
                eval(@UIDatePicker)
                eval(@UISlider).attr('id', 'mySlider').val(20)
            )
        )

        @addUiActions()
