const h1 = document.querySelector('h1');

function randomRGB() {
    //use rgb and create variables with the 'random' formula
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 16);
    const b = Math.floor(Math.random() * 16);

    return `rgb(${r},${g},${b})`
}

setInterval(function(){
    h1.style.color = randomRGB();
}, 800);


setInterval(function () { 
    h1.classList.toggle('big')
    h1.classList.toggle('small')
    }, 1000)



// const title = document.querySelector('#title');
// title.onclick = function (){
//     document.getElementById('dbdAudio').play();
// }

// setInterval(function () { 
//     h1.style.color = 'white';
//     }, 1000)

h1.addEventListener('click', function () { 
    h1.style.color = 'white';
    document.getElementById('dbdAudio').play();
    }, 1000);

