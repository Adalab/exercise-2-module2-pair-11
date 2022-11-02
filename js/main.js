'use strict';

const faceElement = document.querySelector ('.js-face');

function handleclick () {
    faceElement.innerHTML = ';|';
    console.log (faceElement);
}

faceElement.addEventListener ('click', (handleclick)); 
