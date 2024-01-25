function retrieveUserNames() {
    console.log('Loading Username');
    let player1 = localStorage.getItem('player1');
    let player2 = localStorage.getItem('player2');
  
    if (player1==null) console.log("Loaded Player 1 NULL")
    else if (player2==null) console.log("Loaded Player 2 Null");
    else {
      document.getElementById("player1").innerHTML = player1;
      document.getElementById('player2').innerHTML = player2;
    }
  }

function getBackground() {
    console.log("Getting Background Colors");

    let background = localStorage.getItem("background");

    document.body.style.backgroundColor = background;
}

window.addEventListener("load", (event) => {
    retrieveUserNames();
    getBackground();
});

function selectDifficulty(dif) {
    localStorage.setItem('difficulty', dif);

    location.href='./game.html' // change to be the actual game HTML File.
}