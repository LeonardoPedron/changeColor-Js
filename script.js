console.log('CONNECT SCRIPT.JS');

document.addEventListener('DOMContentLoaded', () => {
    let body = document.querySelector('body'); 
    body.style.background = `(255, 255, 255, 1)`;

    let btn = document.querySelector('div#changeColor');
    let txt = document.querySelector('h4#rgbaTxt');

    let max = 256;

    const randomNumber = (max) => { // Function generates random numbers params(max: number)
        return Math.floor(Math.random() * max); // 0 - (max - 1)
    }

    
    btn.addEventListener('click', () => {
        let rdVal1 = randomNumber(max);
        let rdVal2 = randomNumber(max);
        let rdVal3 = randomNumber(max);

        body.style.background = `rgba(${rdVal1},${randomNumber(rdVal2)},${randomNumber(rdVal3)},1)`;
        txt.textContent = `RGBA (${rdVal1}, ${rdVal2}, ${rdVal3}, 1)`;
    })
});