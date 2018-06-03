const songs = ["As I Figure.mps", "Dances and Dames.mp3", "Faster Does It.mp3",
	"I Knew A Guy.mps", "Night on the Docks - Sax.mp3", "Off to Osaka.mp3", "Vibe Ace.mp3"];

var songTitle = document.getElementById('songTitle');
var fillTime = document.getElementById('fillTime');
var currentTime = document.getElementById('currentTime');

var song = new Audio();
var currentSong = 0;

function playSong() {
	song.src = songs[currentSong]; // set source of 0th song
	songTitle.textContent = songs[currentSong];
	song.play(); // plays the song
}

// function playOrPauseSong() {
// 	if(song.paused) {
// 		song.play();
// 		$('#play img').attr('src','Pause.png');
// 	} else {
// 		song.pause();
// 		$('#play img').attr('src','Play.png');
// 	}
// }



song.addEventListener('timeupdate', function() {
	var position = song.currentTime / song.duration;
	fillTime.style.width = `${position * 100}%`;

	convertTime(Math.round(song.currentTime));

	if(song.ended) {
		next();
	}
});

fillTime.addEventListener('click', seekTime);

function seekTime() {
	document.getElementById('fillTime').innerHTML = song.currentTime;
	var percent = e.offsetX / this.offsetWidth;
    song.currentTime = percent * song.duration;
    fillTime.value = percent * 100;
}

function convertTime(seconds) {
	var min = Math.floor(seconds / 60);
	var sec = seconds % 60;

	min = (min < 10) ? '0' + min : min;
	sec = (sec < 10) ? '0' + sec : sec;
	currentTime.textContent = min + ':' + sec;

	totalTime(Math.round(song.duration));
}

function totalTime(seconds) {
	var min = Math.floor(seconds / 60);
	var sec = seconds % 60;

	min = (min < 10) ? '0' + min : min;
	sec = (sec < 10) ? '0' + sec : sec;
	currentTime.textContent += '/' + min + ':' + sec;
}

// function next() {
// 	currentSong++;
// 	if(currentSong > 2) {
// 		currentSong = 0;
// 	}
// 	playSong();
// 	$('#play img').attr('src',"Pause.png");
// 	$('#image img').attr('src',poster[currentSong]);
// 	$('#bg img').attr('src',poster[currentSong]);
// }

// function pre() {
// 	currentSong--;
// 	if(currentSong < 0) {
// 		currentSong = 2;
// 	}
// 	playSong();
// 	$('#play img').attr('src',"Pause.png");
// 	$('#image img').attr('src',poster[currentSong]);
// 	$('#bg img').attr('src',poster[currentSong]);
// }

function decreaseVolume() {
	song.volume > 0 && (song.volume = parseFloat(song.volume.toFixed(2)) - .2);
}

function increaseVolume() {
	song.volume !== 1 && (song.volume += 0.20);
}
