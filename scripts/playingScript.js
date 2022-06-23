var heroPosterImg = document.querySelector('.heroPosterImg'),
heroPoster = document.querySelector('.video .heroPoster'),
techPoster = document.querySelector('.videoSec .video .poster'),
textVideo = document.querySelector('.textVideo'),
bottomNav = document.querySelector('.bottomNav'),
startSecsVid1 = 62,
endSecsVid1 = 77,
startSecsVid2 = 7,
endSecsVid2 = 15;

var player = videojs('heroVideoBg',{
	muted:true,
	controls:0,
});
player.on('playing',function(){
	if(player.currentTime() < startSecsVid1){
		player.currentTime(startSecsVid1);
	}
	loopVideo(player,startSecsVid1,endSecsVid1);
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
	player.on('ended',function(){
		player.play();
	})
	document.addEventListener('visibilitychange',function(){
		if(document.hidden){
			player.pause();
		}else{
			player.play();
		}
	})
});
let player2 = videojs('techVideoBg',{
	muted:true,
	controls:0,
	
});
if(Math.abs(window.scrollY - document.querySelector('.videoSec .video').offsetTop) / document.querySelector('.videoSec .video').getBoundingClientRect().height < 0.5){
	player2.on('playing',function(){
		loopVideo(player2,startSecsVid2,endSecsVid2);
		if(Math.abs(window.scrollY - document.querySelector('.videoSec .video').offsetTop) / document.querySelector('.videoSec .video').getBoundingClientRect().height > 0.5){
			player2.pause();
		}else{
			player2.play();
		}
		setTimeout(function(){
			techPoster.style.opacity = 0;
		},2000);
		player2.play();
		document.addEventListener('visibilitychange',function(){
			if(document.hidden){
				player2.pause();
			}else{
				player2.play();
			}
		})
	})
}
player2.on('playing',function(){
	loopVideo(player2,startSecsVid2,endSecsVid2);
	window.onscroll = function(){
		if(Math.abs(window.scrollY - document.querySelector('.videoSec .video').offsetTop) / document.querySelector('.videoSec .video').getBoundingClientRect().height < 0.5){
			setTimeout(function(){
				techPoster.style.opacity = 0;
			},2000);
			player2.play();
		}
	}
	if(player2.currentTime() < startSecsVid2){
		player2.currentTime(startSecsVid2);
	}
	player2.on('ended',function(){
		player2.play();
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