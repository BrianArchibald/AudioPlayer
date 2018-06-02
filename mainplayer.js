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
 