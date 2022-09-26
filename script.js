let bars = document.querySelectorAll('.skills .span');
window.addEventListener('scroll' , () => {
    if(window.pageYOffset >= 7000) {
        for(i in bars) {
            bars[i].style.width = bars[i].getAttribute('data-width') ;
        }
    }
})