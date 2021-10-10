const progress = document.getElementsByClassName('progress')[0]
setInterval(()=>{
    const computedStyle = getComputedStyle(progress)
    const width=parseFloat(computedStyle.getPropertyValue('--width')) || 0
    progress.style.setProperty('--width', width+ .1)
}, 5)