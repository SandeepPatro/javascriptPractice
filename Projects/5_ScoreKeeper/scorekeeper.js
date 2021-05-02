let p1score = document.querySelector('.p1score');
let p2score = document.querySelector('.p2score');
const length = document.querySelector('#length');
let p1count = 0; p2count = 0;
let matchlength

const buttons = document.querySelectorAll('.butt');

const butp1 = document.querySelector('.player1');
const butp2 = document.querySelector('.player2');
const butreset = document.querySelector('.reset');

length.addEventListener('change', () => {
    matchlength = length.value;
    butp1.disabled = false;
    butp2.disabled = false;
    p1count = 0;
    p2count = 0;
    p1score.textContent = p1count;
    p2score.textContent = p2count;
});

butp1.addEventListener('click', () => {

    p1count++
    if (p1count > matchlength || matchlength === "--") {
        butp1.disabled = true;
        butp2.disabled = true;
    } else if (p2count == matchlength) {
        p2score.textContent = p2count;
        butp1.disabled = true;
        butp2.disabled = true;
    } else {

        p1score.textContent = p1count;
    }

});


butp2.addEventListener('click', () => {
    p2count++;
    if (p2count > matchlength || matchlength == "--") {
        butp1.disabled = true;
        butp2.disabled = true;
    } else if (p2count == matchlength) {
        p2score.textContent = p2count;
        butp1.disabled = true;
        butp2.disabled = true;
    } else {
        p2score.textContent = p2count;
    }
});


butreset.addEventListener('click', () => {
    p1count = 0;
    p2count = 0;
    p1score.textContent = p1count;
    p2score.textContent = p2count;
    length.value = "--";
    matchlength = 0;
    butp1.disabled = false;
    butp2.disabled = false;
});

