const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    
    const visiblity = nav.getAttribute("data-visible");
    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }

})

window.addEventListener("resize", () => {
    
    if(window.innerWidth >= 560){
        console.log("?")
        nav.setAttribute("data-visible", true);
    } else {
        nav.setAttribute("data-visible", false);
    }

});

window.addEventListener("load", () => {
    
    if(window.innerWidth >= 560){
        console.log("?")
        nav.setAttribute("data-visible", true);
    } else {
        nav.setAttribute("data-visible", false);
    }

});