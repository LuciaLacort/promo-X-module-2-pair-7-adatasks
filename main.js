'use strict';

const face = document.querySelector('.js-face');

function handleCLick() {
    face.innerHTML = ';)';
}

face.addEventListener('click', handleCLick);


function handleHover() {
    face.innerHTML = ':)';
}

face.addEventListener('mouseout', handleHover);