var i = 0;

function openMenu() {
    document.querySelector(".column .right-part ul").classList.add("open");
    if(i==1) {
        document.querySelector(".column .right-part ul").classList.remove("close");
    }
}

function closeMenu() {
    document.querySelector(".column .right-part ul").classList.add("close");
    document.querySelector(".column .right-part ul").classList.remove("open");
    i = 1;
}
