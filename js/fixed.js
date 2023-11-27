// select desktop and mobile videos
let desktopVideoEmbed = document.querySelector("#elVideo_desktop");
let mobileVideoEmbed = document.querySelector("#elVideo_mobile");
let packagesContainer1 = document.querySelector("#selectpkg1");
let packagesContainer2 = document.querySelector("#selectpkg2");
let productsDetailsContainer = document.querySelector(".section-3");
let mainVideoBox = document.querySelector(".sec1-video-bx")
let mainHeading = document.querySelector("#heading")
let shortDetails = document.querySelector(".sec1-mid")
let embedCodeId = `vidalytics_embed_ohXsJtypwjkyxM4r`;
let desktopEmbedCodeId = `vidalytics_embed_ohXsJtypwjkyxM4r`;
let mobileEmbedCodeId = `vidalytics_embed_RKiTS6LFVLhm7On8`;
let widthCheckStatement = window.matchMedia("(max-width:768px)");
if (widthCheckStatement.matches) {
    embedCodeId = mobileEmbedCodeId;
    start();
}
else {
    embedCodeId = desktopEmbedCodeId;
    start();
}
window.addEventListener("resize", () => {
    if (widthCheckStatement.matches) {
        embedCodeId = mobileEmbedCodeId;
        start();
    }
    else {
        embedCodeId = desktopEmbedCodeId;
        start();
    }
})
// old jquery
$(document).ready(function () {
    if ($('.left-list p').length > 3 && $('.right-list p').length > 2 && $('.mob-list p').length > 3) {
        $('.right-list p:gt(1), .left-list p:gt(2), .mob-list p:gt(2)').hide();
        $('.view-moreBtn').show();
    }
    $('.view-moreBtn').on('click', function () {
        $('.right-list p:gt(1), .left-list p:gt(2), .mob-list p:gt(2)').toggle();
        $(this).text() === 'View More' ? $(this).text('View Less') : $(this).text('View More');
    });
    $('.accordion').accordion({
        defaultOpen: 'hd-one',
        speed: 'slow'
    });
    $('.s1-mid-row').slick({
        dots: true,
        arrows: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 9999,
            settings: "unslick"
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
});

function start() {

    let vidalyticsPlayerAPI = null;

    function initializePlayerAPI() {
        var player = getPlayer();
        if (player._player) {
            vidalyticsPlayerAPI = player;
            callBackAfterPlayerInitialized();
            return;
        }

        setTimeout(initializePlayerAPI, 100);
    }
    initializePlayerAPI();

    function getPlayer() {
        var embeds = (_vidalytics || {}).embeds || {};
        if (embeds[embedCodeId]) {
            return embeds[embedCodeId].player || {};
        }
        return {};
    }

    let checkCookie = localStorage.getItem("revealmeplease");
    if (checkCookie) {
        console.log(checkCookie)
        if (checkCookie === "true") {
            packagesContainer1.classList.add("show");
            packagesContainer2.classList.add("show");
            productsDetailsContainer.classList.add("show");
            mainVideoBox.classList.add("show")
            shortDetails.classList.add("no-display")
            mainHeading.classList.add("no-display")
        }
    }


    function callBackAfterPlayerInitialized() {
        let videoPlayer = vidalyticsPlayerAPI._player;
        let mainVideoContainer = document.querySelector(".videoPlayerContainer");
        let mainVideoParent = document.querySelector(".sec1-video")
        let mainVideoHolder = document.querySelector(".video-holder");
        setTimeout(() => {

            let btns = document.querySelectorAll(".bmpui-container-wrapper");
            btns.forEach((btn) => {
                btn.addEventListener("touchstart", () => {
                    mainVideoBox.scrollIntoView()
                    if (!desktopVideoEmbed.classList.contains("sticky")) {
                        videoPlayer.addEventHandler("onTimeChanged", () => {
                            let videoPlayTime = vidalyticsPlayerAPI.getCurrentVideoTime();
                            if (videoPlayTime > 10 && videoPlayTime < 12) {
                                packagesContainer1.classList.add("show");
                                packagesContainer2.classList.add("show");
                                productsDetailsContainer.classList.add("show");
                                mainVideoBox.classList.add("show")
                                shortDetails.classList.add("no-display")
                                mainHeading.classList.add("no-display")
                                packagesContainer1.scrollIntoView();
                                localStorage.setItem("revealmeplease", true)
                            }
                            else {
                                packagesContainer1.prototype.scrollIntoView = function () { };
                            }
                        })
                    }
                })
                btn.addEventListener("click", () => {
                    if (!desktopVideoEmbed.classList.contains("sticky")) {
                        videoPlayer.addEventHandler("onTimeChanged", () => {
                            let videoPlayTime = vidalyticsPlayerAPI.getCurrentVideoTime();
                            if (videoPlayTime > 10 && videoPlayTime < 12) {
                                packagesContainer1.classList.add("show");
                                packagesContainer2.classList.add("show");
                                productsDetailsContainer.classList.add("show");
                                mainVideoBox.classList.add("show")
                                shortDetails.classList.add("no-display")
                                mainHeading.classList.add("no-display")
                                packagesContainer1.scrollIntoView({ behavior: "smooth", });
                                localStorage.setItem("revealmeplease", true)
                            }
                            else {
                                packagesContainer1.prototype.scrollIntoView = function () { };
                            }
                        })
                    }
                })
            })

        }, 1000);
    }


}

// (async () => {
//     await import('https://code.jquery.com/jquery-2.2.4.min.js')
//     // Library ready
//     console.log(jQuery)
//   })()

// let widgetContainer = document.querySelector("iframe");
// widgetContainer.setAttribute("id","123");
// $("#123").load(window.location.href + "#123" );
