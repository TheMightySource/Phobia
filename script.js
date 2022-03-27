document.addEventListener("contextmenu", (event) => event.preventDefault());

var started = false;

var audio = new Audio("https://www.youtube.com/embed/81D0n8c3mdQ?rel=0?version=3&autoplay=1&controls=0&&showinfo=0&loop=1");
function play() {
	started = !started;
	if (started) {
		audio.volume = 0.1;
		audio.play();
		document.getElementById("playbutton").style.display = "none";
		document.getElementById("pausebutton").style.display = "block";
	} else {
		audio.pause();
		document.getElementById("playbutton").style.display = "block";
		document.getElementById("pausebutton").style.display = "none";
	}
}
