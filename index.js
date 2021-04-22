const theme = () => {
  const mood = document.querySelector("#light-dark").checked;
  const video = document.querySelector(".videos-container").style;
  body = document.querySelector("body").style;
  console.log(mood);
  if (mood) {
    body.backgroundColor = "black";
    video.backgroundColor = "blue";
    body.fonts = "white";
  } else {
    body.backgroundColor = "white";
    video.backgroundColor = "grey";

    body.fonts = "black";
  }
};
