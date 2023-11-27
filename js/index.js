// start with name of Allah

console.log("Lets get started...");

let EMBED_CODE_ID;
let desktopEmbedCode = 'vidalytics_embed_ohXsJtypwjkyxM4r';
let mobileEmbedCode = 'vidalytics_embed_RKiTS6LFVLhm7On8';

// ////////////////////////// //
// ///////////////////////// //

let mainHeading = document.querySelector("#heading");

// show video depending upon width

let mobileVideoContainer = document.querySelector("#elVideo_mobile");
let desktopVideoContainer = document.querySelector("#elVideo_desktop");

let widthStatement = window.matchMedia("(max-width: 768px");

if (widthStatement.matches) {
    desktopVideoContainer.style.display = "none";
    mobileVideoContainer.style.display = "block";
    EMBED_CODE_ID = mobileEmbedCode;
    start();
}
else {
    mobileVideoContainer.style.display = "none";
    desktopVideoContainer.style.display = "block";
    EMBED_CODE_ID = desktopEmbedCode;
    start();
}

window.addEventListener("resize", () => {
    if (widthStatement.matches) {
        desktopVideoContainer.style.display = "none";
        mobileVideoContainer.style.display = "block";
        EMBED_CODE_ID = mobileEmbedCode;
        start();
    }
    else {
        mobileVideoContainer.style.display = "none";
        desktopVideoContainer.style.display = "block";
        EMBED_CODE_ID = desktopEmbedCode;
        start();
    }
})

// //////////////////////////////////// //
// /////////////////////////////////// //

// handle full screen on play and pause

function start() {

    let vidalyticsPlayerAPI = null;

    function initializePlayerAPI() {
        console.log('initializePlayerAPI()');
        var player = getPlayer();
        if (player._player) {
            vidalyticsPlayerAPI = player;
            runAfterInitializingPlayerApi();
            return;
        }
        setTimeout(initializePlayerAPI, 100);
    }


    function getPlayer() {
        console.log('getPlayer()');
        var embeds = (_vidalytics || {}).embeds || {};
        if (embeds[EMBED_CODE_ID]) {
            return embeds[EMBED_CODE_ID].player || {};
        }
        return {};
    }


    initializePlayerAPI();

    function runAfterInitializingPlayerApi() {
        let videoPlayer = vidalyticsPlayerAPI._player;
        // play event
        videoPlayer.addEventHandler("onPlay", () => {
            console.log("Video is played.")
            videoPlayer.unmute();
            let clickForSoundBtn = document.querySelector(".clickForSound-parent");
            let videoSection = document.querySelector(".sec1-video-bx");
            let videoSectionParent = document.querySelector(".sec1-video");
            let videoControls = document.querySelector(".bmpui-container-wrapper");
            let videoContainerParent = document.querySelector(".videoPlayerContainer");
            let videoPlayerUpdated = document.querySelector(`#${EMBED_CODE_ID}`);
            clickForSoundBtn.style.display = "none";
            videoContainerParent.classList.add("full-width");
            videoPlayerUpdated.classList.add("full-width");
            videoSectionParent.classList.add("full-width")
            videoPlayerUpdated.firstElementChild.classList.add("full-width")
            videoSection.classList.add("full-width")
            videoPlayerUpdated.firstElementChild.style.backgroundColor = "#000";
            videoSection.classList.add("no-padding");
            videoSection.scrollIntoView();
            vidalyticsPlayerAPI.play();
            console.log(vidalyticsPlayerAPI.config.playback.autoplay.onlyMuted)
            vidalyticsPlayerAPI.config.playback.autoplay.onlyMuted = false;
            console.log(vidalyticsPlayerAPI.config.playback.autoplay.onlyMuted)
            vidalyticsPlayerAPI.autoplayStatus = "unmuted";
            console.log(vidalyticsPlayerAPI)
            vidalyticsPlayerAPI.seekTo(0);
            mainHeading.style.display = "none";
            videoControls.style.display = "block !important"
            videoControls.click();
            videoSection.scrollIntoView();
        })
        // pause event
        videoPlayer.addEventHandler("onPaused", () => {
            console.log("Video is paused.")
        })
        setTimeout(() => {
            let clickForSoundBtn = document.querySelector(".clickForSound-parent");
            let videoSection = document.querySelector(".sec1-video-bx");
            let videoSectionParent = document.querySelector(".sec1-video");
            let videoControls = document.querySelector(".bmpui-container-wrapper");
            let videoContainerParent = document.querySelector(".videoPlayerContainer");
            console.log(clickForSoundBtn)
            // clickForSoundBtn.addEventListener("click", () => {
            //     let videoPlayerUpdated = document.querySelector(`#${EMBED_CODE_ID}`);
            //     clickForSoundBtn.style.display = "none";
            //     videoContainerParent.classList.add("full-width");
            //     videoPlayerUpdated.classList.add("full-width");
            //     videoSectionParent.classList.add("full-width")
            //     videoPlayerUpdated.firstElementChild.classList.add("full-width")
            //     videoSection.classList.add("full-width")
            //     videoPlayerUpdated.firstElementChild.style.backgroundColor = "#000";
            //     videoSection.classList.add("no-padding");
            //     videoSection.scrollIntoView();
            //     vidalyticsPlayerAPI.play();
            //     console.log(vidalyticsPlayerAPI.config.playback.autoplay.onlyMuted)
            //     vidalyticsPlayerAPI.config.playback.autoplay.onlyMuted = false;
            //     console.log(vidalyticsPlayerAPI.config.playback.autoplay.onlyMuted)
            //     vidalyticsPlayerAPI.autoplayStatus = "unmuted";
            //     console.log(vidalyticsPlayerAPI)
            //     vidalyticsPlayerAPI.seekTo(0);
            //     mainHeading.style.display = "none";
            //     videoControls.style.display = "block !important"
            //     videoControls.click();
            //     videoSection.scrollIntoView();
            //     videoPlayerUpdated.addEventListener("click", () => {
            //         if (clickForSoundBtn.style.display === "none") {
            //             videoControls.style.display = "none !important"
            //             clickForSoundBtn.style.display = "flex";
            //             mainHeading.style.display = "block";
            //             videoSection.classList.remove("no-padding");
            //             videoPlayerUpdated.classList.remove("full-width");
            //             videoContainerParent.classList.remove("full-width");
            //             videoSection.classList.remove("full-width")
            //             videoPlayerUpdated.firstElementChild.classList.remove("full-width")
            //         }
            //     })
            // })
        }, 1000);
    }

}