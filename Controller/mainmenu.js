function changeBackground() {
  var newColor = prompt("Enter a color (e.g. 'red', '#00FF00', 'rgb(0, 255, 0)'):"); // Uses a browser prompt to get input.

  localStorage.setItem("background", newColor); // Save the data.

  document.body.style.backgroundColor = newColor;
}