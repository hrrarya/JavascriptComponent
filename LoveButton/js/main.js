const loveButton = document.getElementById("love_button");

loveButton.addEventListener("mousedown", function() {
  const loveSection = document.querySelector(".love_section");
  createHeart(loveSection);
});

function createHeart(loveSection) {
  loveButton.innerHTML = `THANK YOU <img src="../img/redo.svg">`;
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      const span = document.createElement("span");
      span.innerHTML = '<i class="fa fa-heart"></i>';
      span.classList.add("heart");
      span.style.left = Math.random() * 100 + "%";
      span.style.top = Math.random() * 100 + "%";
      span.style.fontSize = Math.random() * 20 + 5 + "px";
      span.style.animationDuration = Math.random() * 2 + 3 + "s";
      loveSection.appendChild(span);

      setTimeout(() => {
        span.remove();
      }, 3000);
    }, i * 300);
  }
}
