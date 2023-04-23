// const video = document.getElementById("player");
const url = "https://cdn.coverr.co/videos/coverr--07-022-22-gardening_0037-7179/1080p.mp4";


fetch(url)
  .then((response) => {
    return response.blob();
  })
  .then((blob) => {
    const MY_URL = URL.createObjectURL(blob);
    video.src = MY_URL;
  });