const btnEl = document.querySelector('.btn');
btnEl.addEventListener("mouseover",(event) =>{
    const x = (event.pageX - btnEl.offsetLeft);
    const y = (event.pageY - btnEl.offsetTop);

    btnEl.style.setProperty("--xPos", x + "px");
    btnEl.style.setProperty("--yPos", y + "px");
})

const body = document.querySelector('body');
body.addEventListener("mousemove", (event) => {
    console.log(`X = ${event.pageX} | Y = ${event.pageY}`)
})