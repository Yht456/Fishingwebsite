function removeNav(){
	'use strict';
	document.querySelector('.overlayMenuBar').classList.remove('openOverlay');
	document.querySelector('.bottomNav').classList.remove('openBarMobile');
}
function openNav(){
	'use strict';
	document.querySelector('.overlayMenuBar').classList.add('openOverlay');
	document.querySelector('.bottomNav').classList.add('openBarMobile');
}
try{
  socialMediaContentCarousel = new Flickity('.socialMediaContentCarousel',{
    wrapAround:true,
    freeScroll:true,
    cellAlign:'left',
    arrowShape:{x0: 10, x1: 70, y1: 40, x2: 70, y2: 40, x3: 70}
  });
  window.onresize = function(){
    socialMediaContentCarousel.resize();
  }
}catch(e){

}
function loopVideo(playerElem,startSecs,endSecs){
  setInterval(function(){
    if(playerElem.currentTime() > endSecs){
      playerElem.currentTime(startSecs);
    }
  },10)
}
function startPlayingVideo(videoId, startSecsVid,endSecsVid, videoPoster){
  let player = videojs(videoId,{
    muted:true,
    controls:0,
  });
  window.onload = function(){
    if(document.getElementById(videoId).parentElement.getBoundingClientRect().top < window.innerHeight - 100){
      player.play();
      player.on('playing',function(){
        setTimeout(function(){
          videoPoster.style.opacity = 0;
        },2000);
      })
      player.on('playing',function(){
        loopVideo(player,startSecsVid,endSecsVid);
        document.addEventListener('visibilitychange',function(){
          if(document.hidden){
            player.pause();
          }else{
            player.play();
          }
        })
      })
    }
    window.onscroll = function(){
      if(document.getElementById(videoId).parentElement.getBoundingClientRect().top < window.innerHeight - 100){
        player.play();
        player.on('playing',function(){
          setTimeout(function(){
            videoPoster.style.opacity = 0;
          },2000);
        })
      }
    }
  }
  player.on('playing',function(){
    loopVideo(player,startSecsVid,endSecsVid);
    if(player.currentTime() < startSecsVid){
      player.currentTime(startSecsVid);
    }
    player.on('ended',function(){
      player.play();
    })
    document.addEventListener('visibilitychange',function(){

    })
  })
}
let toRevealSectionsOnLoad = Array.from(document.querySelectorAll('.toReveal')),
sectionIndexOnViewPort = 0;
toRevealSectionsOnLoad.forEach(function(toRevealSectionOnLoad, toRevealSectionOnLoadIndex){
  let toRevealSectionOnLoadTop = toRevealSectionOnLoad.getBoundingClientRect().top;
  if(toRevealSectionOnLoadTop < window.innerHeight){
    toRevealSectionOnLoad.classList.add('visible');
  }
})
document.addEventListener('scroll',function(){
  let toRevealSections = Array.from(document.querySelectorAll('.toReveal'));
  toRevealSections.forEach(function(toRevealSection){
    let toRevealSectionTop = toRevealSection.getBoundingClientRect().top;
    if(toRevealSectionTop < window.innerHeight - 50){
      toRevealSection.classList.add('visible');
    }
  })
});

function hoverImgPlay(img){
  'use strict';
  img.style.transform = 'scale(1.1)';
}
function leaveImgPlay(img){
  'use strict';
  img.style.transform = 'scale(1)';
}
