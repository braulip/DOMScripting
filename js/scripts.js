//querySelector

const heading = document.querySelector('.header__texto h2') //o a 1 elementos
heading.textContent = 'Nuevo Heading';
console.log(heading)

//querySelectorAll

const enlaces = document.querySelectorAll('.navegacion a') //devuelve todos los que concuerden con el selector
console.log(enlaces);

enlaces[0].textContent = 'Nuevo Texto';
enlaces[0].href = 'http://google.com';
enlaces[0].classList.add('nueva-clase');
enlaces[0].classList.remove('nueva-clase');

//GetElementById

const heading2 = document.getElementById('heading');
console.log(heading2);