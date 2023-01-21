import img from "./img.js";
const canvas = document.createElement("canvas");
document.body.append(canvas);
const ctx = canvas.getContext("2d");
canvas.width = 2000 / 1.5;
canvas.height = 1143 / 1.5; //based on image dimensions

const background = img("BG.png"); //import background

function game() {
    ctx.drawImage(background,0,0,2000,1143,0,0,2000/1.5);

}

setInterval(game, 1000 / 60);