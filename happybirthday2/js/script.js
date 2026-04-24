function yesClicked() {
  window.location.href = "page2.html";
}

function noClicked() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}