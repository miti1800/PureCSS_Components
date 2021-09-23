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