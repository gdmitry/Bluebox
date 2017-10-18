function q(selector, parent) {
    var result = (parent || document).querySelectorAll(selector);
    return result.length === 1 ? result[0] : result;
}

var slider = q('.slider__container');
var slides = q('.slider__container > li');


// prapare slides
var pics = [
    'pic1.jpg',
    'pic2.jpg'
];

pics.forEach((url, index) => {
    var pic = q('img', slides[index]);
    pic.src = url;
});

var i = 0;


setInterval(() => {
    if (i >= slides.length - 1) {
        i = 0;
    } else {
        i++;
    }
    slides.forEach(s => s.classList.remove('active'));
    
    slides[i].classList.add('active');
    
}, 3000);