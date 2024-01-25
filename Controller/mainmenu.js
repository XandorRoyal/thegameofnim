function changeBackground() {
  var newColor = prompt("Enter a color (e.g. 'red', '#00FF00', 'rgb(0, 255, 0)'):");

  localStorage.setItem("background", newColor);

  document.body.style.backgroundColor = newColor;
}