const jazzSampler = {
   title: 'Jazz Sampler',
   artist: 'Kevin MacLeod',
   year: '2011',
   albumArtUrl: 'jazzband.jpg',
   songs: [
     { title: 'As I Figure', duration: "3:36", audioUrl: 'Music/Kevin_MacLeod_-_As_I_Figure.mp3' },
     { title: 'Dances and Dames', duration: "2:26", audioUrl: 'Music/Kevin_MacLeod_-_Dances_and_Dames.mp3' },
     { title: 'Faster Does It', duration: "3:01", audioUrl: 'Music/Kevin_MacLeod_-_Faster_Does_It.mp3' },
     { title: 'I Knew A Guy', duration: "2:46", audioUrl: 'Music/Kevin_MacLeod_-_I_Knew_a_Guy.mp3' },
     { title: 'Night on the Docks - Sax', duration: "2:54", audioUrl: 'Music/Kevin_MacLeod_-_Night_on_the_Docks_-_Sax.mp3' },
     { title: 'Off to Osaka', duration: "1:49", audioUrl: 'Music/Kevin_MacLeod_-_Off_to_Osaka.mp3' },
     { title: 'Vibe Ace', duration: "1:01", audioUrl: 'Music/Kevin_MacLeod_-_Vibe_Ace.mp3' }
   ]
};

var songTitle = document.getElementById('songTitle');
var fillTime = document.getElementById('fillTime');
var currentTime = document.getElementById('currentTime');
var seekArtist = document.getElementById('seekArtist');
var albumTitle = document.getElementById('album-title');
var albumArtist = document.getElementById('album-artist');
var albumYear = document.getElementById('album-year');
var seekThumb = document.getElementById('seekThumb');
var volumeOn = document.getElementById('volume-high');
var volumeOff = document.getElementById('volume-off');

let songsList = '';
jazzSampler.songs.forEach((song, index) => {
	songsList += `
		 <div class="each-song">
		  <div class="song-number">${index + 1}</div> 
		  <ion-icon name="play" class="playIcon" onclick="playOrPauseSong(${index})"></ion-icon>
		  <ion-icon name="pause" class="pauseIcon" onclick="playOrPauseSong(${index})"></ion-icon>
		  <div class="song-title">${song.title}</div>
		  <div class="song-length">${song.duration}</div>
		  </div>
	`;
});


document.getElementsByClassName('album-list')[0].innerHTML = songsList;


// add play/pause on hover of each song

// var eachSong = document.getElementsByClassName('each-song');
// eachSong.addEventListener('hover', showIcon);

// function showIcon() {
// 	if (song.pause) {
//    		document.getElementsByClassName("playIcon")[0].style.display = "inline-block";
//         document.getElementsByClassName("pauseIcon")[0].style.display = "none";
//    } else {
//          document.getElementsByClassName("playIcon")[0].style.display = "none";
//          document.getElementsByClassName("pauseIcon")[0].style.display = "inline-block";
// 		}
// }

var song = new Audio();
var currentSong = 0;

function playSong() {
	song.src = jazzSampler.songs[currentSong].audioUrl; 
	songTitle.textContent = jazzSampler.songs[currentSong].title;
	seekArtist.textContent = jazzSampler.artist;
	albumTitle.textContent = jazzSampler.title;
	albumArtist.textContent = jazzSampler.artist;
	albumYear.textContent = jazzSampler.year;

	song.play(); 
	document.getElementsByClassName("playIcon")[0].style.display = "none";
    document.getElementsByClassName("pauseIcon")[0].style.display = "inline-block";
    // document.getElementsByClassName("playIcon").style.display = "none";
    // document.getElementsByClassName("pauseIcon").style.display = "inline-block";
}

// function playOrPauseSong() {
// 	if(!song || song.paused) {
// 		playSong();
// 		document.getElementById("playIcon").style.display = "none";
// 		document.getElementById("pauseIcon").style.display = "inline-block";
// 		} else {
// 		song.pause();
// 		document.getElementById("pauseIcon").style.display = "none";
// 		document.getElementById("playIcon").style.display = "inline-block";
// 	}
// }

function playOrPauseSong(index) {
 if(song){
  if(song.src && song.src.includes(jazzSampler.songs[index].audioUrl) && (song.currentTime > 0)){
   if(song.paused) { 
   	song.play();
   }
   else song.pause(); {
   		document.getElementsByClassName("playIcon")[0].style.display = "inline-block";
        document.getElementsByClassName("pauseIcon")[0].style.display = "none";
   }
  } else {
   playSong();
            document.getElementsByClassName("playIcon")[0].style.display = "none";
            document.getElementsByClassName("pauseIcon")[0].style.display = "inline-block";
  }
 }
}

