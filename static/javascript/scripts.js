const title = document.getElementById('title');

function randomRGB() {
    //use rgb and create variables with the 'random' formula
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 16);
    const b = Math.floor(Math.random() * 16);

    return `rgb(${r},${g},${b})`
}

setInterval(function(){
    title.style.color = randomRGB();
}, 800);


setInterval(function () { 
    title.classList.toggle('big')
    title.classList.toggle('small')
    }, 1000)


title.addEventListener('click', function () { 
    title.style.color = 'white';
    document.getElementById('dbdAudio').play();
    }, 1000);

