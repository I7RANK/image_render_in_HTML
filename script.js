/* The size of canvas element */
let delay = 1;
let scale = 1;
let width = 1280 * scale;
let height = 720 * scale;

function setInitValues() {
    let txt_delay = document.querySelector('input[name="txt_delay"]').value;
    let txt_scale = document.querySelector('input[name="txt_scale"]').value;
    let txt_width = document.querySelector('input[name="txt_width"]').value;
    let txt_height = document.querySelector('input[name="txt_height"]').value;

    txt_delay = parseInt(txt_delay, 10);
    txt_scale = parseInt(txt_scale, 10);
    txt_width = parseInt(txt_width, 10);
    txt_height = parseInt(txt_height, 10);

    if (isNaN(txt_width) || isNaN(txt_scale) || isNaN(txt_scale) || isNaN(txt_delay)) {
        alert("Only whole numbers are allowed");
    } else {
        delay = txt_delay;
        scale = txt_scale;
        width = txt_width * scale;
        height = txt_height * scale;
        console.log("x =", width);
        console.log("y =", height);
        console.log("scale =", scale);
        console.log("delay =", delay);
        start();
    }
}

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
 * in the @ctx element
 *
 * @param {Element} ctx - the context of canvas element
 */
async function drawer(ctx) {
    let color = 'rgba(255, 0, 0, 255)';

    for (let i = 0; i < height; i++) {

        for (let j = 0; j < width; j++) {
            color = 'rgba(' + i + ', ' + i + ', ' + j + ', 255)';

            ctx.fillStyle = color;

            /* x, y, width, height */
            ctx.fillRect(j * scale, i * scale, scale, scale);
        }

        await sleep(delay);
    }
    console.log("finished");
}

/**
 * setDrawer - creates and adds the canvas element into body
 *
 * @returns The canvas Element
 */
function setDrawer() {
    let canvas = document.querySelector("#canvas");

    canvas.setAttribute("width", width + "px");
    canvas.setAttribute("height", height + "px");

    return canvas;
}

/**
 * start - starts the drawing
 */
function start() {
    const canvas = setDrawer(width, height);

    const context = canvas.getContext('2d');

    /* clear the context */
    context.clearRect(0, 0, canvas.width, canvas.height);

    drawer(context);
}

/**
 * onload - the inicializator
 * this function runs after HTML is completely load
 */
window.onload = function () {}
