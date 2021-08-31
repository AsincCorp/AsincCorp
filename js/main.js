//fondo 
let fondo = document.getElementById('proyectos');

fondo.addEventListener("scroll",function(){
    window.scroll()

})

//Ocultar-Mostrar nav
function btnNav() {
    let navA = document.getElementsByClassName('padre');
    for (let i=0; i<navA.length; i++) {
        navA[i].classList.toggle('hide-a');
    }
    navA[0].classList.toggle('hide-a');
}

//Ocultar-Mostrar info cards

function btnCard1() {
    let cardInf = document.querySelector('#card1');
    cardInf.classList.toggle('hide-info');
}
function btnCard2() {
    let cardInf = document.querySelector('#card2');
    cardInf.classList.toggle('hide-info');
}
function btnCard3() {
    let cardInf = document.querySelector('#card3');
    cardInf.classList.toggle('hide-info');
}
function btnCard4() {
    let cardInf = document.querySelector('#card4');
    cardInf.classList.toggle('hide-info');
}