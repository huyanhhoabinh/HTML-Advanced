//gan doi tuong screen
var trunggianX = 0;
var trunggianY = 0;

var tile;
var x = 0;
var y = 0;
var screen = document.getElementById('big');
screen.style.height = window.innerWidth + 'px';
screen.style.height = window.innerHeight + 'px';
var box = document.getElementById('box');
console.log(box.offsetTop);
console.log(box.offsetLeft);
function Box(object) {


    this.init = function () {
        screen.addEventListener('click', function (event) {
            // init();
            move(event);
        });
    }
    function move(event) {
        //x,y la vi tri se click chuot
        //trunggianX,trunggianY se la vi tri cua hinh vuong
        //ta luu vi tri truoc cua click,neu lan dau tien thi no se la 0,0 cac lan sau no se la vi tri gan cuoi cua con chuot

        trunggianX = x;
        trunggianY = y;
        tile = Math.abs(parseFloat((event.clientX - trunggianX) / (event.clientY - trunggianY)));

        x = event.clientX;
        y = event.clientY;


        moveSlow();
    }
    ;
    function moveSlow() {
        //truong hop ma vi tri kick chuot co toa do theo chieu ngang nho hon
        if (x > trunggianX) {
            console.log("x be hon");
            trunggianX = trunggianX + tile;
            object.style.left = trunggianX + 'px';
            if (y > trunggianY) {
                trunggianY = trunggianY + 1;
                object.style.top = trunggianY + 'px';
            } else {
                trunggianY = trunggianY - 1;
                object.style.top = trunggianY + 'px';
            }
        } else {

            trunggianX = trunggianX - tile;
            object.style.left = trunggianX + 'px';
            if (y > trunggianY) {
                trunggianY = trunggianY + 1;
                object.style.top = trunggianY + 'px';
            } else {
                trunggianY = trunggianY - 1;
                object.style.top = trunggianY + 'px';
            }
        }
        console.log(parseInt('22px'));
        if (parseInt(object.style.top) == y) {
            clearTimeout(animate);
        } else {
            animate = setTimeout(moveSlow, 10);
        }
    }
    ;
}
var chay = new Box(box);
chay.init();