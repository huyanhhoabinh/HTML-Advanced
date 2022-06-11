const RAD = Math.PI / 180;
const scrn = document.getElementById('canvas');
const sctx = scrn.getContext("2d");

let frames = 0;
let dx = 2;
const state = {
    curr: 0,
    getReady: 0,
    Play: 1,
    gameOver: 2,

}

const bg = {
    sprite: new Image(),
    x: 0,
    y: 0,
    draw: function () {
        y = parseFloat(scrn.height - this.sprite.height);
        sctx.drawImage(this.sprite, this.x, y);
    }
};
const gndSprite = new Image();
gndSprite.src = "img/ground.png";
const gnd = {
    x: 0,
    y: 0,
    draw: function () {
        this.y = parseFloat(scrn.height - gndSprite.height);
        sctx.drawImage(gndSprite, this.x, this.y);
    },
    update: function () {
        if (state.curr != state.Play) return;
        this.x -= dx;
        this.x = this.x % (this.sprite.width / 2);
    }
};

const bird = {
    animations:
        [
            {sprite: new Image()},
            {sprite: new Image()},
            {sprite: new Image()},
            {sprite: new Image()},
        ],
    rotatation: 0,
    x: 50,
    y: 100,
    speed: 0,
    gravity: .125,
    thrust: 3.6,
    frame: 0,
    draw: function () {
        let h = this.animations[this.frame].sprite.height;
        let w = this.animations[this.frame].sprite.width;
        sctx.save();
        sctx.translate(this.x, this.y);
        sctx.rotate(this.rotatation * RAD);
        sctx.drawImage(this.animations[this.frame].sprite, -w / 2, -h / 2);
        sctx.restore();
    },
    update: function () {
        let r = parseFloat(this.animations[0].sprite.width) / 2;
        switch (state.curr) {
            case state.getReady :
                this.rotatation = 0;
                this.y += (frames % 10 == 0) ? Math.sin(frames * RAD) : 0;
                this.frame += (frames % 10 == 0) ? 1 : 0;
                break;
            case state.Play :
                this.frame += (frames % 5 == 0) ? 1 : 0;
                this.y += this.speed;
                this.setRotation()
                this.speed += this.gravity;
                if (this.y + r >= gnd.y || this.collisioned()) {
                    state.curr = state.gameOver;
                }

                break;
            case state.gameOver :
                this.frame = 1;
                if (this.y + r < gnd.y) {
                    this.y += this.speed;
                    this.setRotation()
                    this.speed += this.gravity * 2;
                } else {
                    this.speed = 0;
                    this.y = gnd.y - r;
                    this.rotatation = 90;
                    if (!SFX.played) {
                        SFX.die.play();
                        SFX.played = true;
                    }
                }

                break;
        }
        this.frame = this.frame % this.animations.length;
    },
    flap: function () {
        if (this.y > 0) {
            SFX.flap.play();
            this.speed = -this.thrust;
        }
    },
    setRotation: function () {
        if (this.speed <= 0) {

            this.rotatation = Math.max(-25, -25 * this.speed / (-1 * this.thrust));
        } else if (this.speed > 0) {
            this.rotatation = Math.min(90, 90 * this.speed / (this.thrust * 2));
        }
    },
    collisioned: function () {
        if (!pipe.pipes.length) return;
        let bird = this.animations[0].sprite;
        let x = pipe.pipes[0].x;
        let y = pipe.pipes[0].y;
        let r = bird.height / 4 + bird.width / 4;
        let roof = y + parseFloat(pipe.top.sprite.height);
        let floor = roof + pipe.gap;
        let w = parseFloat(pipe.top.sprite.width);
        if (this.x + r >= x) {
            if (this.x + r < x + w) {
                if (this.y - r <= roof || this.y + r >= floor) {
                    SFX.hit.play();
                    return true;
                }

            } else if (pipe.moved) {
                UI.score.curr++;
                SFX.score.play();
                pipe.moved = false;
            }


        }
    }
};
gnd.sprite.src = "img/ground.png";
bg.sprite.src = "img/BG.png";
bird.animations[0].sprite.src = "img/bird/b0.png";
bird.animations[1].sprite.src = "img/bird/b1.png";
bird.animations[2].sprite.src = "img/bird/b2.png";
bird.animations[3].sprite.src = "img/bird/b0.png";
sctx.fillStyle = "#30c0df";
sctx.fillRect(0, 0, scrn.width, scrn.height)
bg.draw();
bird.draw();