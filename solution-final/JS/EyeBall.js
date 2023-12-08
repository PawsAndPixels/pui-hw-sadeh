function eyeBalls(event) {
  let balls = document.getElementsByClassName("ball");

  console.log("hi");
  let x = (event.clientX * 100) / window.innerWidth + "%"; //Calculates the horizontal position of the mouse as a percentage of the window's width.
  let y = (event.clientY * 100) / window.innerHeight + "%"; //Calculates the vertical position of the mouse cursor as a percentage of the window's height.

  //event.clientX => gets horizontal coordinate of the mouse
  //event.clientY => gets vertical coordinate of the mouse
  //window.innerWidth => gets browser height
  //window.innerHeight => gets browser height}

  for (let i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].style.transform = "translate(-" + x + ",-" + y + ")";
  }
}

document.onmousemove = function (event) {
  eyeBalls(event);
};
