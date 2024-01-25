function selectDifficulty(dif) {
    localStorage.setItem('difficulty', dif);

    location.href='./game.html' // change to be the actual game HTML File.
}