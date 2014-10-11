
var MaxSlidePage=2; //To control the slid max number
    function resize() {
        TOPHEIGHT = Math.min(1024, window.innerHeight), REALSCROLLSTART = 302 - Math.max(0, (TOPHEIGHT - 814 - 110) / 2), $("#carrousel").css("height", TOPHEIGHT + "px"), $(".top-header")[0].style.backgroundSize = $(".top-header").height() / 969 > $(".top-header").width() / 1999 ? "auto " + ($(".top-header").height() + 100) + "px" : $(".top-header").width() + "px auto", $("#features").css("background-size", window.innerWidth > 2e3 ? "cover" : ""), scroll()
    }
function ajax_test()
{
    $.post("http://22500e31b5a12457.sinaapp.com/test/",{suggest:"kkkk"},function(result)
    {
        console.log(result);
    });
}
    function scroll() {
        var scrollTop = $(document).scrollTop()
        !function () {
            if (REALSCROLLSTART > scrollTop)navbar.stop(), hiding = !1, navbar.removeClass("navbar-scrolled"), navbar.css("margin-top", "0px")
            else if (500 > scrollTop)navbar.stop(), hiding = !1, navbar.removeClass("navbar-scrolled"), navbar.css("margin-top", REALSCROLLSTART - scrollTop + "px")
            else {
                if (!(scrollTop < Math.min(600, TOPHEIGHT - 100)))return void(navbar.overlay || (navbar.css("margin-top", ""), navbar.css("top", "-51px"), navbar.addClass("navbar-scrolled"), navbar.animate({top: "0"}, 200), navbar.overlay = !0))
                hiding || navbar.overlay || (navbar.removeClass("navbar-scrolled"), navbar.css("margin-top", "-100px"))
            }
            navbar.overlay && !hiding && (hiding = !0, navbar.animate({top: "-51px"}, 200, function () {
                navbar.css("top", "0"), navbar.css("margin-top", "-100px"), hiding = !1
            })), navbar.overlay = !1
        }()
        var diffPayTop = topOfScreenshot - topOfPayOff - scrollTop
        if (REALSCROLLSTART > scrollTop)if (scrollTop > 0) {
            var opacity = 1 - (initialDiffPayTop - diffPayTop) / initialDiffPayTop
            1 >= opacity && (more.css({opacity: opacity}), payoff.css({opacity: opacity}))
        } else more.css({opacity: 1}), payoff.css({opacity: 1})
        REALSCROLLSTART + TOPHEIGHT >= scrollTop && !function () {
            var yPos = -1 * (scrollTop / 12), coords = "left " + yPos + "px"
            header.css({"background-position": coords})
            var minHeight = TOPHEIGHT + scrollTop
            header.css("min-height", minHeight), pages.css("top", (scrollTop > 0 ? scrollTop : 0) + "px"), buttons.css("margin-top", scrollTop / 2 + "px"), scrollTop >= REALSCROLLSTART && (header.css({"min-height": TOPHEIGHT + REALSCROLLSTART}), screenshot.css({transform: "translate(0," + (-1 * scrollTop + (scrollTop - REALSCROLLSTART) / 5) + "px)"})), 290 > scrollTop && screenshot.css({transform: "translate(0, " + -1 * scrollTop + "px)"})
        }(), !autoNextActived && scrollTop > 290 + TOPHEIGHT && ($("#carrousel2-page1 video")[0].play(), autoNextActived = !0), !featuresExpanded && scrollTop > 1850 + TOPHEIGHT && (toggleExtraFeatures(), featuresExpanded = !0)
        var yPos, coords
        yPos = -1 * (scrollTop / 7) + 300, coords = "left " + yPos + "px", $("#collaboration").css({"background-position": coords}), yPos = -1 * (scrollTop / 5) + 250, coords = "50% " + yPos + "px", $("#features").css({"background-position": coords})
    }

    function scrollToAnchor(aid) {
        var aTag = $("a[name='" + aid + "']")
        $("html,body").animate({scrollTop: aTag.offset().top + REALSCROLLSTART - 50}, "slow")
    }

    function slide(curPage, nextPage, fromLeft) {
        nextPage.css("margin-left", (fromLeft ? "" : "-") + window.innerWidth + "px"), nextPage.addClass("active"), curPage.animate({"margin-left": (fromLeft ? "-" : "") + window.innerWidth + "px"}, 500, "easeInOutQuad"), nextPage.animate({"margin-left": "0"}, 500, "easeInOutQuad", function () {
            curPage.removeClass("active")
        })
    }

    function slideCollab(curPage, nextPage, fromLeft) {
        var curId = parseInt(curPage[0].id.substr(-1), 10), nextId = parseInt(nextPage[0].id.substr(-1), 10)
        if (currentPage2 != nextId) {
            $("#carrousel2 .carrousel-navigation #" + curPage[0].id.split("-")[1]).removeClass("active"), $("#carrousel2 .carrousel-navigation #" + nextPage[0].id.split("-")[1]).addClass("active"), curPage.find("video")[0].pause()
            var video = nextPage.find("video")[0]
            video.currentTime = 0, video.play(), void 0 === fromLeft && (fromLeft = nextId > curId), slide(curPage, nextPage, fromLeft), currentPage2 = parseInt(nextId, 10)
        }
    }

    function next() {
        var curPage = $("#carrousel2 .page.active"), nextPage = $("#carrousel2-page" + (currentPage2 + 1))
        nextPage.length || (nextPage = $("#carrousel2-page1")), slideCollab(curPage, nextPage, !0)
    }

    function blink() {
        $("#cursor_typing").fadeTo(100, 0, function () {
            setTimeout(function () {
                $("#cursor_typing").fadeTo(100, 1, setTimeout.bind(null, blink, 400))
            }, 400)
        })
    }

    function blink_terminal() {
        $(".sudoblock .cursor").fadeTo(100, 0, function () {
            setTimeout(function () {
                $(".sudoblock .cursor").fadeTo(100, 1, setTimeout.bind(null, blink_terminal, 400))
            }, 400)
        })
    }

    function toggleExtraFeatures() {
        var maxHeight = "1588px"
        features.css("max-height") == maxHeight ? (maxHeight = initialMaxHeight, features.removeClass("expanded"), setTimeout(function () {
            featuresExpandPlusIcon.rotate({animateTo: 0})
        }, 400)) : (features.addClass("expanded"), setTimeout(function () {
            featuresExpandPlusIcon.rotate({animateTo: 45})
        }, 400)), features.animate({"max-height": maxHeight}, 500, "easeInOutQuad")
    }

    var TOPHEIGHT, REALSCROLLSTART, autoNextActived, featuresExpanded, hiding, navbar = $("#navBg"), payoff = $(".payoff"), more = $(".more"), header = $("#top-header"), pages = $("#carrousel .page"), buttons = $("#carrousel .top-carrousel-btn"), btnLeft = $("#top-carrousel-left"), btnRight = $("#top-carrousel-right"), screenshot = $(".screenshots"), featuresExpandButton = $("#features-extra-button"), featuresExpandPlusIcon = $("#features-extra-button img"), features = $("#features"), initialMaxHeight = "924px"
    featuresExpandButton.click(toggleExtraFeatures), $(".feature").click(function () {
        $(this).find("a")[0].click()
    })
    var topOfPayOff = payoff.position().top + 140, topOfScreenshot = screenshot.position().top, initialDiffPayTop = topOfScreenshot - topOfPayOff
    $(window).resize(resize), resize(), $(document).scroll(scroll), $("#learnMore").click(function (event) {
        event.preventDefault(), window.analytics.track("Clicked Learn More link", {label: "index-first"}, analyticsOptions), scrollToAnchor("workspaces")
    }), $("#carrousel .browser-frame").click(function () {
        body.animate({scrollTop: document.body.scrollTop ? 0 : REALSCROLLSTART}, 200)
    })
    var body = $("html, body"), currentPage = 1

    btnLeft.click(function () {
        var curPage = $("#carrousel-page" + currentPage), nextPage = $("#carrousel-page" + --currentPage)
        nextPage.length || (nextPage = $("#carrousel-page" + (currentPage = MaxSlidePage))), document.body.scrollTop ? body.animate({scrollTop: 0}, 200, function () {
            slide(curPage, nextPage)
        }) : slide(curPage, nextPage)
    }), btnRight.click(function () {
        var curPage = $("#carrousel-page" + currentPage), nextPage = $("#carrousel-page" + ++currentPage)
        nextPage.length || (nextPage = $("#carrousel-page" + (currentPage = 1))), document.body.scrollTop ? body.animate({scrollTop: 0}, 200, function () {
            slide(curPage, nextPage, !0)
        }) : slide(curPage, nextPage, !0)
    })
    var currentPage2 = 1, c2buttons = $("#carrousel2 .carrousel-navigation span")
    c2buttons.click(function (e) {
        var curPage = $("#carrousel2 .page.active"), nextPage = $("#carrousel2-" + e.target.id)
        slideCollab(curPage, nextPage)
    })
    var videos = $("#carrousel2 video")
    videos.bind("ended", function () {
        next()
    }), blink(), blink_terminal()
    for (var arr = []; arr.length < 2;) {
        for (var randomnumber = Math.ceil(5 * Math.random()), found = !1, i = 0; i < arr.length; i++)if (arr[i] == randomnumber) {
            found = !0
            break
        }
        found || (arr[arr.length] = randomnumber)
    }
    $("#testimonial" + arr[0]).css({display: "block"}), $("#testimonial" + arr[1]).css({display: "block"}), trackLink("#signUp1", "Clicked Sign Up link", {label: "index-first"}, analyticsOptions), resize()

