var fileref=document.createElement("link");
fileref.setAttribute("rel", "stylesheet");
fileref.setAttribute("type", "text/css");
fileref.setAttribute("href", "https://mbishop91.github.io/trelloColor/trelloColor.css");

var midnightBlue = '#2c3e50',
amethyst = '#93c',
emerald = '#34b27d',
pomegranate = '#cb4d4d',
clouds = '#ecf0f1',
carrot = '#e09952',
peterRiver = '#4d77cb';

function changeColors() {
	console.log("test");
	$("h2:contains('To Do - Site')").css('color', clouds).parents('.list').css('background', amethyst);
	$("h2:contains('Doing - Site')").css('color', clouds).parents('.list').css('background', amethyst);
	$("h2:contains('To Do - App')").css('color', clouds).parents('.list').css('background', carrot);
	$("h2:contains('Doing - App')").css('color', clouds).parents('.list').css('background', carrot);
	$("h2:contains('To Do - API')").css('color', clouds).parents('.list').css('background', peterRiver);
	$("h2:contains('Doing - API')").css('color', clouds).parents('.list').css('background', peterRiver);
	$("h2:contains('known issues')").css('color', clouds).parents('.list').css('background', pomegranate);
	$("h2:contains('Done')").css('color', clouds).parents('.list').css('background', emerald);
}

document.addEventListener("DOMContentLoaded", function(){
	changeColors(); $('body').hover(function() {changeColors();});
},false);