var heroPosterImg = document.querySelector('.heroPosterImg'),
heroPoster = document.querySelector('.video .heroPoster'),
techPoster = document.querySelector('.videoSec .video .poster'),
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
	console.clear();
	if(playerHero.currentTime() < startSecsVid1){
		playerHero.currentTime(startSecsVid1);
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
		player.play();
	})
	document.addEventListener('visibilitychange',function(){
		if(document.hidden){
			playerHero.pause();
		}else{
			playerHero.play();
		}
	})
});
let playerTech = videojs('techVideoBg',{
	muted:true,
	controls:0,
	
});
if(Math.abs(window.scrollY - document.querySelector('.videoSec .video').offsetTop) / document.querySelector('.videoSec .video').getBoundingClientRect().height < 0.5){
	playerTech.on('playing',function(){
		console.clear();
		loopVideo(playerTech,startSecsVid2,endSecsVid2);
		if(Math.abs(window.scrollY - document.querySelector('.videoSec .video').offsetTop) / document.querySelector('.videoSec .video').getBoundingClientRect().height > 0.5){
			playerTech.pause();
		}else{
			playerTech.play();
		}
		setTimeout(function(){
			techPoster.style.opacity = 0;
		},2000);
		playerTech.play();
		document.addEventListener('visibilitychange',function(){
			if(document.hidden){
				playerTech.pause();
			}else{
				playerTech.play();
			}
		})
	})
}
playerTech.on('playing',function(){
	console.clear();
	loopVideo(playerTech,startSecsVid2,endSecsVid2);
	window.onscroll = function(){
		if(Math.abs(window.scrollY - document.querySelector('.videoSec .video').offsetTop) / document.querySelector('.videoSec .video').getBoundingClientRect().height < 0.5){
			setTimeout(function(){
				techPoster.style.opacity = 0;
			},2000);
			playerTech.play();
		}
	}
	if(playerTech.currentTime() < startSecsVid2){
		playerTech.currentTime(startSecsVid2);
	}
	playerTech.on('ended',function(){
		playerTech.play();
	})
	document.addEventListener('visibilitychange',function(){
		
	})
})

function heroVideoResponsive(){
	if(window.innerWidth <= 800){
		Object.assign(heroPoster.style,{animationName:'maxWidth800'})
	}else if(window.innerWidth <= 1000 & window.innerWidth > 800){
		Object.assign(heroPoster.style,{animationName:'maxWidth1000'})
	}else{
		Object.assign(heroPoster.style,{animationName:'defaultWidth'})
	}
}

function loopVideo(playerElem,startSecs,endSecs){
	setInterval(function(){
		if(playerElem.currentTime() > endSecs){
			playerElem.currentTime(startSecs);
		}
	},10)
}