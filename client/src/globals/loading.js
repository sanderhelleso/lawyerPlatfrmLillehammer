export function contentLoaded() {
    const body = document.querySelector("#loadingScreen");
    body.className = "animated fadeOut";

    if (document.querySelector(".genreOverlay") != null) {
        document.querySelector(".genreOverlay").className = "genreOverlay animated fadeIn";
        document.querySelector(".navbar-fixed").className = "navbar-fixed animated fadeIn";
        document.querySelector(".navbar-fixed").style.display = "block";
        document.querySelector("body").style.background = "#fafafa";

        setTimeout(() => {
            document.querySelector(".navbar-fixed").className = "navbar-fixed";
            body.style.display = "none";
        }, 1000);
    }
}