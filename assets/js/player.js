const player = document.querySelector('.previewVideo .player');
const play = player.querySelector('.play');
const stop = player.querySelector('.stop');
const video = document.querySelector('.previewVideo video');

play.addEventListener('click', () => {
    if(video.paused){
        video.play();
        play.style.cssText = 'display: none' 
        stop.style.cssText = 'display: inline-block' 
    }
    else{
        video.pause();
        // play.style.cssText = 'display: block' 
    }
})