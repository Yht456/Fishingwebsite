var heroPosterImg = document.querySelector('.heroPosterImg'),
heroPoster = document.querySelector('.video .heroPoster'),
textVideo = document.querySelector('.textVideo'),
bottomNav = document.querySelector('.bottomNav'),
startSecsVid1 = 62,
endSecsVid1 = 77,
startSecsVid2 = 7,
endSecsVid2 = 15;
var playerHero = videojs('heroVideoBg',{
	muted:true,
	controls:0,
});
playerHero.on('playing',function(){
	if(playerHero.currentTime() < startSecsVid1){
		playerHero.currentTime(startSecsVid1);
		playerHero.play();
	}
	loopVideo(playerHero,startSecsVid1,endSecsVid1);
	setTimeout(function(){
		heroPosterImg.style.opacity = 0;
		bottomNav.classList.add('videoPlayNav');
		for(let i = 0;i < textVideo.children.length - 1;i++){
			textVideo.children[i].classList.add('fade');
		}
		textVideo.querySelector('button').style.animationName = 'toCenter';
		heroVideoResponsive();
		window.onresize = function(){
			heroVideoResponsive();
		}
	},3000);
	playerHero.on('ended',function(){
		playerHero.play();
	})
	document.addEventListener('visibilitychange',function(){
		if(document.hidden){
			playerHero.pause();
		}else{
			playerHero.play();
		}
	})
});

startPlayingVideo('techVideoBg',startSecsVid2,endSecsVid2,document.querySelector('.videoSec .video .poster'));

function heroVideoResponsive(){
	if(window.innerWidth <= 800){
		Object.assign(heroPoster.style,{animationName:'maxWidth800'});
	}else if(window.innerWidth <= 1000 & window.innerWidth > 800){
		Object.assign(heroPoster.style,{animationName:'maxWidth1000'});
	}else{
		Object.assign(heroPoster.style,{animationName:'defaultWidth'});
	}
}
