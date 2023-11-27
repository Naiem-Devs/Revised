function vidalyticsPlayerOnScroll() {
    var vidalyticsPlayerWrapper = document.getElementById('vidalytics_player_wrapper');
    var vidalyticsPlayerPlaceholder = document.getElementById('vidalytics_player_placeholder');
    var lowerEdge = vidalyticsPlayerPlaceholder.offsetTop + vidalyticsPlayerWrapper.clientHeight;
    var switchToMinPlayerPos = lowerEdge;
    var currentScrollPos = document.body.scrollTop || document.documentElement.scrollTop;

    if (currentScrollPos > switchToMinPlayerPos) {
        vidalyticsPlayerPIPEnable();
    } else if (currentScrollPos < switchToMinPlayerPos) {
        vidalyticsPlayerPIPDisable();
    }
}

function vidalyticsPlayerPIPEnable() {
    var vidalyticsPlayerWrapper = document.getElementById('vidalytics_player_wrapper');
    if (!vidalyticsPlayerWrapper.classList.contains('fixed')) {
        vidalyticsPlayerWrapper.classList.add('fixed');
        window.dispatchEvent(new Event('resize'));
    }
}

function vidalyticsPlayerPIPDisable() {
    var vidalyticsPlayerWrapper = document.getElementById('vidalytics_player_wrapper');
    if (vidalyticsPlayerWrapper.classList.contains('fixed')) {
        vidalyticsPlayerWrapper.classList.remove('fixed');
        window.dispatchEvent(new Event('resize'));
    }
}

function vidalyticsPlayerOnScrollCallback() {
    clearTimeout(vidalyticsPlayerOnScrollTimeout);
    vidalyticsPlayerOnScrollTimeout = setTimeout(vidalyticsPlayerOnScroll, 10);
}

var vidalyticsPlayerOnScrollTimeout = null;

window.addEventListener('scroll', vidalyticsPlayerOnScrollCallback);

document.getElementById('vidalytics_player_wrapper_disable_pip').addEventListener('click', function () {
    window.removeEventListener('scroll', vidalyticsPlayerOnScrollCallback);
    vidalyticsPlayerPIPDisable();
});
