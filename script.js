/* The size of canvas element */
let scale = 1;
let width = 1280 * scale;
let height = 720 * scale;

/**
 * sleep - delays program execution
 * @param {Int} ms
 * @returns a Promise
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * drawer - takes care of drawing the specified color code
 * in the @canvas element
 * @param {Element} canvas
 */
async function drawer(canvas) {
    let color = 'rgba(255, 0, 0, 255)';

    let ctx = canvas.getContext('2d');

    for (let i = 0; i < height; i++) {

        for (let j = 0; j < width; j++) {
            color = 'rgba(' + i + ', ' + i + ', ' + j + ', 255)';

            ctx.fillStyle = color;

            /* x, y, width, height */
            ctx.fillRect(j * scale, i * scale, scale, scale);
        }
        await sleep(1);
    }
    alert("finished");
}

/**
 * addDrawer - creates and adds the canvas element into body
 *
 * @returns The canvas Element
 */
function addDrawer() {
    let body = document.querySelector("body");
    let canvas = document.createElement("canvas")

    canvas.setAttribute("width", width + "px");
    canvas.setAttribute("height", height + "px");

    body.appendChild(canvas);

    return canvas;
}

/**
 * onload - the inicializator
 * this function runs after HTML is completely load
 */
window.onload = function () {
    let canvas = addDrawer(width, height);

    drawer(canvas);
}
