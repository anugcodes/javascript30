window.addEventListener("keydown",function(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"`);
  if(!audio) return; //stop if any other key is pressed.
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
});

const keys = document.querySelectorAll(".key-container");
keys.forEach(key => key.addEventListener('transitionend', function(e){
    if(e.propertyName!="transform") return;
    e.target.classList.remove("playing");
}))
