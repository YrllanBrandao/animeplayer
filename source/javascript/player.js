const player = document.getElementById("play-button");
const video = document.getElementById("player");
const videoArea = document.getElementById("video-player");
const controls = document.querySelector(".player-controls");
const skipIntro = document.getElementById("skip-intro");
const timeline = document.getElementById("timeline");
const currentTime = document.getElementById("current-time");
const volumeButton = document.getElementById("volume-button");
// variables
let playerOn = false;



// timeline

function timelineUpdate() {
  const CURRENT_TIME = Math.floor((video.currentTime * 100) / video.duration);
  timeline.value = CURRENT_TIME;
}

function secondsToMinutes(seconds) {
  const MINUTES = Math.floor(seconds / 60);
  const SECONDS =
    (seconds % 60).toFixed(0) < 10
      ? "0" + (seconds % 60).toFixed(0)
      : (seconds % 60).toFixed(0);

  return `${MINUTES}:${SECONDS}`;
}

video.addEventListener("canplay", () => {
  
  const MINUTES = Math.floor(video.duration / 60);
  const SECONDS = (video.duration % 60).toFixed(0);
  const DURATION = `${MINUTES} : ${SECONDS}`;

  currentTime.innerHTML = `${secondsToMinutes(
    Math.floor(video.currentTime)
  )} / ${DURATION}`;
//   loading

videoArea.classList.add("loaded");
// unlock controls
videoArea.addEventListener("mouseover", () => {
    controls.style.display = "flex";
  });
  
  videoArea.addEventListener("mouseout", () => {
    controls.style.display = "none";
  });
});
video.addEventListener("timeupdate", () => {
  const MINUTES = Math.floor(video.duration / 60);
  const SECONDS = (video.duration % 60).toFixed(0);
  const DURATION = `${MINUTES} : ${SECONDS}`;

  currentTime.innerHTML = `${secondsToMinutes(
    Math.floor(video.currentTime)
  )} / ${DURATION}`;
  //
  timelineUpdate();
});

timeline.addEventListener("click", (e) => {
  video.pause();
  const TIMELINE_WIDTH = timeline.offsetWidth;
  const CLIENT_X = e.clientX-9;
  const DURATION = video.duration;
  const PERCENT = CLIENT_X / TIMELINE_WIDTH;

  const CURRENT_TIME = DURATION * PERCENT;
  timeline.value = CURRENT_TIME;
  video.currentTime = CURRENT_TIME;
  video.play();
});

//
video.addEventListener("click", () => {
  if (playerOn === false) {
    video.play();
    player.classList.add("paused");
    player.dataset.icon = "Pause";
    playerOn = true;
  } else {
    video.pause();

    player.classList.remove("paused");
    player.dataset.icon = "Play";
    playerOn = false;
  }
});




skipIntro.addEventListener("click", () => {
  const INTRO_DURATION = 85;
  video.currentTime = video.currentTime + INTRO_DURATION;
});



player.addEventListener("click", () => {
  if (playerOn === false) {
    video.play();
    player.classList.add("paused");

    player.dataset.icon = "Pause";
    playerOn = true;
  } else {
    video.pause();

    player.classList.remove("paused");
    player.dataset.icon = "Play";
    playerOn = false;
  }
});


// volume button - show / hidden volume



document.addEventListener('contextmenu', (e) =>{


  const TARGET =  e.target;

  if(TARGET.classList.contains('player-element'))
  {
    e.preventDefault();
  }
}
)