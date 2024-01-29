function selectDifficulty(dif) {
    localStorage.setItem('difficulty', dif);

    location.href = './game.html';
}

function getBackground() { 
    console.log("Getting Background Colors");

    let background = localStorage.getItem("background");

    document.body.style.backgroundColor = background;
}

window.addEventListener("load", (event) => {
    getBackground();
});