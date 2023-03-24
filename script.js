// set the offer countdown
setInterval(() => {
	var count = document.getElementById('count').innerHTML
	count = parseInt(count)
	count -= 1
	document.getElementById('count').innerHTML = count
}, 1000);

var images = ['../images/jade.png', '../images/silvercypress.png', '../images/Banyantree.png'];

var x = 0;
var img = document.getElementById('img');
setInterval(slider, 4000);

function slider() {
	if (x < images.length) {
		x = x + 1;
	}
	else {
		x = 1;
	}
	img.innerHTML = "<img src=" + images[x - 1] + ">";
}


var images2 = ['../images/jadetext.png', '../images/silver.png', '../images/Banyan.png'];

var y = 0;
var img2 = document.getElementById('img2');
setInterval(slider2, 4000);

function slider2() {
	if (y < images2.length) {
		y = y + 1;
	}
	else {
		y = 1;
	}
	img2.innerHTML = "<img src=" + images2[y - 1] + ">";
}