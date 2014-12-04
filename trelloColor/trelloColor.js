var fileref=document.createElement("link");
fileref.setAttribute("rel", "stylesheet");
fileref.setAttribute("type", "text/css");
fileref.setAttribute("href", "https://mbishop91.github.io/trelloColor/trelloColor.css");
document.getElementsByTagName("head")[0].appendChild(fileref);

var midnightBlue = '#2c3e50',
amethyst = '#93c',
emerald = '#34b27d',
pomegranate = '#cb4d4d',
clouds = '#ecf0f1',
carrot = '#e09952',
peterRiver = '#4d77cb',
yellow ="#dbdb57";

function changeColors() {
	$("h2:contains('Site')").css('color', clouds).parents('.list').css('background', amethyst);
	$("h2:contains('App')").css('color', clouds).parents('.list').css('background', carrot);
	$("h2:contains('API')").css('color', clouds).parents('.list').css('background', peterRiver);
	$("h2:contains('issues')").css('color', clouds).parents('.list').css('background', pomegranate);
	$("h2:contains('Doing')").parents('.list').css('background', yellow);
	$("h2:contains('Today')").parents('.list').css('background', yellow);
	$("h2:contains('Done')").css('color', clouds).parents('.list').css('background', emerald);
}

window.onload = function(){
	changeColors(); $('body').hover(function() {changeColors();});
};