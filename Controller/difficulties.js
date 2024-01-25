function selectDifficulty(dif) {
    localStorage.setItem('difficulty', dif);

    location.href='./game.html';
}