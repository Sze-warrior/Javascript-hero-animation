//declaring variables to select DOM elements
window.Velocity = window.Velocity || (window.jQuery || window.Zepto || window).Velocity;
//Link to use JQuery but still keep VelocityJS code written in Vanilla Javascript: https://github.com/julianshapiro/velocity/issues/722

var heroTitle = document.querySelector('h2.hero-intro');
var colorRandom = (Math.floor(Math.random() * 5) + 1);
var heroBanner = document.querySelector('div.hero-banner');
var cokeImg = document.querySelectorAll('img.coke-bottle');
var text = document.querySelectorAll('div.primary');

function heroAnimateIn(){
	Velocity(cokeImg, {translateY:-450}, {duration:1, easing:"ease-in-out"});
	Velocity(cokeImg, {translateY:10}, {duration:500, easing:"ease-in-out"});
	Velocity(cokeImg, {opacity:0.5}, {duration:450});
	Velocity(cokeImg, {opacity:1}, {duration:450});

	
	Velocity(heroTitle, {opacity:0}, {duration: 1});
	Velocity(heroTitle, {opacity:1}, {duration:450, delay:400});
}

function flipY(){
	Velocity(text, {opacity:0}, {duration: 1});
	Velocity(text, 'transition.flipYIn', {stagger:100, duration:500, delay:550, easing:"ease-in-out"});
}

function elements(){
	console.log("working");
}

if(colorRandom === 1){
	
	heroBanner.style.backgroundColor = "rgb(66, 134, 244)";

}else if(colorRandom === 2){

	heroBanner.style.backgroundColor = "rgb(98, 65, 244)";

}else if(colorRandom === 3){

	heroBanner.style.backgroundColor = "rgb(74, 214, 100)";

}
else if(colorRandom === 4){

	heroBanner.style.backgroundColor = "rgb(209, 52, 52)";
	
}
else if(colorRandom === 5){
	heroBanner.style.backgroundColor = "rgb(219, 57, 192)";
}

window.addEventListener("load", heroAnimateIn, false);
window.addEventListener("load", flipY, false);
