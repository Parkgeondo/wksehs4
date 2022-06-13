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




