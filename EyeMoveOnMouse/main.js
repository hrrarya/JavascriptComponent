let balls = document.querySelectorAll(".balls");

document.onmousemove = function(event) {
  let x = (event.clientX * 100) / window.innerWidth + "%";
  let y = (event.clientY * 100) / window.innerHeight + "%";

  for (let i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].style.transform = `translate(-${x},-${y})`;
  }
};
