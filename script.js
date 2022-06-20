var   heroPosterImg = document.querySelector('.heroPosterImg'),
      techPoster = document.querySelector('.videoSec .video'),
      textVideo = document.querySelector('.textVideo'),
      textVideoChildren = textVideo.children,
      bottomNav = document.querySelector('.bottomNav'),
      startSecs = 10,
      endSecs = 15,
      secPaused = 0,
      s = 0,
      r = 0,
      playBtn = document.querySelectorAll('.playBtn')[0];
tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player,player2;
function onYouTubeIframeAPIReady() {
  if(window.scrollY / heroPosterImg.getBoundingClientRect().height < 0.6){
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
  /*PLACE FOR THE BOTTOM CODE*/
        /*SECOND VIDEO*/
        player2 = new YT.Player("player2",{
          videoId: "nqye02H_H6I",
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
            onReady:readyFuncTech,
            onStateChange:stateFunTech
          }
        })
      }

/*1ST VIDEO FUNCTIONS*/
function whenReadyFunc(event){
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

/*2ND VIDEO FUNCTIONS*/
function readyFuncTech(event){
  window.onscroll = function(){
    if(Math.abs(techPoster.getBoundingClientRect().top) <= techPoster.getBoundingClientRect().height / 3){
      setTimeout(function(){
    event.target.mute();
    event.target.playVideo();
  },2000) 
    }else{
      console.log('not')
    }
  }
}
function stateFunTech(event){
  if(event.data == YT.PlayerState.PLAYING){
    techPoster.querySelector('.poster').classList.add('fade');
    window.onscroll = function(){
      if(Math.abs(techPoster.getBoundingClientRect().top) >= techPoster.getBoundingClientRect().height / 3){
        event.target.pauseVideo();
      }else{
        event.target.playVideo();
      }
    }
  }
  if(event.data == YT.PlayerState.ENDED){
      event.target.seekTo(startSecs);
  }  
}

































/*window.onscroll = function(){
  if((Math.abs(techPoster.getBoundingClientRect().height) - Math.abs(techPoster.getBoundingClientRect().top)) / Math.abs(techPoster.getBoundingClientRect().height) > 0.5){
              
    }
}
*/
































































/*if(window.scrollY / heroPosterImg.getBoundingClientRect().height > 0.6){
    window.onscroll = function(){
      if(s == 0){
        if(window.scrollY / heroPosterImg.getBoundingClientRect().height < 0.6){
          s = 1;
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
              origin:'http://localhost:80'
            },
            events: {
              onReady:whenReadyFunc,
              onStateChange:onStateChnageFunc
            }
        });
        }
      }
    }
  }*/