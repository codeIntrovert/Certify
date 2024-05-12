let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let box4 = document.getElementById('box4');
let box5 = document.getElementById('box5');
let box6 = document.getElementById('box6');
let box7 = document.getElementById('box7');
let box8 = document.getElementById('box8');
let box9 = document.getElementById('box9');
let winnerMsg = document.getElementById('winnerMsg');
let winner = document.getElementById('winner');

let chance = 0;

let boxChoice1 = 0;
let boxChoice2 = 0;
let boxChoice3 = 0;
let boxChoice4 = 0;
let boxChoice5 = 0;
let boxChoice6 = 0;
let boxChoice7 = 0;
let boxChoice8 = 0;
let boxChoice9 = 0;

function checkWinner(){
    if ((boxChoice1 == 'X' && boxChoice2 == 'X' && boxChoice3 == 'X')||(boxChoice1 == 'O' && boxChoice2 == 'O' && boxChoice3 == 'O')){
        winnerMsg.style.display = 'flex';
        if(boxChoice1 == 'X'){
            winner.innerText = 'X';
        }
        else{
            winner.innerText = 'O';
        }
    }
    if ((boxChoice4 == 'X' && boxChoice5 == 'X' && boxChoice6 == 'X')||(boxChoice4 == 'O' && boxChoice5 == 'O' && boxChoice6 == 'O')){
        winnerMsg.style.display = 'flex';
        if(boxChoice4 == 'X'){
            winner.innerText = 'X';
        }
        else{
            winner.innerText = 'O';
        }
    }
    if ((boxChoice7 == 'X' && boxChoice8 == 'X' && boxChoice9 == 'X')||(boxChoice7 == 'O' && boxChoice8 == 'O' && boxChoice9 == 'O')){
        winnerMsg.style.display = 'flex';
        if(boxChoice7 == 'X'){
            winner.innerText = 'X';
        }
        else{
            winner.innerText = 'O';
        }
    }
    if ((boxChoice1 == 'X' && boxChoice4 == 'X' && boxChoice7 == 'X')||(boxChoice1 == 'O' && boxChoice4 == 'O' && boxChoice7 == 'O')){
        winnerMsg.style.display = 'flex';
        if(boxChoice1 == 'X'){
            winner.innerText = 'X';
        }
        else{
            winner.innerText = 'O';
        }
    }
    if ((boxChoice2 == 'X' && boxChoice5 == 'X' && boxChoice8 == 'X')||(boxChoice2 == 'O' && boxChoice5 == 'O' && boxChoice8 == 'O')){
        winnerMsg.style.display = 'flex';
        if(boxChoice2 == 'X'){
            winner.innerText = 'X';
        }
        else{
            winner.innerText = 'O';
        }
    }
    if ((boxChoice3 == 'X' && boxChoice6 == 'X' && boxChoice9 == 'X')||(boxChoice3 == 'O' && boxChoice6 == 'O' && boxChoice9 == 'O')){
        winnerMsg.style.display = 'flex';
        if(boxChoice3 == 'X'){
            winner.innerText = 'X';
        }
        else{
            winner.innerText = 'O';
        }
    }
    if ((boxChoice1 == 'X' && boxChoice5 == 'X' && boxChoice9 == 'X')||(boxChoice1 == 'O' && boxChoice5 == 'O' && boxChoice9 == 'O')){
        winnerMsg.style.display = 'flex';
        if(boxChoice1 == 'X'){
            winner.innerText = 'X';
        }
        else{
            winner.innerText = 'O';
        }
    }
    if ((boxChoice3 == 'X' && boxChoice5 == 'X' && boxChoice7 == 'X')||(boxChoice3 == 'O' && boxChoice5 == 'O' && boxChoice7 == 'O')){
        winnerMsg.style.display = 'flex';
        if(boxChoice3 == 'X'){
            winner.innerText = 'X';
        }
        else{
            winner.innerText = 'O';
        }
    }
    if(chance == 9){
        winnerMsg.style.display = 'flex';
        winnerMsg.innerText = 'Game Draw!';
    }
    

}

box1.addEventListener('click', () => {
    if(chance%2 == 0){
    box1.innerHTML = '<img class="cross-circle" width="48" height="48" src="assets/x.svg" alt="close-window"/>';
    box1.style.pointerEvents = 'none';
    boxChoice1 = 'X';
    
    }
    else{
        box1.innerHTML = '<img class="cross-circle" width="48" height="48" src="assets/o.svg" alt="close-window"/>';
        box1.style.pointerEvents = 'none';
        boxChoice1 = 'O';
    }
    chance++;
    checkWinner();
});

