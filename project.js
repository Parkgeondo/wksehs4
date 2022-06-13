var eyeball = function (selector) {
    var eye = document.querySelector(selector),
    pupil = eye.querySelector('.pupil'),
    eyearea = eye.getBoundingClientRect();

    function eyeballmove(mouseX, mouseY) {
        var radian = Math.atan2(event.clientY - (eyearea.y + eyearea.height * 0.5), mouseX - (eyearea.x + eyearea.width * 0.5));
        pupil.style.transform = 'rotate(' + (180*radian/Math.PI - 90) + 'deg)';
        console.log(event.clientY);
    }

    return {
        eyeballmove: eyeballmove
    };


}

var eye1 = eyeball('.eye1');
var eye2 = eyeball('.eye2');

window.addEventListener('mousemove', function (e) {
    eye1.eyeballmove(e.pageX, e.pageY);
    eye2.eyeballmove(e.pageX, e.pageY);

});





const header = document.querySelector("header")
const fix = document.querySelector(".fix")

document.addEventListener("scroll", function () {
    const pixels = window.scrollY;

    if (pixels >= header.getBoundingClientRect().height) {
        fix.classList.add("scrolled");
    } else {
        fix.classList.remove("scrolled");
    }
})

let number = 0;

//왼쪽 이미지 들어가는 공간
const img = document.querySelector(".img")
const img2 = document.querySelector("img")
// 오른쪽 메뉴들
const items = document.querySelectorAll(".item")


for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("mouseover", function () {
        number = i+2;
        img2.src = `img/image${number}.png`
        console.log(items)
    })
}