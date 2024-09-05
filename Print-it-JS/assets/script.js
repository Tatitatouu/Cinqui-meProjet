const slides = [
    {
        "image":"slide1.jpg",
        "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image":"slide2.jpg",
        "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image":"slide3.jpg",
        "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image":"slide4.png",
        "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
    }
]

index = 0;

var dotsContainer = document.querySelector('.dots');

function createDots() {
    var dot1 = document.createElement('div');
    var dot2 = document.createElement('div');
    var dot3 = document.createElement('div');
    var dot4 = document.createElement('div');

    dot1.className = 'dot dot_selected';
    dot2.className = 'dot';
    dot3.className = 'dot';
    dot4.className = 'dot'; 

    dotsContainer.appendChild(dot1);
    dotsContainer.appendChild(dot2);
    dotsContainer.appendChild(dot3);
    dotsContainer.appendChild(dot4);
}

function updateDots() {
    var dots = document.querySelectorAll('.dot');

    dots[0].classList.remove('dot_selected');
    dots[1].classList.remove('dot_selected');
    dots[2].classList.remove('dot_selected');
    dots[3].classList.remove('dot_selected');

    dots[index].classList.add('dot_selected'); 
}

console.log(slides[index]);

arrow_left = document.getElementById("arrow_left");
function changeimageleft() {
    index = (index - 1 + 4) % 4;

    var slide_image = slides[index].image;

    var banner = document.getElementById("banner-id");
    banner.src = "./assets/images/slideshow/" + slide_image;

    var balise_p = document.getElementById("tagLine");
    var tagLine_p = slides[index].tagLine;
    balise_p.innerHTML = tagLine_p;

    updateDots(); 
}
arrow_left.addEventListener("click", changeimageleft);

arrow_right = document.getElementById("arrow_right");
function changeimageright() {
    index = (index + 1) % 4;
    console.log(index);

    var slide_image = slides[index].image;

    var banner = document.getElementById("banner-id");
    banner.src = "./assets/images/slideshow/" + slide_image;

    var balise_p = document.getElementById("tagLine");
    var tagLine_p = slides[index].tagLine;
    balise_p.innerHTML = tagLine_p;

    updateDots(); 
}
arrow_right.addEventListener("click", changeimageright);

createDots();