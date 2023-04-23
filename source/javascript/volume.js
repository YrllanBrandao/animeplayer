const rangeVolume = document.getElementById("range-volume");
volumeButton.addEventListener("mouseover", () => {
  rangeVolume.style.display = "flex";
});

volumeButton.addEventListener("click", () => {
  if (rangeVolume.value === 0) {
    volumeButton.background =
      "url('https://api.iconify.design/material-symbols/volume-mute-rounded.svg?color=%236a4cc8&width=30&height=30')";
    rangeVolume.value = 0.5;
    video.volume = 0.5;
  } else {
    volumeButton.style.background =
      "url('https://api.iconify.design/material-symbols/volume-off-rounded.svg?color=%236a4cc8&width=30&height=30')";
    rangeVolume.value = 0;
    video.volume = 0;
  }
});

rangeVolume.addEventListener("change", () => {
  video.volume = rangeVolume.value / 100;
});
