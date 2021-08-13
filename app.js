// import functions and grab DOM elements
const duckTouchdown = document.getElementById('ducks-touchdown');
const corvidsaeTouchdown = document.getElementById('corvidsae-touchdown');

const ducksScore = document.getElementById('ducks-score');
const corvidsaeScore = document.getElementById('corvidsae-score');



// initialize state
let crazy = 0;
let lazy = 0;

// set event listeners 
duckTouchdown.addEventListener('click', () => {
    crazy = crazy + 7;
    ducksScore.textContent = crazy;
});
corvidsaeTouchdown.addEventListener('click', () => {
  lazy = lazy + 7;
  corvidsaeScore.textContent = lazy;
});