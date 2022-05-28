window.addEventListener("scroll", function () {
    let nav = document.querySelector("nav");
    if (window.pageYOffset >= 212) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
});
