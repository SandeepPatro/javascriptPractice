const display = document.querySelector('#colordisp');
const rgb = document.querySelector('button');
console.log(rgb);
// capture click event on button
rgb.addEventListener('click', function () {
    // Join the randon numbers to create an rgb string
    let newcolor = `rgb(${rgbGenerator()}, ${rgbGenerator()}, ${rgbGenerator()})`
    console.log(newcolor);
    // attach the new color created by our generator to body
    document.body.style.background = newcolor;
    // Channge the Value on the display to generated RGB
    display.innerText = newcolor;
});

//Copy to Clipboard

function rgbGenerator() {
    // We are going to generate 3 randome numbers between 0 to 255
    // Since RGB has 3 numbers and then join them
    return Math.floor(Math.random() * 255);
}