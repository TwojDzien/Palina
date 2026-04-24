window.onload = function () {
  setTimeout(() => {
    document.getElementById("popup").style.display = "flex";
    document.getElementById("main").style.display = "none";
  }, 7000);
};

function showFlower() {
  const photo = document.getElementById("photo");
  const flash = document.getElementById("flash");
  const flower = document.getElementById("flower");

  flash.classList.add("flash-active");

  setTimeout(() => {
    flash.classList.remove("flash-active");
  }, 400);

  photo.classList.add("photo-show");
  flower.classList.add("flower-show");
}

function showGramata() {
  const gramata = document.getElementById("gramata");
  const flash = document.getElementById("flash");

  flash.classList.add("flash-active");

  setTimeout(() => {
    flash.classList.remove("flash-active");
  }, 400);

  gramata.classList.add("gramata-show");
}