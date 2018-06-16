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
var thumbVolume = document.getElementById('thumbVolume');

let songsList = '';
jazzSampler.songs.forEach((song, index) => {
    songsList += `
		 <div class="each-song" onmouseover='showPlayOrPauseButton(${index})' onmouseleave='showNumber(${index})'>
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


// individualSongs[0].addEventListener('hover', showIcon);


// function showIcon(songId) {
// 	if (song.pause) {
//    		document.getElementsByClassName("playIcon")[songId].style.display = "inline-block";
//         document.getElementsByClassName("pauseIcon")[songId].style.display = "none";
//         document.getElementsByClassName("song-number")[songId].style.display = "none";
//    } else {
//          document.getElementsByClassName("playIcon")[songId].style.display = "none";
//          document.getElementsByClassName("pauseIcon")[songId].style.display = "inline-block";
//          document.getElementsByClassName("song-number")[songId].style.display = "none";
// 		}
// }
// var individualSongs = document.getElementsByClassName('each-song');

function showPlayOrPauseButton(index) {
    let nodeTree = document.getElementsByClassName('each-song');
    let node = nodeTree[index];

    for (let i = 0; i < nodeTree.length; i++) {
        nodeTree[i].children[0].style.display = 'inline';
        nodeTree[i].children[1].style.display = 'none';
        nodeTree[i].children[2].style.display = 'none';
    }

    if (!song.src) {
        node.children[0].style.display = 'none';
        node.children[1].style.display = 'inline';
        node.children[2].style.display = 'none';
    }
    else {
        if (currentSong === index) {
            if (song.paused) {
                node.children[0].style.display = 'none';
                node.children[1].style.display = 'inline';
                node.children[2].style.display = 'none';
            }
            else {
                node.children[0].style.display = 'none';
                node.children[1].style.display = 'none';
                node.children[2].style.display = 'inline';
            }
        }
        else {
            node.children[0].style.display = 'none';
            node.children[1].style.display = 'inline';
            node.children[2].style.display = 'none';
        }
    }

    // if (currentSong === index && song.src && !song.paused) {
    //     node.children[0].style.display = 'none';
    //     node.children[1].style.display = 'none';
    //     node.children[2].style.display = 'inline';
    // }
    // else if (currentSong === index) {
    //     node.children[0].style.display = 'none';
    //     node.children[1].style.display = 'none';
    //     node.children[2].style.display = 'none';
    // }
    // else {
    //     node.children[0].style.display = 'none';
    //     node.children[1].style.display = 'inline';
    //     node.children[2].style.display = 'none';
    // }
}

function showNumber(index) {
    console.log('working')
    let node = document.getElementsByClassName('each-song')[index];
    node.children[0].style.display = 'inline';
    node.children[1].style.display = 'none';
    node.children[2].style.display = 'none';
}

// show icon on songs when hover over song names
document.getElementById('album-list').addEventListener('hover', function (event) {
    showIcon(event.target);
    console.log(event.target);
});

function showIcon(songId) {
    if (song.pause) {
        console.log(paused);
        document.getElementsByClassName("playIcon")[songId].style.display = "inline-block";
        document.getElementsByClassName("pauseIcon")[songId].style.display = "none";
        document.getElementsByClassName("song-number")[songId].style.display = "none";
    } else {
        console.log(play);
        document.getElementsByClassName("playIcon")[songId].style.display = "none";
        document.getElementsByClassName("pauseIcon")[songId].style.display = "inline-block";
        document.getElementsByClassName("song-number")[songId].style.display = "none";
    }
}



window.onload = function () {
    song.volume = 0.5;
}

var song = new Audio();
var currentSong = 0;

function playSong(index) {
    song.src = jazzSampler.songs[currentSong].audioUrl;
    songTitle.textContent = jazzSampler.songs[currentSong].title;
    seekArtist.textContent = jazzSampler.artist;
    albumTitle.textContent = jazzSampler.title;
    albumArtist.textContent = jazzSampler.artist;
    albumYear.textContent = jazzSampler.year;

    song.play();
    //Song list icons
    document.getElementsByClassName("playIcon")[currentSong].style.display = "none";
    document.getElementsByClassName("pauseIcon")[currentSong].style.display = "inline-block";
    document.getElementsByClassName("song-number")[currentSong].style.display = "none";
    // PlayBar Icon
    document.getElementById("playBarPlayIcon").style.display = "none";
    document.getElementById("playBarPauseIcon").style.display = "inline-block";


}


function playOrPauseSong(index) {
    index === undefined ? (index = currentSong) : (currentSong = index);
    // song will have src only if a song has been played
    if (song.src) {

        // check if last song played is the one we are trying to play
        if (song.src.indexOf(jazzSampler.songs[index].audioUrl) !== -1) {

            if (song.paused) {
                document.getElementsByClassName("playIcon")[index].style.display = "none";
                document.getElementsByClassName("pauseIcon")[index].style.display = "inline";
                document.getElementsByClassName("song-number")[index].style.display = "none";
                document.getElementById("playBarPlayIcon").style.display = "none";
                document.getElementById("playBarPauseIcon").style.display = "inline-block";
                song.play();
            }
            else {

                document.getElementsByClassName("playIcon")[index].style.display = "inline";
                document.getElementsByClassName("pauseIcon")[index].style.display = "none";
                document.getElementsByClassName("song-number")[index].style.display = "none";
                document.getElementById("playBarPlayIcon").style.display = "inline-block";
                document.getElementById("playBarPauseIcon").style.display = "none";
                song.pause();
            }
        }

        // different song we are trying to play
        else {
            document.getElementsByClassName("playIcon")[index].style.display = "none";
            document.getElementsByClassName("pauseIcon")[index].style.display = "inline";
            document.getElementsByClassName("song-number")[index].style.display = "none";
            playSong(index);
        }
    }
    // first time playing a song
    else {
        document.getElementsByClassName("playIcon")[index].style.display = "none";
        document.getElementsByClassName("pauseIcon")[index].style.display = "inline";
        document.getElementsByClassName("song-number")[index].style.display = "none";
        playSong(index);
    }
}

// function playOrPauseSong(index) {
//  if(song){
//   if(song.src && song.src.includes(jazzSampler.songs[index].audioUrl) && (song.currentTime > 0)){
//    if(song.paused) { 
//    	song.play();
//    }
//    else song.pause(); {
//    		document.getElementsByClassName("playIcon")[0].style.display = "inline-block";
//         document.getElementsByClassName("pauseIcon")[0].style.display = "none";
//    }
//   } else {
//    playSong();

//             document.getElementsByClassName("playIcon")[0].style.display = "none";
//             document.getElementsByClassName("pauseIcon")[0].style.display = "inline-block";
//   }
//  }
// }


// seek bar and thumb moving while song plays
song.addEventListener('timeupdate', function () {
    if (song && song.src) {
        if (song.duration) {          // make sure there is number for duration to prevent NaN
            var position = song.currentTime / song.duration;
            fillTime.style.width = `${position * 100}%`;
            seekThumb.style.left = `${position * 100}%`;
            convertTime(Math.round(song.currentTime));
            if (song.ended) {
                next();
            }
        }
    }
});

// song responding to drag and drop on seek bar

function seekTime(e) {
    var seekTimePercent = (e.offsetX / seekBarLength.offsetWidth) * song.duration;
    song.currentTime = seekTimePercent;

    console.log(e);
    console.log(song.duration);
    console.log(seekTimePercent);
    console.log(song.currentTime);

    document.getElementById('fillTime').style.width = seekTimePercent / 100;
}

let mousedown = false;
seekBarLength.addEventListener('click', seekTime);
seekBarLength.addEventListener('mousemove', (e) => mousedown && seekTime(e));
seekBarLength.addEventListener('mousedown', () => mousedown = true);
seekBarLength.addEventListener('mouseup', () => mousedown = false);



function convertTime(seconds) {
    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;
    min = (min < 10) ? + min : min;
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
    if (currentSong > jazzSampler.songs.length) {
        currentSong = 0;
    }
    playSong();
    document.getElementsByClassName('playIcon').style.display = "none";
    document.getElementsByClassName("pauseIcon").style.display = "inline-block";
}

function pre() {
    currentSong--;
    if (currentSong < 0) {
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
    thumbVolume.style.left = `${percent * 100}%`;
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