function saveUsernames() {
    var player1 = document.getElementById('player1').value;
    var player2 = document.getElementById('player2').value;
  
    if (player1 == "") player1 = "Player 1";
    if (player2 == "") player2 = "Player 2";
  
    localStorage.setItem('player1', player1);
    localStorage.setItem('player2', player2);
    localStorage.setItem('background', 'white');

    location.href='./View/menu.html'
}