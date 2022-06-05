const RAD = Math.PI / 180;
const scrn = document.getElementById('canvas');
const sctx = scrn.getContext("2d");
const bg = {
    sprite: new Image(),
    x: 0,
    y: 0,
    draw: function () {
        y = parseFloat(scrn.height - this.sprite.height);
        sctx.drawImage(this.sprite, this.x, y);
    }
};

bg.sprite.src = "img/BG.png";

sctx.fillStyle = "#30c0df";
sctx.fillRect(0, 0, scrn.width, scrn.height)
bg.draw();