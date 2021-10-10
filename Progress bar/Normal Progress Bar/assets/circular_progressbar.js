let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");
let progressValue = 0;
let progressEndValue = 100;
let speed = 80;
let progress = setInterval(()=>{
    progressValue++;
    valueContainer.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(
        #6CB4EE ${progressValue * 3.6}deg,
        #d4d4d4 ${progressValue * 3.6}deg
    )`;
    if(progressValue==progressEndValue){
        clearInterval(progress);
    }
},speed);