box2.addEventListener('click', () => {
    if(chance%2 == 0){
    box2.innerHTML = '<img class="cross-circle" width="48" height="48" src="assets/x.svg" alt="close-window"/>';
    box2.style.pointerEvents = 'none';
    boxChoice2 = 'X';
    }
    else{
        box2.innerHTML = '<img class="cross-circle" width="48" height="48" src="assets/o.svg" alt="close-window"/>';
        box2.style.pointerEvents = 'none';
        boxChoice2 = 'O';
    }
    chance++;
    checkWinner();
});
box3.addEventListener('click', () => {
    if(chance%2 == 0){
    box3.innerHTML = '<img class="cross-circle" width="48" height="48" src="assets/x.svg" alt="close-window"/>';
    box3.style.pointerEvents = 'none';
    boxChoice3 = 'X';}
    else{
        box3.innerHTML = '<img class="cross-circle" width="48" height="48" src="assets/o.svg" alt="close-window"/>';
        box3.style.pointerEvents = 'none'
        boxChoice3 = 'O';
    }
    chance++;
    checkWinner();
});
box4.addEventListener('click', () => {
    if(chance%2 == 0){
    box4.innerHTML = '<img class="cross-circle" width="48" height="48" src="assets/x.svg" alt="close-window"/>';
    box4.style.pointerEvents = 'none';
    boxChoice4 = 'X';}
    else{
        box4.innerHTML = '<img class="cross-circle" width="48" height="48" src="assets/o.svg" alt="close-window"/>';
        box4.style.pointerEvents = 'none';
        boxChoice4 = 'O';
    }
    chance++;
    checkWinner();
});
box5.addEventListener('click', () => {
    if(chance%2 == 0){
    box5.innerHTML = '<img class="cross-circle" width="48" height="48" src="assets/x.svg" alt="close-window"/>';
    box5.style.pointerEvents = 'none';
    boxChoice5 = 'X';}
    else{
        box5.innerHTML = '<img class="cross-circle" width="48" height="48" src="assets/o.svg" alt="close-window"/>';
        box5.style.pointerEvents = 'none';
        boxChoice5 = 'O';
    }
    chance++;
    checkWinner();
});
box6.addEventListener('click', () => {
    if(chance%2 == 0){
    box6.innerHTML = '<img class="cross-circle" width="48" height="48" src="assets/x.svg" alt="close-window"/>';
    box6.style.pointerEvents = 'none';
    boxChoice6 = 'X';}
    else{
        box6.innerHTML = '<img class="cross-circle" width="48" height="48" src="assets/o.svg" alt="close-window"/>';
        box6.style.pointerEvents = 'none'
        boxChoice6 = 'O';
    }
    chance++;
    checkWinner();
});
box7.addEventListener('click', () => {
    if(chance%2 == 0){
    box7.innerHTML = '<img class="cross-circle" width="48" height="48" src="assets/x.svg" alt="close-window"/>';
    box7.style.pointerEvents = 'none';
    boxChoice7 = 'X';}
    else{
        box7.innerHTML = '<img class="cross-circle" width="48" height="48" src="assets/o.svg" alt="close-window"/>';
        box7.style.pointerEvents = 'none';
        boxChoice7 = 'O';
    }
    chance++;
    checkWinner();
});
box8.addEventListener('click', () => {
    if(chance%2 == 0){
    box8.innerHTML = '<img class="cross-circle" width="48" height="48" src="assets/x.svg" alt="close-window"/>';
    box8.style.pointerEvents = 'none';
    boxChoice8 = 'X';}
    else{
        box8.innerHTML = '<img class="cross-circle" width="48" height="48" src="assets/o.svg" alt="close-window"/>';
        box8.style.pointerEvents = 'none';
        boxChoice8 = 'O';
    }
    chance++;
    checkWinner();
});
box9.addEventListener('click', () => {
    if(chance%2 == 0){
    box9.innerHTML = '<img class="cross-circle" width="48" height="48" src="assets/x.svg" alt="close-window"/>';
    box9.style.pointerEvents = 'none';
    boxChoice9 = 'X';}
    else{
        box9.innerHTML = '<img class="cross-circle" width="48" height="48" src="assets/o.svg" alt="close-window"/>';
        box9.style.pointerEvents = 'none';
        boxChoice9 = 'O';
    }
    chance++;
    checkWinner();
});