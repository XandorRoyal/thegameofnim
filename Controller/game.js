var player1;
var player2;
var currentPlayer;
var rowSelected;

const difficultyToChips = [
    [3,4,5],
    [3,4,5,7],
    [3,4,5,6,7,10]
]

function validateOrRedirect(id) {
    let item = localStorage.getItem(id);
    if (item == null) location.href = '../index.html';
    return item;
}

function checkWinCon(){
    if (matchButtons.childElementCount == 0) {console.log("Winner"); return true;}
    console.log("No winner");
    return false;
}

let degree = 180;
function nextPlayerTurn() {
    if (rowSelected == null) { alert("You must select a chip!"); return; }

    rowSelected = null;
    currentPlayer = currentPlayer == player1 ? player2 : player1;
    console.log(currentPlayer);

    degree = degree > 180 ? degree -= 180 : degree += 180 ;
    
    arrowImg.style.transform = "rotate("+degree+"deg)";
}

function endGame() {
    const replayButton = document.createElement('button');
    const winnerText = document.createElement('h2');

    replayButton.textContent = 'Replay';
    replayButton.onclick = () => { location.href = './menu.html'; };

    winnerText.textContent = currentPlayer+" has won!";

    matchButtons.appendChild(replayButton);
    matchButtons.appendChild(winnerText);

    document.getElementById('endTurn').style.visibility = "hidden";
}

function selectChip(chipEle){
    if (rowSelected == null) rowSelected = chipEle.parentNode;
    if (chipEle.parentNode != rowSelected) {alert("You must choose chips from the same row."); return; }

    if (chipEle.parentNode.childElementCount == 1) {
        chipEle.parentNode.remove();
        if (!checkWinCon()) nextPlayerTurn();
        else endGame();
   }
    else chipEle.remove();
}

function generateBoard(board){
    for (let row = 0; row < board.length; row++) {
        let rowEle = document.createElement('div');
        rowEle.classList.add('chipRow');
        matchButtons.appendChild(rowEle);
        for (let chipNum = 0; chipNum < board[row]; chipNum++){
            let chipEle = document.createElement('button');
            chipEle.classList.add("chip");
            chipEle.onclick = function () {
                selectChip(chipEle);
            };

            rowEle.appendChild(chipEle);
        }
   }
}

window.addEventListener("load", (event) => {
    player1 = validateOrRedirect('player1');
    player2 = validateOrRedirect('player2');
    let difficulty = validateOrRedirect('difficulty');
    
    const matchButtons = document.getElementById('matchButtons');

    difficulty -= 1;

    currentPlayer = player1;

    let board = difficultyToChips[difficulty];
    generateBoard(board);
});