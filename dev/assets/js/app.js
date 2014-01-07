(function() {
  var App, Config, ResfreshEnd, _LoadMore, _RefreshView, _UIListItemDetailView, _UIView, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window._Config = (function() {
    function _Config() {
      this.MakeInitialView = __bind(this.MakeInitialView, this);
    }

    _Config.prototype.UIDatePickerFontColor = '#007aff';

    _Config.prototype.UISliderColor = '#b8b7b8';

    _Config.prototype.UISliderBGColor = '#007aff';

    _Config.prototype.MakeInitialView = function() {
      var _this = this;
      return $.getJSON("data.json", function(data) {
        var UIPageData;
        UIPageData = data['codeButler'];
        return new _UIHomeView(UIPageData, 'initialView');
      });
    };

    return _Config;

  })();

  Config = new _Config();

  window._App = (function() {
    _App.prototype.UIApp = $(document);

    _App.prototype.UIhtml = $('html');

    _App.prototype.UIbody = document.getElementsByTagName('body')[0];

    _App.prototype.UIHistory = [];

    _App.prototype.UIHistoryIndex = 0;

    _App.prototype.UICurrentPage = null;

    _App.prototype.UINextPage = null;

    _App.prototype.UIPrevPage = null;

    _App.prototype.AreLinksActive = true;

    _App.prototype.PageTransitionDirection = null;

    _App.prototype.DOMChangeObserver = null;

    _App.prototype.MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

    _App.prototype.Device = null;

    _App.prototype.UIRefresh = false;

    _App.prototype.UIUseRefresh = false;

    function _App() {
      var _this = this;
      $(document).ready(function() {
        if (_this.UIhtml.hasClass('device-android')) {
          _this.Device = 'android';
        } else {
          _this.Device = 'ios';
        }
        return Config.MakeInitialView();
      });
    }

    _App.prototype.cursorX = function(event) {
      var cursorX;
      cursorX = event.originalEvent.targetTouches[0].pageX;
      return cursorX;
    };

    _App.prototype.cursorY = function(event) {
      var cursorY;
      cursorY = event.originalEvent.targetTouches[0].pageY;
      return cursorY;
    };

    return _App;

  })();

  App = new _App();

  _RefreshView = (function() {
    function _RefreshView(OffsetTop) {
      var createWheelEl, loader, opts, target;
      target = $('#UILoader');
      createWheelEl = function(i) {
        var spinnerWheel;
        spinnerWheel = $('<div>', {
          'id': i,
          'class': 'spinnerWheel'
        });
        target.append(spinnerWheel);
        return spinnerWheel.css({
          position: 'absolute',
          width: (5 + 2) + 'px',
          height: 2 + 'px',
          background: '#000',
          transformOrigin: 'left',
          transform: 'rotate(' + ~~(360 / 12 * i) + 'deg) translate(' + 6 + 'px' + ',0)',
          borderRadius: (1 * 2 >> 1) + 'px'
        });
      };
      if (OffsetTop > 85 && OffsetTop < 88) {
        createWheelEl(0);
      }
      if (OffsetTop > 88 && OffsetTop < 91) {
        if (document.getElementById(0) === null) {
          createWheelEl(0);
        }
        createWheelEl(1);
      }
      if (OffsetTop > 91 && OffsetTop < 94) {
        if (document.getElementById(0) === null) {
          createWheelEl(0);
        }
        if (document.getElementById(1) === null) {
          createWheelEl(1);
        }
        createWheelEl(2);
      }
      if (OffsetTop > 94 && OffsetTop < 97) {
        if (document.getElementById(0) === null) {
          createWheelEl(0);
        }
        if (document.getElementById(1) === null) {
          createWheelEl(1);
        }
        if (document.getElementById(2) === null) {
          createWheelEl(2);
        }
        createWheelEl(3);
      }
      if (OffsetTop > 100 && OffsetTop < 103) {
        if (document.getElementById(0) === null) {
          createWheelEl(0);
        }
        if (document.getElementById(1) === null) {
          createWheelEl(1);
        }
        if (document.getElementById(2) === null) {
          createWheelEl(2);
        }
        if (document.getElementById(3) === null) {
          createWheelEl(3);
        }
        createWheelEl(4);
      }
      if (OffsetTop > 106 && OffsetTop < 109) {
        if (document.getElementById(0) === null) {
          createWheelEl(0);
        }
        if (document.getElementById(1) === null) {
          createWheelEl(1);
        }
        if (document.getElementById(2) === null) {
          createWheelEl(2);
        }
        if (document.getElementById(3) === null) {
          createWheelEl(3);
        }
        if (document.getElementById(4) === null) {
          createWheelEl(4);
        }
        createWheelEl(5);
      }
      if (OffsetTop > 109 && OffsetTop < 112) {
        if (document.getElementById(0) === null) {
          createWheelEl(0);
        }
        if (document.getElementById(1) === null) {
          createWheelEl(1);
        }
        if (document.getElementById(2) === null) {
          createWheelEl(2);
        }
        if (document.getElementById(3) === null) {
          createWheelEl(3);
        }
        if (document.getElementById(4) === null) {
          createWheelEl(4);
        }
        if (document.getElementById(5) === null) {
          createWheelEl(5);
        }
        createWheelEl(6);
      }
      if (OffsetTop > 112 && OffsetTop < 115) {
        if (document.getElementById(0) === null) {
          createWheelEl(0);
        }
        if (document.getElementById(1) === null) {
          createWheelEl(1);
        }
        if (document.getElementById(2) === null) {
          createWheelEl(2);
        }
        if (document.getElementById(3) === null) {
          createWheelEl(3);
        }
        if (document.getElementById(4) === null) {
          createWheelEl(4);
        }
        if (document.getElementById(5) === null) {
          createWheelEl(5);
        }
        if (document.getElementById(6) === null) {
          createWheelEl(6);
        }
        createWheelEl(7);
      }
      if (OffsetTop > 115 && OffsetTop < 118) {
        if (document.getElementById(0) === null) {
          createWheelEl(0);
        }
        if (document.getElementById(1) === null) {
          createWheelEl(1);
        }
        if (document.getElementById(2) === null) {
          createWheelEl(2);
        }
        if (document.getElementById(3) === null) {
          createWheelEl(3);
        }
        if (document.getElementById(4) === null) {
          createWheelEl(4);
        }
        if (document.getElementById(5) === null) {
          createWheelEl(5);
        }
        if (document.getElementById(6) === null) {
          createWheelEl(6);
        }
        if (document.getElementById(7) === null) {
          createWheelEl(7);
        }
        createWheelEl(8);
      }
      if (OffsetTop > 121 && OffsetTop < 124) {
        if (document.getElementById(0) === null) {
          createWheelEl(0);
        }
        if (document.getElementById(1) === null) {
          createWheelEl(1);
        }
        if (document.getElementById(2) === null) {
          createWheelEl(2);
        }
        if (document.getElementById(3) === null) {
          createWheelEl(3);
        }
        if (document.getElementById(4) === null) {
          createWheelEl(4);
        }
        if (document.getElementById(5) === null) {
          createWheelEl(5);
        }
        if (document.getElementById(6) === null) {
          createWheelEl(6);
        }
        if (document.getElementById(7) === null) {
          createWheelEl(7);
        }
        if (document.getElementById(8) === null) {
          createWheelEl(8);
        }
        createWheelEl(9);
      }
      if (OffsetTop > 127 && OffsetTop < 130) {
        if (document.getElementById(0) === null) {
          createWheelEl(0);
        }
        if (document.getElementById(1) === null) {
          createWheelEl(1);
        }
        if (document.getElementById(2) === null) {
          createWheelEl(2);
        }
        if (document.getElementById(3) === null) {
          createWheelEl(3);
        }
        if (document.getElementById(4) === null) {
          createWheelEl(4);
        }
        if (document.getElementById(5) === null) {
          createWheelEl(5);
        }
        if (document.getElementById(6) === null) {
          createWheelEl(6);
        }
        if (document.getElementById(7) === null) {
          createWheelEl(7);
        }
        if (document.getElementById(8) === null) {
          createWheelEl(8);
        }
        if (document.getElementById(9) === null) {
          createWheelEl(9);
        }
        createWheelEl(10);
      }
      if (OffsetTop > 133 && OffsetTop < 136) {
        if (document.getElementById(0) === null) {
          createWheelEl(0);
        }
        if (document.getElementById(1) === null) {
          createWheelEl(1);
        }
        if (document.getElementById(2) === null) {
          createWheelEl(2);
        }
        if (document.getElementById(3) === null) {
          createWheelEl(3);
        }
        if (document.getElementById(4) === null) {
          createWheelEl(4);
        }
        if (document.getElementById(5) === null) {
          createWheelEl(5);
        }
        if (document.getElementById(6) === null) {
          createWheelEl(6);
        }
        if (document.getElementById(7) === null) {
          createWheelEl(7);
        }
        if (document.getElementById(8) === null) {
          createWheelEl(8);
        }
        if (document.getElementById(9) === null) {
          createWheelEl(9);
        }
        if (document.getElementById(10) === null) {
          createWheelEl(10);
        }
        createWheelEl(11);
      }
      if (OffsetTop > 136) {
        if (document.getElementById(0) === null) {
          createWheelEl(0);
        }
        if (document.getElementById(1) === null) {
          createWheelEl(1);
        }
        if (document.getElementById(2) === null) {
          createWheelEl(2);
        }
        if (document.getElementById(3) === null) {
          createWheelEl(3);
        }
        if (document.getElementById(4) === null) {
          createWheelEl(4);
        }
        if (document.getElementById(5) === null) {
          createWheelEl(5);
        }
        if (document.getElementById(6) === null) {
          createWheelEl(6);
        }
        if (document.getElementById(7) === null) {
          createWheelEl(7);
        }
        if (document.getElementById(8) === null) {
          createWheelEl(8);
        }
        if (document.getElementById(9) === null) {
          createWheelEl(9);
        }
        if (document.getElementById(10) === null) {
          createWheelEl(10);
        }
        if (document.getElementById(11) === null) {
          createWheelEl(11);
        }
        createWheelEl(12);
        if (App.UIRefresh) {
          App.UIRefresh = false;
          opts = {
            lines: 12,
            length: 5,
            width: 2,
            radius: 6,
            corners: 1,
            rotate: 0,
            direction: 1,
            color: '#000',
            speed: 1,
            trail: 60,
            shadow: false,
            hwaccel: true,
            className: 'spinner',
            zIndex: 0,
            top: 'auto',
            left: 'auto'
          };
          loader = document.getElementById('UILoader');
          window.spinner = new Spinner(opts).spin();
          $('#UILoader').addClass('UISpinnerOpening');
          setTimeout(function() {
            target.empty();
            $('#UILoader').removeClass('UISpinnerOpening');
            return loader.appendChild(window.spinner.el);
          }, 1000);
        }
      }
    }

    return _RefreshView;

  })();

  _LoadMore = (function() {
    function _LoadMore() {
      alert('Load more !');
    }

    return _LoadMore;

  })();

  _UIView = (function() {
    _UIView.prototype.UIPage = $('.UIPage');

    _UIView.prototype.UIViewContainer = "$('<div>', {'class': 'UIViewContainer'})";

    _UIView.prototype.UISpinner = "$('<div>', {'id': 'UILoader', 'class': 'UISpinner'})";

    _UIView.prototype.UISimpleView = "$('<div>', {'class': 'UISimpleView'})";

    _UIView.prototype.UIPreventActions = "$('<div>', {'class': 'UIPreventActions'})";

    _UIView.prototype.UINavigationBarBg = "$('<div>', {'class': 'UINavigationBarBg'})";

    _UIView.prototype.UINavigationBar = "$('<div>', {'class': 'UINavigationBar'})";

    _UIView.prototype.UINavigationTitle = "$('<h1>', {'class': 'UINavigationTitle'})";

    _UIView.prototype.UINavigationIconRight = "$('<div>', {'class': 'UIPageNavigation UIPageNavigationRight', 'data-role': 'link'})";

    _UIView.prototype.UINavigationIconLeft = "$('<div>', {'class': 'UIPageNavigation UIPageNavigationLeft', 'data-role': 'link'})";

    _UIView.prototype.UILabelHeadline = "$('<h2>', {'class': 'UILabelHeadline'})";

    _UIView.prototype.UILabelSubHeadline = "$('<h3>', {'class': 'UILabelSubHeadline'})";

    _UIView.prototype.UILabel = "$('<div>', {'class': 'UILabel'})";

    _UIView.prototype.UIButton = "$('<div>', {'class': 'UIButton', 'data-role': 'link'})";

    _UIView.prototype.UICheckbox = "$('<input>', {'type': 'checkbox', 'class': 'checkbox'})";

    _UIView.prototype.UISlider = "$('<input>', {'type': 'range', 'min': '1', 'max': '100', 'class': 'range'})";

    _UIView.prototype.UIDatePicker = "$('<input>', {'type': 'date', 'class': 'date'})";

    _UIView.prototype.IsUITableView = false;

    _UIView.prototype.UITableView = "$('<ul>', {'class': 'UITableView'})";

    _UIView.prototype.UITableCell = "$('<li>', {'class': 'UITableCell', 'data-role': 'link'})";

    function _UIView(UIPageData, push) {
      var UIInitialViewPos, UIPage, UIPageID, UIPageTitle, UIViewHolder, config, observer,
        _this = this;
      App.UIUseRefresh = false;
      App.UIHistory.push(App.UICurrentPage);
      console.log(App.UIHistory);
      console.log(App.UIHistoryIndex);
      App.PageTransitionDirection = push;
      if (push === 'left') {
        App.UIHistoryIndex = App.UIHistoryIndex + 1;
      }
      if (push === 'right') {
        App.UIHistoryIndex = App.UIHistoryIndex - 1;
      }
      if (App.MutationObserver !== void 0) {
        observer = new App.MutationObserver(function(mutations) {
          if (push !== 'initialView') {
            observer.disconnect();
            return _this.transitionPage(App.PageTransitionDirection);
          }
        });
        config = {
          attributes: true,
          childList: true,
          characterData: true
        };
        UIPage = document.getElementsByClassName('UIPage');
        observer.observe(UIPage[0], config);
      }
      if (App.AreLinksActive) {
        if (push === 'initialView') {
          UIInitialViewPos = "UIViewOpen";
        }
        if (push === 'right') {
          UIInitialViewPos = 'UIClosedLeft';
        }
        if (push === 'left') {
          UIInitialViewPos = 'UIClosedRight';
        }
        UIPageID = Math.floor((Math.random() * 100000) + 1);
        UIViewHolder = "$('<div>', {'id': '" + UIPageID + "', 'class': 'UIViewHolder " + UIInitialViewPos + "'})";
        if (UIPageData.name === void 0) {
          UIPageTitle = UIPageData.title;
        } else {
          UIPageTitle = UIPageData.name;
        }
        this.UIPage.append(push !== 'initialView' ? eval(this.UIPreventActions) : void 0, push === 'initialView' ? eval(this.UINavigationBarBg) : void 0, eval(UIViewHolder).append(eval(this.UINavigationBar).append(eval(this.UINavigationTitle).text(UIPageTitle)), eval(this.UISpinner), eval(this.UIViewContainer)));
        this.buildPage(UIPageData, UIPageID);
        App.UICurrentPage = UIPageData;
      } else {
        return false;
      }
    }

    _UIView.prototype.transitionPage = function(direction) {
      var initialPosition, transitionDirection;
      $('#UILoader').empty();
      if (App.AreLinksActive) {
        App.AreLinksActive = false;
        if (direction === 'left') {
          transitionDirection = 'UIClosedLeft';
          initialPosition = 'UIClosedRight';
        } else {
          transitionDirection = 'UIClosedRight';
          initialPosition = 'UIClosedLeft';
        }
        return setTimeout(function() {
          $('.UIViewOpen').removeClass('UIViewOpen').addClass(transitionDirection + ' UITransition').on('webkitTransitionEnd', function() {
            return $(this).removeClass('UITransition').remove();
          });
          return $('.' + initialPosition).removeClass(initialPosition).addClass('UIViewOpen UITransition').on('webkitTransitionEnd', function() {
            setTimeout(function() {
              $('.UIPreventActions').remove();
              App.AreLinksActive = true;
              if ($('.UIPageNavigation').length === 0) {
                return App.UIHistory.length = 1;
              }
            }, 100);
            return $(this).removeClass('UITransition');
          });
        }, 100);
      } else {
        return false;
      }
    };

    _UIView.prototype.addUiActions = function() {
      var UIScrollWatch, UIViewContainerScroll, cell, cellClass, dd, id, input, inputEL, inputList, inputType, listen, mm, prevTime, startX, tableCellList, today, yyyy;
      UIViewContainerScroll = document.getElementsByClassName('UIViewContainer');
      tableCellList = document.getElementsByTagName('li');
      cellClass = 'UITableCell';
      prevTime = null;
      listen = null;
      if (App.Device === 'ios') {
        for (cell in tableCellList) {
          tableCellList[cell].onclick = function(event) {
            return this.className = this.className + ' selected';
          };
          tableCellList[cell].ontouchstart = function(event) {
            var _this = this;
            return listen = setTimeout(function() {
              return _this.className = _this.className + ' selected';
            }, 100);
          };
          tableCellList[cell].ontouchend = function(event) {
            if (App.UIRefresh && App.UIUseRefresh) {
              $('#UILoader').empty();
            }
            if (App.UIRefresh === false && App.UIUseRefresh) {
              $('.UIViewHolder').removeClass('UIViewEndRefresh').addClass('UIViewRefreshing');
              return new ResfreshEnd();
            }
          };
        }
        if (UIViewContainerScroll.length === 1) {
          UIScrollWatch = UIViewContainerScroll[0];
        } else {
          UIScrollWatch = UIViewContainerScroll[1];
        }
        if (App.Device === 'android') {
          window.onscroll = function() {
            var _results;
            clearTimeout(listen);
            _results = [];
            for (cell in tableCellList) {
              _results.push(tableCellList[cell].className = cellClass);
            }
            return _results;
          };
        } else {
          UIScrollWatch.onscroll = function() {
            var child, childHeight, childOffsetBottom, childOffsetTop;
            child = $(this).children(":first");
            childHeight = child.height();
            childOffsetTop = child.offset().top;
            childOffsetBottom = childHeight - childOffsetTop;
            clearTimeout(listen);
            for (cell in tableCellList) {
              tableCellList[cell].className = cellClass;
            }
            if (App.UIRefresh && App.UIUseRefresh) {
              return new _RefreshView(childOffsetTop);
            }
          };
        }
      }
      inputList = document.getElementsByTagName('input');
      if (inputList.length >= 1) {
        for (input in inputList) {
          inputEL = inputList[input];
          inputType = inputList[input].className;
          if (inputType === 'range') {
            id = inputList[input].id;
            input = document.getElementById(id);
            input.onchange = function() {
              var value;
              value = (this.value - this.min) / (this.max - this.min);
              return this.style.backgroundImage = ["-webkit-gradient(", "linear, ", "left top, ", "right top, ", "color-stop(" + value + ", " + Config.UISliderBGColor + "), ", "color-stop(" + value + ", " + Config.UISliderColor + ")", ")"].join("");
            };
          }
          if (inputType === 'checkbox' || inputType === 'radio') {
            id = inputList[input].id;
            input = document.getElementById(id);
            startX = null;
            input.ontouchstart = function(event) {
              startX = ($('#' + id).offset().left) + 18;
              return $('#' + id).attr('checked', true);
            };
            input.ontouchmove = function(event) {
              var moveX;
              moveX = event.changedTouches[0].pageX;
              console.log(startX - moveX);
              if (((startX - moveX) < -10) && this.checked === false) {
                this.checked = true;
              }
              if (((startX - moveX) > 10) && this.checked) {
                return this.checked = false;
              }
            };
          }
          if (inputType === 'date') {
            today = new Date();
            dd = today.getDate();
            mm = today.getMonth() + 1;
            yyyy = today.getFullYear();
            if (dd < 10) {
              dd = "0" + dd;
            }
            if (mm < 10) {
              mm = "0" + mm;
            }
            today = yyyy + "-" + mm + "-" + dd;
            inputList[input].value = today;
            inputList[input].style.color = Config.UIDatePickerFontColor;
          }
        }
      }
      if (App.MutationObserver === void 0 && App.PageTransitionDirection !== 'initialView') {
        return this.transitionPage(App.PageTransitionDirection);
      }
    };

    return _UIView;

  })();

  ResfreshEnd = (function() {
    function ResfreshEnd() {
      setTimeout(function() {
        var createWheelEl, i;
        window.spinner.stop();
        createWheelEl = function(i) {
          var spinnerWheel;
          spinnerWheel = $('<div>', {
            'id': i,
            'class': 'spinnerWheel'
          });
          $('#UILoader').append(spinnerWheel);
          return spinnerWheel.css({
            position: 'absolute',
            width: (5 + 2) + 'px',
            height: 2 + 'px',
            background: '#000',
            transformOrigin: 'left',
            transform: 'rotate(' + ~~(360 / 12 * i) + 'deg) translate(' + 6 + 'px' + ',0)',
            borderRadius: (1 * 2 >> 1) + 'px'
          });
        };
        i = 0;
        while (i < 11) {
          createWheelEl(i);
          i++;
        }
        $('#UILoader').removeClass('UISpinnerOpening').addClass('UISpinnerClosing');
        $('.UIViewHolder').removeClass('UIViewRefreshing').addClass('UIViewEndRefresh');
        setTimeout(function() {
          return $('#UILoader').removeClass('UISpinnerClosing').empty();
        }, 350);
        return App.UIRefresh = true;
      }, 2000);
    }

    return ResfreshEnd;

  })();

  window._UIAboutView = (function(_super) {
    __extends(_UIAboutView, _super);

    function _UIAboutView() {
      _ref = _UIAboutView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    _UIAboutView.prototype.buildPage = function(UIPageData, UIPageID) {
      var _this = this;
      $('#' + UIPageID).find('.UINavigationBar').append(eval(this.UINavigationIconLeft).addClass('icon-arrow-prev').on('click', function() {
        $('#' + UIPageID).find('[data-role="link"]').off('click');
        return new _UIHomeView(App.UIHistory[App.UIHistoryIndex], 'right');
      }));
      $('#' + UIPageID).find('.UIViewContainer').append(eval(this.UISimpleView).append(eval(this.UILabel).html(UIPageData.content)));
      return this.addUiActions();
    };

    return _UIAboutView;

  })(_UIView);

  window._UIAllListsView = (function(_super) {
    __extends(_UIAllListsView, _super);

    function _UIAllListsView() {
      _ref1 = _UIAllListsView.__super__.constructor.apply(this, arguments);
      return _ref1;
    }

    _UIAllListsView.prototype.buildPage = function(UIPageData, UIPageID) {
      var i,
        _this = this;
      $('#' + UIPageID).find('.UINavigationBar').append(eval(this.UINavigationIconLeft).addClass('icon-arrow-prev').on('click', function() {
        return new _UIHomeView(App.UIHistory[App.UIHistoryIndex], 'right');
      }));
      this.IsUITableView = true;
      $('#' + UIPageID).find('.UIViewContainer').append(eval(this.UITableView).addClass('hasArrows'));
      UIPageData = UIPageData.content;
      i = 0;
      while (i < UIPageData.length) {
        $('#' + UIPageID).find('.UITableView').append(eval(this.UITableCell).attr({
          'data-index': i,
          'data-link': UIPageData[i].link
        }).text(UIPageData[i].name).on('click', function(event) {
          $('#' + UIPageID).find('[data-role="link"]').off('click');
          return setTimeout(function() {
            var dataIndex, index, link, myclass;
            dataIndex = event.target.attributes[2];
            index = parseInt(dataIndex.value);
            link = event.target.attributes[3].value;
            myclass = window[link];
            return new myclass(UIPageData[index], 'left');
          }, 0);
        }));
        i++;
      }
      return this.addUiActions();
    };

    return _UIAllListsView;

  })(_UIView);

  window._UIDetailView = (function(_super) {
    __extends(_UIDetailView, _super);

    function _UIDetailView() {
      _ref2 = _UIDetailView.__super__.constructor.apply(this, arguments);
      return _ref2;
    }

    _UIDetailView.prototype.buildPage = function(UIPageData, UIPageID) {
      var _this = this;
      $('#' + UIPageID).find('.UINavigationBar').append(eval(this.UINavigationIconLeft).addClass('icon-arrow-prev').on('click', function() {
        $('#' + UIPageID).find('[data-role="link"]').off('click');
        return new _UIHomeView(App.UIHistory[App.UIHistoryIndex], 'right');
      }));
      $('#' + UIPageID).find('.UIViewContainer').append(eval(this.UISimpleView).append(eval(this.UILabelHeadline).text(UIPageData.name), eval(this.UILabel).text(UIPageData.content)));
      return this.addUiActions();
    };

    return _UIDetailView;

  })(_UIView);

  window._UIDynamicListDetailView = (function(_super) {
    __extends(_UIDynamicListDetailView, _super);

    function _UIDynamicListDetailView() {
      _ref3 = _UIDynamicListDetailView.__super__.constructor.apply(this, arguments);
      return _ref3;
    }

    _UIDynamicListDetailView.prototype.buildPage = function(UIPageData, UIPageID) {
      var _this = this;
      $('#' + UIPageID).find('.UINavigationBar').append(eval(this.UINavigationIconLeft).addClass('icon-arrow-prev').on('click', function() {
        $('#' + UIPageID).find('[data-role="link"]').off('click');
        return new _UIDynamicListView(App.UIHistory[App.UIHistoryIndex], 'right');
      }));
      $('#' + UIPageID).find('.UIViewContainer').append(eval(this.UISimpleView).append(eval(this.UILabelHeadline).text(UIPageData.name), eval(this.UILabel).text(UIPageData.content)));
      return this.addUiActions();
    };

    return _UIDynamicListDetailView;

  })(_UIView);

  window._UIDynamicListView = (function(_super) {
    __extends(_UIDynamicListView, _super);

    function _UIDynamicListView() {
      _ref4 = _UIDynamicListView.__super__.constructor.apply(this, arguments);
      return _ref4;
    }

    _UIDynamicListView.prototype.buildPage = function(UIPageData, UIPageID) {
      var i,
        _this = this;
      $('#' + UIPageID).find('.UINavigationBar').append(console.log('append'), eval(this.UINavigationIconLeft).addClass('icon-arrow-prev').on('click', function() {
        return new _UIAllListsView(App.UIHistory[App.UIHistoryIndex], 'right');
      }));
      this.IsUITableView = true;
      $('#' + UIPageID).find('.UIViewContainer').append(eval(this.UITableView).addClass('hasArrows'));
      UIPageData = UIPageData.content;
      i = 0;
      while (i < UIPageData.length) {
        $('#' + UIPageID).find('.UITableView').append(eval(this.UITableCell).attr('data-index', i).text(UIPageData[i].name).on('click', function(event) {
          return setTimeout(function() {
            var dataIndex, index;
            dataIndex = event.target.attributes[2];
            index = parseInt(dataIndex.value);
            return new _UIDynamicListDetailView(UIPageData[index], 'left');
          }, 0);
        }));
        i++;
      }
      return this.addUiActions();
    };

    return _UIDynamicListView;

  })(_UIView);

  window._UIElementsListView = (function(_super) {
    __extends(_UIElementsListView, _super);

    function _UIElementsListView() {
      _ref5 = _UIElementsListView.__super__.constructor.apply(this, arguments);
      return _ref5;
    }

    _UIElementsListView.prototype.buildPage = function(UIPageData, UIPageID) {
      var _this = this;
      $('#' + UIPageID).find('.UINavigationBar').append(eval(this.UINavigationIconLeft).addClass('icon-arrow-prev').on('click', function() {
        $('#' + UIPageID).find('[data-role="link"]').off('click');
        return new _UIHomeView(App.UIHistory[App.UIHistoryIndex], 'right');
      }));
      $('#' + UIPageID).find('.UIViewContainer').append(eval(this.UISimpleView).append(eval(this.UILabel).text(UIPageData.content), eval(this.UICheckbox).attr('id', 'myCheckbox'), eval(this.UILabel).text('Select Date : ').css({
        display: 'inline-block'
      }), eval(this.UIDatePicker), eval(this.UISlider).attr('id', 'mySlider').val(20)));
      return this.addUiActions();
    };

    return _UIElementsListView;

  })(_UIView);

  window._UIHomeView = (function(_super) {
    __extends(_UIHomeView, _super);

    function _UIHomeView() {
      _ref6 = _UIHomeView.__super__.constructor.apply(this, arguments);
      return _ref6;
    }

    _UIHomeView.prototype.buildPage = function(UIPageData, UIPageID) {
      var i,
        _this = this;
      App.UIUseRefresh = true;
      App.UIRefresh = true;
      this.IsUITableView = true;
      $('#' + UIPageID).find('.UIViewContainer').append(eval(this.UITableView).addClass('hasArrows'));
      UIPageData = UIPageData.content;
      i = 0;
      while (i < UIPageData.length) {
        $('#' + UIPageID).find('.UITableView').append(eval(this.UITableCell).attr({
          'data-index': i,
          'data-link': UIPageData[i].link
        }).text(UIPageData[i].name).on('click', function(event) {
          $('#' + UIPageID).find('[data-role="link"]').off('click');
          return setTimeout(function() {
            var dataIndex, index, link, myclass;
            dataIndex = event.target.attributes[2];
            index = parseInt(dataIndex.value);
            link = event.target.attributes[3].value;
            myclass = window[link];
            return new myclass(UIPageData[index], 'left');
          }, 0);
        }));
        i++;
      }
      return this.addUiActions();
    };

    return _UIHomeView;

  })(_UIView);

  _UIListItemDetailView = (function(_super) {
    __extends(_UIListItemDetailView, _super);

    function _UIListItemDetailView() {
      _ref7 = _UIListItemDetailView.__super__.constructor.apply(this, arguments);
      return _ref7;
    }

    _UIListItemDetailView.prototype.buildPage = function(UIPageData, UIPageID) {
      var _this = this;
      $('#' + UIPageID).find('.UINavigationBar').append(eval(this.UINavigationIconLeft).addClass('icon-arrow-prev').on('click', function() {
        console.log('click');
        $('#' + UIPageID).find('[data-role="link"]').off('click');
        return new _UIStaticListView(App.UIHistory[App.UIHistoryIndex], 'right');
      }));
      $('#' + UIPageID).find('.UIViewContainer').append(eval(this.UISimpleView).append(eval(this.UILabelHeadline).text(UIPageData.name), eval(this.UILabel).text(UIPageData.content)));
      return this.addUiActions();
    };

    return _UIListItemDetailView;

  })(_UIView);

  window._UIStaticListView = (function(_super) {
    __extends(_UIStaticListView, _super);

    function _UIStaticListView() {
      _ref8 = _UIStaticListView.__super__.constructor.apply(this, arguments);
      return _ref8;
    }

    _UIStaticListView.prototype.buildPage = function(UIPageData, UIPageID) {
      var i,
        _this = this;
      $('#' + UIPageID).find('.UINavigationBar').append(eval(this.UINavigationIconLeft).addClass('icon-arrow-prev').on('click', function() {
        return new _UIAllListsView(App.UIHistory[App.UIHistoryIndex], 'right');
      }));
      this.IsUITableView = true;
      $('#' + UIPageID).find('.UIViewContainer').append(eval(this.UITableView).addClass('hasArrows'));
      UIPageData = UIPageData.content;
      i = 0;
      while (i < 50) {
        $('#' + UIPageID).find('.UITableView').append(eval(this.UITableCell).attr('data-index', i).text('Item ' + i).on('click', function(event) {
          return setTimeout(function() {
            UIPageData = {};
            UIPageData.title = 'Static Title';
            UIPageData.content = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, corporis, ullam dolorum nisi quia ut labore mollitia consequuntur. Hic, vitae, voluptatibus expedita cumque nihil velit non voluptate rerum repellendus nemo.';
            return new _UIListItemDetailView(UIPageData, 'left');
          }, 0);
        }));
        i++;
      }
      return this.addUiActions();
    };

    return _UIStaticListView;

  })(_UIView);

}).call(this);
