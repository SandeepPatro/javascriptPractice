const display = document.querySelector('#colordisp');
const hex = document.querySelector('#btn');
// Capture Click event on button
hex.addEventListener('click', function () {
    //create a randon HEX
    let rand = hexgenerator();
    // change the background to the HEX created
    document.body.style.background = "#" + rand;
    // change the text on Display to generated HEX
    display.innerText = "#" + rand;
});

function hexgenerator() {
    // 16777215 is a decimal number for the number of colors
    // when you give toString the radix of base 16 you get correcponding hex value
    return Math.floor(Math.random() * 16777215).toString(16);
}