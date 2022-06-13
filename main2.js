
const header = document.querySelector("header")
const fix = document.querySelector(".fix")
const text = document.querySelector(".text")

document.addEventListener("scroll", function () {
    const pixels = window.scrollY;

    if (pixels >= header.getBoundingClientRect().height) {
        fix.classList.add("scrolled");
        text.classList.add("scrolled");
    } else {
        fix.classList.remove("scrolled");
    }
})

let number = 0;

//왼쪽 이미지 들어가는 공간
const g = document.querySelector(".img")
const g2 = document.querySelector("img")
// 오른쪽 메뉴들
const items = document.querySelectorAll(".item")


for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("mouseover", function () {
        number = i;
        g2.src = `img/image${number}.png`
        console.log(items)
    })
}