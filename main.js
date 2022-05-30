const header = document.querySelector("header")

document.addEventListener("scroll", function () {
    const pixels = window.scrollY;

    if (pixels >= header.getBoundingClientRect().height) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
})

const animatedTags = document.querySelectorAll("h1, p, figure, button")
animatedTags.forEach(tag => {
    tag.style.opacity = 0
})

document.addEventListener("scroll", function () {

    let delay = 0.25;
    animatedTags.forEach(tag => {
        const tagTop = tag.getBoundingClientRect().top;
        const tagBottom = tag.getBoundingClientRect().bottom;

        if (tagTop < window.innerHeight && tagBottom > 0) {
            tag.style.animation = `fadeIn 1s ${delay}s both`;
            console.log("asd");
            delay += 0.25;
        } else {
            tag.style.animation = "0";
            console.log("asd");
        }
    })
})