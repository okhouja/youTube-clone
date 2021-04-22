const theme = () => {
  const mood = document.querySelector("#light-dark").checked;
  body = document.querySelector("body").style;
  console.log(mood);
  if (mood) {
    body.backgroundColor = "black";
    body.fonts = "white";
  } else {
    body.backgroundColor = "white";
    body.fonts = "black";
  }
};
