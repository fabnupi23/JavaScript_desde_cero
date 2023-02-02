const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafo = document.querySelector('.parrafo');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log({
    h1,
    p,
    parrafo,
    pid,
    input
});

h1.innerHTML = 'Patito'
h1.innerText = 'Patito'
console.log(h1.getAttribute('pantalla'));
h1.setAttribute('pantalla', 'class');

const img = document.createElement('img');
img.setAttribute('src', 'https://thumbor.cdn.classpert.com/VgXFfw4_jgm1fP0eNyv1FePQx0g=/768x0/https%3A%2F%2Fcdn.classpert.com%2Fuploads%2Fpost__platzi-logo-desenho__1_-bb4aed50c2c78cf17458ee547e533f52.jpg');
console.log(img);

pid.append(img);