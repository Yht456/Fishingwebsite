var heroPosterImg = document.querySelector('.heroPosterImg'),
techPoster = document.querySelector('.videoSec .video .poster'),
textVideo = document.querySelector('.textVideo'),
bottomNav = document.querySelector('.bottomNav'),
startSecs = 7,
endSecs = 15;


var player = videojs('heroVideoBg',{
	muted:true,
	controls:0,
	autoplay:1
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
	},3000);
	window.onscroll = function(){
		if(window.scrollY / heroPosterImg.offsetHeight >= 0.6){
			player.pause();
		}else{
			player.play();
		}
	}
	player.on('ended',function(){
		player.play();
	})
});


let player2 = videojs('techVideoBg',{
	muted:true,
	controls:0,
	autoplay:1
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
	})
}
player2.on('playing',function(){
	window.onscroll = function(){
		if(Math.abs(window.scrollY - document.querySelector('.videoSec .video').offsetTop) / document.querySelector('.videoSec .video').getBoundingClientRect().height > 0.5){
			console.log('not enoughly displayed');
			player2.pause();
		}else{
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
})