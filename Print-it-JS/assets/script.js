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



index=0;

console.log(slides[index]);

arrow_left=document.getElementById("arrow_left");
function changeimageleft() {
	index=(index - 1 + 4) % 4;

	slide_image=slides[index].image;	
	
	banner=document.getElementById("banner-id");
	banner.src="./assets/images/slideshow/" + slide_image;	

	balise_p=document.getElementById("tagLine");
	tagLine_p=slides[index].tagLine;
	balise_p.innerHTML=tagLine_p;
}
arrow_left.addEventListener("click", changeimageleft);

arrow_right=document.getElementById("arrow_right");
function changeimageright() {
	index=(index +1 ) % 4;
	console.log(index);
	
	slide_image=slides[index].image;
	
	banner=document.getElementById("banner-id");
	banner.src="./assets/images/slideshow/" + slide_image;	

	balise_p=document.getElementById("tagLine");
	tagLine_p=slides[index].tagLine;
	balise_p.innerHTML=tagLine_p;
}
arrow_right.addEventListener("click", changeimageright);

