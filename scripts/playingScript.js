var heroPosterImg = document.querySelector('.heroPosterImg'),
heroPoster = document.querySelector('.video .heroPoster'),
techPoster = document.querySelector('.videoSec .video .poster'),
textVideo = document.querySelector('.textVideo'),
bottomNav = document.querySelector('.bottomNav'),
startSecs = 62,
endSecs = 75;

var player = videojs('heroVideoBg',{
	muted:true,
	controls:0,
});
player.on('playing',function(){
	if(player.currentTime() < startSecs){
		player.currentTime(startSecs);
	}
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
	},2000);
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
	window.onscroll = function(){
		if(Math.abs(window.scrollY - document.querySelector('.videoSec .video').offsetTop) / document.querySelector('.videoSec .video').getBoundingClientRect().height < 0.5){
			setTimeout(function(){
				techPoster.style.opacity = 0;
			},2000);
			player2.play();
		}
	}
	if(player2.currentTime() < startSecs){
		player2.currentTime(startSecs);
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
