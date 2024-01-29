document.addEventListener('DOMContentLoaded', function () {
    let player1 = localStorage.getItem('player1') || 'Player 1';
    let player2 = localStorage.getItem('player2') || 'Player 2';
    getBackground();
    let currentPlayer = player1;
    let rows = 5;
    let stonesInRows = [1, 2, 3, 4, 5];
    let selectedRow = null;
    let removedStones = 0;
    
    function changeBackground() {
        var newColor = prompt("Enter a color (e.g. 'red', '#00FF00', 'rgb(0, 255, 0)'):");
      
        localStorage.setItem("background", newColor);
      
        document.body.style.backgroundColor = newColor;
      }
    function getBackground() {
        console.log("Getting Background Colors");
    
        let background = localStorage.getItem("background");
    
        document.body.style.backgroundColor = background;
    }
    function updateGameState() {
        const matchButtons = document.getElementById('matchButtons');
        const removeButtons = document.getElementById('removeButtons');
        const turnDisplay = document.getElementById('turnDisplay');

        matchButtons.innerHTML = '';
        removeButtons.innerHTML = '';
        turnDisplay.textContent = `Turn: ${currentPlayer}`;

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < stonesInRows[i]; j++) {
                const matchButton = document.createElement('button');
                matchButton.textContent = 'match';
                matchButton.onclick = function () {
                    selectStone(i);
                };
                matchButtons.appendChild(matchButton);
            }

            const removeButton = document.createElement('button');
            removeButton.textContent = `Remove from R${i + 1}`;
            removeButton.onclick = function () {
                removeStoneFromRow(i);
            };
            removeButtons.appendChild(removeButton);

            matchButtons.appendChild(document.createElement('br')); // Line break for pyramid shape
        }
    }

    function selectStone(row) {
        // Handle stone selection for a specific row
        if (selectedRow === null || selectedRow === row) {
            stonesInRows[row]--;
            removedStones++;
            updateGameState();
            checkWinCondition();
        }
    }

    function removeStoneFromRow(row) {
        // Handle removing stone from a specific row
        if (stonesInRows[row] > 0) {
            if (selectedRow === null) {
                selectedRow = row;
            }

            if (selectedRow === row) {
                stonesInRows[row]--;
                removedStones++;
                updateGameState();
                checkWinCondition();
            } else {
                alert('You can only remove stones from the selected row!');
            }
        } else {
            alert('This row is empty! Please pick a non-empty row.');
        }
    }

    function checkWinCondition() {
        if (stonesInRows.every((stones) => stones === 0)) {
            const winner = currentPlayer === player1 ? player2 : player1;
            alert(`Congratulations, ${winner} wins!`);
            displayReplayButton();
        }
    }

    function displayReplayButton() {
        const replayButton = document.createElement('button');
        replayButton.textContent = 'Replay';
        replayButton.onclick = replay;
        document.body.appendChild(replayButton);
    }

    function replay() {
        // Reload the page to start a new game
        window.location.href = './menu.html';
    }

    window.endTurn = function () {
        if (removedStones > 0) {
            if (selectedRow === null || stonesInRows[selectedRow] >= 0) {
                selectedRow = null; // Reset selected row at the end of the turn

                // Check if removing a stone left the row empty and switch players if needed
                if (stonesInRows.some((stones) => stones > 0)) {
                    currentPlayer = (currentPlayer === player1) ? player2 : player1; // Switch players
                }

                updateGameState();
                removedStones = 0; // Reset removed stones counter for the next turn
            } else {
                alert('You must remove a stone before ending your turn!');
            }
        } else {
            alert('You must remove at least one stone before ending your turn!');
        }
    };

    // Initial game setup
    updateGameState();
});