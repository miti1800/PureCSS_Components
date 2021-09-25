function openPage(pageName,id) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.borderColor = "";
  }

  document.getElementById(pageName).style.display = "block";
  tablinks[0].classList.remove("default");
}
