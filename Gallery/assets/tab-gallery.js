oldimgs = document.getElementById("first-image");
function expand(imgs) {
  oldimgs.parentElement.classList.remove("active");
  imgs.parentElement.classList.add("active");
  var openImg = document.getElementById("expandedImg");
  openImg.src = imgs.src;
  openImg.parentElement.style.display = "block";
  oldimgs = imgs
}
