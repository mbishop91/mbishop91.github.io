
var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = 
".window-wrapper.clearfix.js-tab-parent { background-color: white }"  +
".open-card-composer.js-open-card-composer { color : rgb(44, 62, 80) }  " +
".open-card-composer:hover { " +
"background : none;" +
"text-decoration : none" +
"opacity : .5" +
"}" +
".badge-state-complete {background-color : #34b27d}" +
"input[type='submit'].primary, input[type='button'].primary, button.primary, .button.primary {background : #2ecc71}" +
"input[type='submit'].primary:hover, input[type='button'].primary:hover, button.primary:hover, .button.primary:hover, input[type='submit'].primary:focus, input[type='button'].primary:focus, button.primary:focus { background : #27ae60 }"
;
document.body.appendChild(css);

var midnightBlue = '#2c3e50',
amethyst = '#93c',
emerald = '#34b27d',
pomegranate = '#cb4d4d',
clouds = '#ecf0f1',
carrot = '#e09952',
peterRiver = '#4d77cb';
document.addEventListener("DOMContentLoaded", function(){
	$('body').hover(function() {
		$("body").css("background", midnightBlue);
		$("h2:contains('To Do - Site')").css('color', clouds).parents('.list').css('background', amethyst);
		$("h2:contains('Doing - Site')").css('color', clouds).parents('.list').css('background', amethyst);
		$("h2:contains('To Do - App')").css('color', clouds).parents('.list').css('background', carrot);
		$("h2:contains('Doing - App')").css('color', clouds).parents('.list').css('background', carrot);
		$("h2:contains('To Do - API')").css('color', clouds).parents('.list').css('background', peterRiver);
		$("h2:contains('Doing - API')").css('color', clouds).parents('.list').css('background', peterRiver);
		$("h2:contains('known issues')").css('color', clouds).parents('.list').css('background', pomegranate);
		$("h2:contains('Done')").css('color', clouds).parents('.list').css('background', emerald);
	});
},false);