// seek bar and thumb moving while song plays
song.addEventListener('timeupdate', function() {
 if(song && song.src){
  if(song.duration){          // make sure there is number for duration to prevent NaN
        var position = song.currentTime / song.duration;
        fillTime.style.width = `${position * 100}%`;
        seekThumb.style.left = `${position * 100}%`;
        convertTime(Math.round(song.currentTime));
        if(song.ended) {
            next();
        }
    }
 }
});

// song responding to seek click

function seekTime(e) {
	var percent = e.offsetX / this.offsetWidth;;
    song.currentTime = percent * song.duration;
    console.log(song.duration);
    console.log(percent);
    console.log(song.currentTime);
    

    document.getElementById('fillTime').style.width = percent / 100;
}

let mousedown = false;
seekBarLength.addEventListener('click', seekTime);
seekBarLength.addEventListener('mousemove', (e) => mousedown && seekTime(e)); // if mousedown is false - wont run
seekBarLength.addEventListener('mousedown', () => mousedown = true);
seekBarLength.addEventListener('mouseup', () => mousedown = false);



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

function next() {
	currentSong++;
	if(currentSong > jazzSampler.songs.length) {   
		currentSong = 0;   
	}
	playSong();
	document.getElementsByClassName('playIcon').style.display = "none"; 
	document.getElementsByClassName("pauseIcon").style.display = "inline-block";	
}

function pre() {
	currentSong--;
	if(currentSong < 0) {
		currentSong = jazzSampler.songs.length;  
	}
	playSong();
	document.getElementByClassName('pauseIcon').style.display = "none";
	document.getElementsByClassName("pauseIcon").style.display = "inline-block";
}

/// volume section 

function enableMute() {
	song.muted = true;
	document.getElementById('volume-high').style.display = "none";
	document.getElementById('volume-off').style.display = "inline-block";
}

function disableMute() {
	song.muted = false;
	document.getElementById('volume-high').style.display = "inline-block";
	document.getElementById('volume-off').style.display = "none";
}


// volume responding to seek click
seekBarVolume.addEventListener('click', seekVolume);

function seekVolume(e) {
	var percent = e.offsetX / this.offsetWidth;
    song.volume = percent;
    document.getElementById('fillVolume').style.width = `${percent * 100}%`;
   // document.getElementById('fillThumb').style.left = `${percent * 100}%`;
    console.log(this);
    console.log(song.volume);
}

///jquery seek bars
// var updateSeekPercentage = function($seekBar, seekBarFillRatio) {
//   var offsetXPercent = seekBarFillRatio * 100;
//   offsetXPercent = Math.max(0, offsetXPercent);
//   offsetXPercent = Math.min(100, offsetXPercent);
  
//   var percentageString = offsetXPercent + '%';
//   $seekBar.find('.fill').width(percentageString);
//   $seekBar.find('.thumb').css({left: percentageString});
//   return offsetXPercent;
// };

// var setupSeekBars = function() {
//   updateSeekPercentage($('.player-bar .volume .seek-bar'), currentVolume/100);
//   updateSeekPercentage($('.player-bar .seek-control .seek-bar'), 0);

//   var $seekBars = $('.player-bar .seek-bar');
//   $seekBars.click(function(event) {
//     var offsetX = event.pageX - $(this).offset().left;
//     var barWidth = $(this).width();
//     var seekBarFillRatio = offsetX / barWidth;
//     var seekPerc = updateSeekPercentage($(this), seekBarFillRatio);
//     if ($(this).parent(".volume").length) {
//       currentVolume = seekPerc;
//       setVolume(currentVolume);
//     } else if ($(this).parent('.seek-control').length) {
//       if (currentSoundFile) seek(currentSoundFile.getDuration()*seekBarFillRatio);
//     }

//   });
  
//   $seekBars.find('.thumb').mousedown(function(event) {
//     var $seekBar = $(this).parent();
//     $(document).bind('mousemove.thumb', function(event){
//       var offsetX = event.pageX - $seekBar.offset().left;
//       var barWidth = $seekBar.width();
//       var seekBarFillRatio = offsetX / barWidth;
//       var seekPerc = updateSeekPercentage($seekBar, seekBarFillRatio);
//       if ($seekBar.parent(".volume").length) {
//         currentVolume = seekPerc;
//         setVolume(currentVolume);
//       } else if ($seekBar.parent('.seek-control').length) {
//         if (currentSoundFile) seek(currentSoundFile.getDuration()*seekBarFillRatio);
//       }
//     });
//     $(document).bind('mouseup.thumb', function() {
//       $(document).unbind('mousemove.thumb');
//       $(document).unbind('mouseup.thumb');
//     });
//   });  
   
// };


// function decreaseVolume() {
// 	song.volume > 0 && (song.volume = parseFloat(song.volume.toFixed(2)) - .2);
// 	console.log(song.volume)
// }

// function increaseVolume() {
// 	song.volume !== 1 && (song.volume += 0.20);
// 	console.log(song.volume);
// }