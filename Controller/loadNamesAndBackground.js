function retrieveUserNames() {
    console.log('Loading Username');
    let player1 = localStorage.getItem('player1'); // Get Player 1 Name
    let player2 = localStorage.getItem('player2'); // Get Player 2 Name
  
    if (player1==null) {
      console.log("Loaded Player 1 NULL") // If Null, report.
      location.href='../index.html' // Player 1 is Null, push towards index.
    }
    else if (player2==null) {
      console.log("Loaded Player 2 Null"); // ^
      location.href='../index.html'
    }
    // Players would be pushed back to index if they have no saved name.
    document.getElementById("player1").innerHTML = player1; // Not Null, State Username
    document.getElementById('player2').innerHTML = player2; // Not Null, State Username
  }

function getBackground() { 
    console.log("Getting Background Colors");

    let background = localStorage.getItem("background"); // Loads the saved background color.

    document.body.style.backgroundColor = background;
}

window.addEventListener("load", (event) => { // When loaded, retrieve saved data and act upon.
    retrieveUserNames();
    getBackground();
});