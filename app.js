function q(selector, parent) {
    var result = (parent || document).querySelectorAll(selector);
    return result.length === 1 ? result[0] : result;
}

var slider = q('.slider__container');
var slides = q('.slider__container > img');

// Prepare slides
[
    'pic1.jpg',
    'pic2.jpg',
    'pic3.jpg',
    'pic1.jpg'
]
.map(path => 'images/slider/' + path)
.forEach((url, index) => {
    slides[index].src = url;
});

// Run slide show
var i = 0;
setActiveSlide(i);
// setInterval(() => {
//     (i >= slides.length - 1) ? i = 0 : i++;
//     setActiveSlide(i);
// }, 3000);

function setActiveSlide(i) {
    slides.forEach(s => s.classList.remove('active'));
    slides[i].classList.add('active');
}