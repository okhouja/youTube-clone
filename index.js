const theme = () => {
  const mood = document.querySelector("#light-dark").checked;
  body = document.querySelector("body").style;
  console.log(mood);
  if (mood) {
    body.backgroundColor = "black";
  } else {
    body.backgroundColor = "white";
  }
};
