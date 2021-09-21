var i = 0;

function openMenu() {
    document.querySelector(".navbar .left-part ul").classList.add("open");
    if(i==1) {
        document.querySelector(".navbar .left-part ul").classList.remove("close");
    }
}

function closeMenu() {
    document.querySelector(".navbar .left-part ul").classList.add("close");
    document.querySelector(".navbar .left-part ul").classList.remove("open");
    i = 1;
}