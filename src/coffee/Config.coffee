class window._Config

    UIDatePickerFontColor : '#007aff'
    UISliderColor         : '#b8b7b8'
    UISliderBGColor       : '#007aff'


    MakeInitialView:=>

        $.getJSON "data.json", (data) =>
            UIPageData = data['codeButler']

            new _UIHomeView(UIPageData, 'initialView')

Config = new _Config()
