function saveUsernames() {
    var player1 = document.getElementById('player1').value;
    var player2 = document.getElementById('player2').value; // Gets the value the user has entered.
  
    if (player1 == "") player1 = "Player 1"; // Overwrites just in case of blank.
    if (player2 == "") player2 = "Player 2";
  
    localStorage.setItem('player1', player1); // Saves the Player names
    localStorage.setItem('player2', player2);
    localStorage.setItem('background', 'white'); // Overwrites the save of the background just in case.

    location.href='./View/menu.html' // Redirects to menu.
}