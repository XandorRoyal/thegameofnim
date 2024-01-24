function saveUsernames() {
  var player1 = document.getElementById('player1').value;
  var player2 = document.getElementById('player2').value;

  localStorage.setItem('player1', player1);
  localStorage.setItem('player2', player2);
}
function changeBackground() {
  var newColor = prompt("Enter a color (e.g. 'red', '#00FF00', 'rgb(0, 255, 0)'):");
  document.body.style.backgroundColor = newColor;
}