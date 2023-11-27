// JavaScript Document
function urlParam(e) {
    var t = new RegExp("[?&]" + e + "=([^&#]*)").exec(window.location.href);
    return null === t ? null : t[1] || 0
}

function paramIsNotUtm(e) {
    return "utm_" !== e.slice(0, 4)
}


var player, timeChange, muteStatus = 0;

function onYouTubeIframeAPIReady() {
    var loaddedVdo = "";
    if ($(window).innerWidth() < 767) {
        var loaddedVdo = "RijabtjfUW4";
    } else {
        var loaddedVdo = "sCgkt4BBFTw";
    }
    var e = 0;
    wsFlags.showControls && (e = 1), player = new YT.Player("video-placeholder", {
        videoId: loaddedVdo,
        playerVars: {
            autoplay: 1,
            modestbranding: 1,
            showinfo: 0,
            rel: 0,
            iv_load_policy: 3,
            autohide: 0,
            controls: e,
            disablekb: 1,
            playsinline: 1,
            cc_load_policy: 0,
            host: "https://www.youtube.com"
        },
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
            onError: onPlayerError
        }
    })
}

function onPlayerStateChange(e) {
    var t = document.querySelector(".playbutton-overlay"),
        o = document.querySelector(".pausebutton-overlay"),
        a = document.querySelector(".mutebutton-overlay"),
        r = document.querySelector(".play-button");
    1 == e.data ? (t.style.display = "none", o.style.display = "block", r.style.display = "none", a.style.display = muteStatus ? "block" : "none", wsFlags.showControls && (t.classList.add("hide"), o.classList.add("hide"), r.classList.add("hide"))) : 2 == e.data ? (t.style.display = "block", o.style.display = "none", r.style.display = "block", a.style.display = muteStatus ? "block" : "none") : 3 == e.data || 0 == e.data || e.data
}

function onPlayerError(e) {
    player.stopVideo();
    var t = document.querySelector(".playbutton-overlay"),
        o = document.querySelector(".pausebutton-overlay"),
        a = document.querySelector(".play-button");
    t.style.display = "block", o.style.display = "none", a.style.display = "block", console.log(e)
}

function onPlayerReady() {
    mutevid(), player.playVideo();
    var e = document.querySelector(".playbutton-overlay"),
        t = document.querySelector(".pausebutton-overlay"),
        o = document.querySelector(".play-button"),
        a = document.querySelector(".mutebutton-overlay");
    0 == muteStatus && (o.style.display = "block", e.style.display = "block"), e.addEventListener("click", (function () {
        player.playVideo()
    })), t.addEventListener("click", (function () {
        player.pauseVideo()
    })), a.addEventListener("click", (function () {
        unmutevid(), player.seekTo(0), player.playVideo()
    }));
    var r = document.querySelector(".watch");
    r && r.addEventListener("click", (function () {
        player.playVideo(), window.scrollTo(0, 0)
    })), setInterval(1e3)
}

function setupVideo() {
    var e = document.createElement("script");
    e.src = "https://www.youtube.com/iframe_api";
    var t = document.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(e, t)
}

function mutevid() {
    player.mute(), player.setVolume(0), muteStatus = 1, document.querySelector(".mutebutton-overlay").style.display = "block"
}

function unmutevid() {
    player.unMute(), player.setVolume(100), muteStatus = 0, document.querySelector(".mutebutton-overlay").style.display = "none"
}

// !(function () {
//     if (window.addEventListener("scroll", (function () {
//         this.pageYOffset - 100 > document.querySelector(".sec1-video-bx").clientHeight ? document.querySelector(".video").classList.add("sticky") : document.querySelector(".video").classList.remove("sticky")
//     })),
//         window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach), window.dataLayer = window.dataLayer || [], localStorage.setItem("controls", 0), window.wsFlags = {}, setupVideo()) { }
// })();

window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
var devscript = document.createElement("script");