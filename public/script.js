$(function() {
  var header = $('.boss-page-header'),
    headerDropdown = header.find('.boss-page-header__dropdown'),
    headerDropdownScroll = headerDropdown.find(
      '.boss-page-header__dropdown-scroll'
    ),
    headerDropdownToggle = header.find(
      '.boss-page-header__action, .boss-page-header__control'
    ),
    headerDropdownClose = header.find(
      '.boss-page-header__dropdown-label_role_close'
    );

  headerDropdownScroll.each(function() {
    var scroll = new IScroll(this, {
      scrollbars: true,
      mouseWheel: true,
      interactiveScrollbars: true,
      shrinkScrollbars: 'scale',
      fadeScrollbars: false,
      click: true
    });

    function refreshDropdownScroll() {
      setTimeout(function() {
        scroll.refresh();
      }, 800);
    }
    headerDropdown.on('dropdownRefresh', refreshDropdownScroll);
  });

  function toggleHeaderDropdown(e) {
    e.preventDefault();
    e.stopPropagation();

    var targetLinkId = $(this).data('dropdown');

    var targetHeaderDropdown = headerDropdown.filter(function() {
      return $(this).data('dropdown') === targetLinkId;
    });

    if (
      targetHeaderDropdown.hasClass('boss-page-header__dropdown_state_opened')
    ) {
      headerDropdown.removeClass('boss-page-header__dropdown_state_opened');
      headerDropdownToggle.removeClass(
        'boss-page-header__action_state_active boss-page-header__control_state_active'
      );
    } else {
      headerDropdownToggle.removeClass(
        'boss-page-header__action_state_active boss-page-header__control_state_active'
      );
      headerDropdown.removeClass('boss-page-header__dropdown_state_opened');
      targetHeaderDropdown.addClass('boss-page-header__dropdown_state_opened');

      if ($(this).hasClass('boss-page-header__action')) {
        $(this).addClass('boss-page-header__action_state_active');
      } else {
        $(this).addClass('boss-page-header__control_state_active');
      }

      headerDropdown.trigger('dropdownRefresh');
    }
  }

  function closeHeaderDropdown(e) {
    e.preventDefault();
    e.stopPropagation();

    headerDropdownToggle.removeClass(
      'boss-page-header__action_state_active boss-page-header__control_state_active'
    );
    headerDropdown.removeClass('boss-page-header__dropdown_state_opened');
  }

  headerDropdown.on('click', function(e) {
    e.stopPropagation();
  });
  headerDropdownToggle.on('click', toggleHeaderDropdown);
  headerDropdownClose.on('click', closeHeaderDropdown);
});

// Board toggle demo js
var board = $('.boss-board');

board.each(function() {
  var boardSwitch = $(this).find('.boss-board__switch'),
    boardContent = $(this).find('.boss-board__content');

  function toggleBoard(e) {
    e.preventDefault();
    boardSwitch.toggleClass('boss-board__switch_state_opened');
    boardContent
      .slideToggle()
      .end()
      .toggleClass('boss-board__content_state_opened');
  }

  boardSwitch.on('click', toggleBoard);
});

// Content Switcher demo js
var contentSwitcher = $('.boss-content-switcher');
console.log(contentSwitcher);

contentSwitcher.each(function() {
  var contentSwitcherChapter = $(this).find('.boss-content-switcher__chapter'),
    contentSwitcherLink = $(this).find('.boss-content-switcher__nav-link');

  function toggleChapter(e) {
    e.preventDefault();
    var targetLinkId = $(this).data('chapter');

    var targetChapter = contentSwitcherChapter.filter(function() {
      return $(this).data('chapter') === targetLinkId;
    });

    if (
      !targetChapter.hasClass('boss-content-switcher__chapter_state_visible')
    ) {
      contentSwitcherChapter.removeClass(
        'boss-content-switcher__chapter_state_visible'
      );
      contentSwitcherLink.removeClass(
        'boss-content-switcher__nav-link_state_active'
      );
      targetChapter.addClass('boss-content-switcher__chapter_state_visible');
      $(this).addClass('boss-content-switcher__nav-link_state_active');
    }
  }

  contentSwitcherLink.on('click', toggleChapter);
});

// React select demo interaction. For the demo purposes only
$(function() {
  $('.Select').css('overflow', 'hidden');
  $('.Select-control').on('click', function(e) {
    e.stopPropagation();
    var select = $(this).closest('.Select');
    if (select.hasClass('is-open')) {
      select.removeClass('is-focused is-open').css('overflow', 'hidden');
    } else {
      select.addClass('is-focused is-open').css('overflow', 'visible');
    }
  });

  $('html').on('click', function() {
    $('.Select')
      .removeClass('is-focused is-open')
      .css('overflow', 'hidden');
  });
});

// React datepicker demo interaction. For the demo purposes only
$(function() {
  $('.react-datepicker__portal').hide();
  $('.react-datepicker__input-container').on('click', function(e) {
    e.stopPropagation();
    $('.react-datepicker__portal').fadeToggle();
  });

  $('html').on('click', function() {
    $('.react-datepicker__portal').hide();
  });
  $('.react-datepicker').on('click', function(e) {
    e.stopPropagation();
  });
});
