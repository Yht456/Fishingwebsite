var   heroPosterImg = document.querySelector('.heroPosterImg'),
      techPoster = document.querySelector('.videoSec .video'),
      textVideo = document.querySelector('.textVideo'),
      textVideoChildren = textVideo.children,
      bottomNav = document.querySelector('.bottomNav'),
      startSecs = 10,
      endSecs = 15,
      secPaused = 0,
      playBtn = document.querySelectorAll('.playBtn')[0];
tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player("player",{
      videoId: "1wkPMUZ9vX4",
      playerVars: {
        'playsinline': 1,
        controls:'0',
        autoplay:1,
        autohide:1,
        showinfo:0,
        modestbranding:1,
        loop:1,
        rel:0,
        enablejsapi:1,
        start:startSecs,
        end:endSecs,
      },
      events: {
        onReady:whenReadyFunc,
        onStateChange:onStateChnageFunc
      }
    });
  } 

/*1ST VIDEO FUNCTIONS*/
function whenReadyFunc(event){
  console.log('ready')
  setTimeout(function(){
  event.target.mute();
  event.target.playVideo();
  document.querySelector('.bottomNav').classList.add('videoPlayNav');
  for(let i = 0; i < textVideoChildren.length - 1;i++){
    textVideoChildren[i].classList.add('fade');
  }
    textVideo.querySelector('button').style.animationName = 'toCenter';
  },3000);
}

function onStateChnageFunc(event){
  if(event.data == YT.PlayerState.PLAYING){
      heroPosterImg.classList.add('fade');
      window.onscroll = function(){
        if(window.scrollY / heroPosterImg.offsetHeight >= 0.6){
            player.pauseVideo();
        }else{
            player.playVideo(secPaused);
        }
      }
  }else if(event.data == YT.PlayerState.ENDED){
      player.seekTo(startSecs);
  }  
}