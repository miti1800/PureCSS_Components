var i = 0;
function openMenu() {
    document.querySelector(".navbar .right-part ul").classList.add("open");
    if(i==1) {
        document.querySelector(".navbar .right-part ul").classList.remove("close");
    }
}
function closeMenu() {
    document.querySelector(".navbar .right-part ul").classList.add("close");
    document.querySelector(".navbar .right-part ul").classList.remove("open");
    i = 1;
}

function openPage(pageName,id) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    document.getElementById(pageName).style.display = "flex";
    tablinks[0].classList.remove("default");
}

const sc = document.querySelector(".stepper_content").children;
const scount = document.querySelector(".stepper_count").children;
var i = 0;

function nextBtn() {
    console.log(i);
    sc[i].classList.remove("show");
    scount[i].classList.add("complete");
    scount[i].classList.remove("active");
    i++;
    sc[i].classList.add("show");
    scount[i].classList.add("active");
}

function prevBtn() {
    sc[i].classList.remove("show");
    i--;
    sc[i].classList.add("show");
    scount[i].classList.add("active");
}

function submitBtn() {
    sc[i].classList.remove("show");
    scount[i].classList.remove("active");
    scount[i].classList.add("complete");
    i++;
    sc[i].classList.add("show");
}