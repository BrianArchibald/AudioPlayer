const jazzSampler = {
   title: 'jazzSampler',
   artist: 'Kevin MacLeod',
   year: '2011',
   albumArtUrl: 'jazzband.jpg',
   songs: [
     { title: 'As I Figure', duration: "3:36", audioUrl: 'Music/Kevin_MacLeod_-_As_I_Figure' },
     { title: 'Dances and Dames', duration: "2:26", audioUrl: 'Music/Kevin_MacLeod_-_Dances_and_Dames' },
     { title: 'Faster Does It', duration: "3:01", audioUrl: 'Music/Kevin_MacLeod_-_Faster_Does_It' },
     { title: 'I Knew A Guy', duration: "2:46", audioUrl: 'Music/Kevin_MacLeod_-_I_Knew_a_Guy' },
     { title: 'Night on the Docks - Sax', duration: "2:54", audioUrl: 'Music/NightKevin_MacLeod_-_Night_on_the_Docks_-_Sax' },
     { title: 'Off to Osaka', duration: "1:49", audioUrl: 'Music/Kevin_MacLeod_-_Off_to_Osaka' },
     { title: 'Vibe Ace', duration: "1:01", audioUrl: 'Music/Kevin_MacLeod_-_Vibe_Ace' }
   ]
};


// const songs = ["As I Figure.mps", "Dances and Dames.mp3", "Faster Does It.mp3",
// 	"I Knew A Guy.mps", "Night on the Docks - Sax.mp3", "Off to Osaka.mp3", "Vibe Ace.mp3"];

var songTitle = document.getElementById('songTitle');
var fillTime = document.getElementById('fillTime');
var currentTime = document.getElementById('currentTime');

var song = new Audio();
var currentSong = 0;

function playSong() {
	song.src = songs[currentSong]; 
	songTitle.textContent = songs[currentSong];
	song.play(); 
}

function playOrPauseSong() {
	if(song.paused) {
		song.play();

//		set ion icons on title sections and player section to pause // use display hidden
		
	getElementById.playIcon.style.display = "none";

// 		$('#play img').attr('src','Pause.png');
	} else {
// 		song.pause();

	getElementById.pauseIcon.style.display = "none";

//		set ion icons on title sections and player section to play
// 		$('#play img').attr('src','Play.png');
	}
}



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

function next() {
	currentSong++;
	if(currentSong > 6) {   // last element in array instead???????
		currentSong = 0;   
	}
// 	playSong();

	getElementById.playIcon.style.display = "none";

// 	$('#play img').attr('src',"Pause.png");
// 	
}

function pre() {
	currentSong--;
	if(currentSong < 0) {
		currentSong = 6;   /// last element in array instead???
	}
	playSong();

	getElementById.pauseIcon.style.display = "none";

// 	$('#play img').attr('src',"Pause.png");

}

function decreaseVolume() {
	song.volume > 0 && (song.volume = parseFloat(song.volume.toFixed(2)) - .2);
}

function increaseVolume() {
	song.volume !== 1 && (song.volume += 0.20);
}



/// volume section 

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