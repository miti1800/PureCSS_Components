function expand(imgs) {
  var openImg = document.getElementById("expandedImg");
  openImg.src = imgs.src;
  openImg.parentElement.style.display = "block";
}
