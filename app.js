import generateCard from './components/generateRandomCard.js';


const app = document.querySelector('#app');
const btnNewCard = document.querySelector('#btnNewCard')
const inputs = document.querySelectorAll('input');

const render = () => {
    app.innerHTML = generateCard;
}
render();

btnNewCard.addEventListener('click', () => {
    location.reload()
})
setTimeout(() => {
    location.reload()
}, 10000);

inputs.forEach( element => element.addEventListener(
    'change', (e) => {
        const card = document.querySelector('#card');
        e.target.id === 'inputWidth'? card.style.width = `${e.target.value}rem`
        : card.style.height = `${e.target.value}rem`;
    }
))