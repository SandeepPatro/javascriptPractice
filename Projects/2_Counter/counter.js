let display = document.querySelector('#disp');
let value

const increase = document.querySelector('#increase');
increase.addEventListener('click', (e) => {
    value = parseInt(display.textContent);
    value++;
    display.textContent = value;
    console.log(value);
    color();
});

const decrease = document.querySelector('#decrease');
decrease.addEventListener('click', (f) => {
    value = parseInt(display.textContent);
    console.log(display.textContent);
    value--;
    display.textContent = value;
    color();
});

const reset = document.querySelector('#reset');
reset.addEventListener('click', (g) => {
    display.textContent = 0;
    color();
});

function color() {
    if (value > 0) {
        display.classList.add('positive');
        display.classList.remove('negative');
        display.classList.remove('zero');
    } else if (value < 0) {
        display.classList.add('negative');
        display.classList.remove('positive');
        display.classList.remove('zero');
    }
    else if (value == 0) {
        display.classList.add('zero');
        display.classList.remove('positive');
        display.classList.remove('negative');

    }
}