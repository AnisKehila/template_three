// Animation on the skill bars 
let bars = document.querySelectorAll('.skills .span');
window.addEventListener('scroll' , () => {
    if(window.pageYOffset >= 7000) {
        for(i = 0 ; i < bars.length ; i++) {
            bars[i].style.width = bars[i].getAttribute('data-width') ;
        }
    }
});
// the events Timer 
let days = document.querySelector('#days h3');
let hours = document.querySelector('#hours h3');
let minutes = document.querySelector('#minutes h3');
let secondes = document.querySelector('#secondes h3');
let countDown = setInterval(() => {
    let date = new Date("Jul 01, 2023 16:37:52").getTime();
    let currentDate = new Date().getTime();
    let timeLeft =  date - currentDate ;
    days.innerHTML = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    hours.innerHTML = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes.innerHTML =  Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    secondes.innerHTML = Math.floor((timeLeft % (1000 * 60)) / 1000);
},1000);
