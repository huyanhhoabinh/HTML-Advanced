var board = [];
var rows = 8;
var columns = 8;
var minesCount = 5;
var minesLocation = [];
var titlesClicked = 0;
var flagEnabled = false;
var gameOver = false;
window.onload = function () {
    startGame();
}
function setMines() {
    let mineLeft = minesCount;
    while(mineLeft > 0) {
        let r = Math.floor(Math.random()*rows);
        let c = Math.floor(Math.random()*columns);
        let id = r.toString() + "-" + c.toString();
        if(!minesLocation.includes(id)) {
            minesLocation.push(id);
            mineLeft -= 1;
        }
    }
}
function startGame() {
    // document.getElementsByName("body")[0].addEventListener("click", function (e){
    //     e.preventDefault();
    //     e.stopPropagation();
    // });
    document.getElementById("mines-count").innerText = minesCount;
    document.getElementById("flag-button").addEventListener("click", setFlag);
    setMines();
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.addEventListener("click", clickTile);
            document.getElementById("board").append(tile);
            row.push(tile);
        }
        board.push(row);
    }
}
function clickTile() {
    if(gameOver || this.classList.contains("tile-clicked")) {
        return;
    }
    let tile = this;
    if(flagEnabled) {
        if(tile.innerText == "") {
            tile.innerText = "🚩";
        }
        else if(tile.innerText == "🚩") {
            tile.innerText = "";
        }
        return;
    }
    if(minesLocation.includes(tile.id)) {
      alert("Game Over");
      gameOver = true;
      revealMines();
      return;
    }
    let coords = tile.id.split("-");
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);
    checkMines(r,c);
}
function checkMines(r, c) {
    if(r < 0 || r >= rows || c < 0 || c >= columns) {
        return;
    }
    if(board[r][c].classList.contains("tile-clicked")) {
        return;
    }
    board[r][c].classList.add("tile-clicked");
    titlesClicked+=1;
    let mineFound = 0;

    mineFound += checkTile(r-1, c-1); // top left
    mineFound += checkTile(r-1, c); // top
    mineFound += checkTile(r-1, c+1); // top right
    mineFound += checkTile(r, c - 1); // left
    mineFound += checkTile(r, c + 1); // right
    mineFound += checkTile(r + 1, c - 1); // bottom left
    mineFound += checkTile(r + 1, c); // bottom
    mineFound += checkTile(r + 1, c + 1); // bottom right

    if(mineFound > 0) {
        board[r][c].innerText = mineFound;
        board[r][c].classList.add("x" + mineFound.toString());
    } else {
        checkMines(r-1, c-1); // top left
        checkMines(r-1, c); // top
        checkMines(r-1, c+1); // top right
        checkMines(r, c - 1); // left
        checkMines(r, c + 1); // right
        checkMines(r + 1, c - 1); // bottom left
        checkMines(r + 1, c); // bottom
        checkMines(r + 1, c + 1); // bottom right
    }
    if(titlesClicked == rows*columns - minesCount) {
        document.getElementById("mines-count").innerText = "Clear";
        gameOver = true;
    }
}
function checkTile(r,c) {
    if(r < 0 || r >= rows || c < 0 || c >= columns) {
        return 0;
    }
    if(minesLocation.includes(r.toString()+"-" + c.toString())) {
        return 1;
    }
    return 0;
}
function revealMines() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = board[r][c];
            if(minesLocation.includes(tile.id)) {
                tile.innerText = "💣";
                tile.style.backgroundColor = "red";
            }
        }
    }
}
function setFlag() {
    if(flagEnabled) {
        flagEnabled = false;
        document.getElementById("flag-button").style.backgroundColor = "lightgray";
    } else {
        flagEnabled = true;
        document.getElementById("flag-button").style.backgroundColor = "darkgray";

    }
}