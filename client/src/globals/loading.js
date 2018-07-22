export function contentLoaded() {
    const body = document.querySelector("#loadingScreen");
    body.className = "animated fadeOutUp";
    document.querySelector(".genreOverlay").className = "genreOverlay animated fadeInUp";
    document.querySelector(".navbar-fixed").className = "navbar-fixed animated fadeInDown";
    document.querySelector(".navbar-fixed").style.display = "block";
    document.querySelector("body").style.background = "#fafafa";

    setTimeout(() => {
        document.querySelector(".navbar-fixed").className = "navbar-fixed";
        body.style.display = "none";
    }, 1000);
}