
$(document).ready(function() {


    // set localStorage if user visited

    if (localStorage.getItem("hiddenContentShownAgo") != null) {
        // reveal page

            document.querySelector("#hidden_content").style.display = "block";
            document.querySelector("#heading").style.float = "none";
            document.querySelector("#heading").style.visibility = "hidden";
            document.querySelector("#heading").style.height = 0;
            document.querySelector(".sec1-mid").style.display = "none";


    } else {
        // set hiddenContentShownAgo once player reach at that stage
    }


    if ($('.left-list p').length > 3 && $('.right-list p').length > 2 && $('.mob-list p').length > 3) {
        $('.right-list p:gt(1), .left-list p:gt(2), .mob-list p:gt(2)').hide();
        $('.view-moreBtn').show();
    }

    $('.view-moreBtn').on('click', function() {
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

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
}


$(document).scroll(function() {


    var $elem = $('.footer');
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    if (elemTop >= (docViewBottom + 20) || (elemTop + $('#ctabtn-mob').height()) >= (docViewBottom + 134)) {
        if (isScrolledIntoView('.mob-package') === true) {
            $('#ctabtn-mob').css('position', 'relative');

        } else if (isScrolledIntoView('.sec1-video-bx') === true) {
            $('#ctabtn-mob').css('position', 'relative');

        } else if (isScrolledIntoView('.packsec2') === true) {
            $('#ctabtn-mob').css('position', 'relative');

        } else {
            $('#ctabtn-mob').css('position', 'fixed');
        }
    } else {
        $('#ctabtn-mob').css({
            'position': 'relative'
        });
    }

});
var EMBED_CODE_ID = 'vidalytics_embed_ohXsJtypwjkyxM4r'; // update this to match your Vidalytics Embed ID



if (window.matchMedia("(max-width: 770px)").matches) {
    var EMBED_CODE_ID = 'vidalytics_embed_RKiTS6LFVLhm7On8'; // update this to match your Vidalytics Embed ID
    document.getElementById('elVideo_desktop').style.display = 'none';
    document.getElementById('elVideo_mobile').style.display = 'block';
} else {
    var EMBED_CODE_ID = 'vidalytics_embed_ohXsJtypwjkyxM4r'; // update this to match your Vidalytics Embed ID
    document.getElementById('elVideo_desktop').style.display = 'block';
    document.getElementById('elVideo_mobile').style.display = 'none';
}



var vidalyticsPlayerAPI = null;

function initializePlayerAPI() {
    console.log('initializePlayerAPI()');
    var player = getPlayer();
    if (player._player) {
        vidalyticsPlayerAPI = player;
        onPlayerAPIAvailableCallback();
        return;
    }

    setTimeout(initializePlayerAPI, 100);
}
initializePlayerAPI();

function getPlayer() {
    console.log('getPlayer()');
    var embeds = (_vidalytics || {}).embeds || {};
    if (embeds[EMBED_CODE_ID]) {
        return embeds[EMBED_CODE_ID].player || {};
    }
    return {};
}

function onPlayerAPIAvailableCallback() {
    console.log("onPlayerAPIAvailableCallback()");

    // do something related to current video playback time
    vidalyticsPlayerAPI._player.addEventHandler('onPaused', function() {
        console.log('onPaused event');
    });

    vidalyticsPlayerAPI._player.addEventHandler('onPlay', function() {
        console.log('onPlay event');
        var vid_elem = "#" + EMBED_CODE_ID + " video";
        console.log(vid_elem);
        
        var elem = document.querySelector(vid_elem);
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
        //jQuery(vid_elem).addClass("fullscreen");

    });
    vidalyticsPlayerAPI._player.addEventHandler('onPlaybackFinished', function() {
        console.log('onPlaybackFinished event');
    });
    vidalyticsPlayerAPI._player.addEventHandler('onTimeChanged', function() {
        if (vidalyticsPlayerAPI.getCurrentVideoTime() > 10) {
            // do something after 10s of playback
            console.log("Show Content");

            // exit full screen
            if (document.exitFullscreen)
                document.exitFullscreen();
            else if (document.webkitExitFullscreen)
                document.webkitExitFullscreen();
            else if (document.mozCancelFullScreen)
                document.mozCancelFullScreen();
            else if (document.msExitFullscreen)
                document.msExitFullscreen();

            localStorage.setItem("hiddenContentShownAgo", true);
            document.querySelector("#hidden_content").style.display = "block";
            document.querySelector("#heading").style.float = "none";
            document.querySelector("#heading").style.visibility = "hidden";
            document.querySelector("#heading").style.height = 0;
            var elmnt = document.getElementById("selectpkg").scrollIntoView();
            document.querySelector(".sec1-mid").style.display = "none";




        }
    });


}