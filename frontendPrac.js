// ROCK PAPER SCISSOR
// ================================
// All selectors
const pcSelectedIcon = document.querySelector(".pcSelectedIcon");
const userSelectedIcon = document.querySelector('.userSelectedIcon');
const userOption = document.querySelectorAll('.userOption div');
const winMsg = document.querySelector('.winMsg p');
const drawMsg = document.querySelector('.drawMatch');
let pcIconChange = undefined;
let rpsgamewin = true;


// This is the animation of pc selected options
function iconChangeAnimation() {
    const iconMarket = ["✊", "🖐", "✌", "✊", "🖐", "✌"];
    pcIconChange = setInterval(() => {
        pcSelectedIcon.innerHTML = iconMarket[Math.floor(Math.random() * 6)];
    }, 70);
}
iconChangeAnimation();

// Showing result messege of the match
// winner of the game
function winalert(msg) {
    winMsg.innerHTML = msg;
    document.querySelector(winMsg.parentElement.style.visibility = "visible");
    userSelectedIcon.style.textShadow = "0px 0px 48px #e9ff00";
    rpsgamewin = false;
}

// loser of the game
function loosealert(loosemsg) {
    winMsg.innerHTML = loosemsg;
    document.querySelector(winMsg.parentElement.style.visibility = "visible");
    pcSelectedIcon.style.textShadow = "0px 0px 48px #e9ff00";
    rpsgamewin = false;
}

// Checking the game result
// Check the match is draw
let rpsCheckDraw = () =>{
    if ((userSelectedIcon.textContent == "✊") && (pcSelectedIcon.textContent == "✊")) {
        rpsgamewin = false;
        drawMsg.classList.add("drawMsgAnimation");
        setTimeout(() => {
            drawMsg.classList.remove("drawMsgAnimation");
            resetGame();
        }, 1000);
    } else if ((userSelectedIcon.textContent == "🖐") && (pcSelectedIcon.textContent == "🖐")) {
        rpsgamewin = false;
        drawMsg.classList.add("drawMsgAnimation");
        setTimeout(() => {
            drawMsg.classList.remove("drawMsgAnimation");
            resetGame();
        }, 1000);
    } else if ((userSelectedIcon.textContent == "✌") && (pcSelectedIcon.textContent == "✌")) {
        rpsgamewin = false;
        drawMsg.classList.add("drawMsgAnimation");
        setTimeout(() => {
            drawMsg.classList.remove("drawMsgAnimation");
            resetGame();
        }, 1000);
    }
}

// check the user is win
let rpsUserWin = () =>{
    if ((userSelectedIcon.textContent == "✊") && (pcSelectedIcon.textContent == "✌")) {
        winalert("Congratulations you win🤩🤩");
    } else if ((userSelectedIcon.textContent == "🖐") && (pcSelectedIcon.textContent == "✊")) {
        winalert("Congratulations you win🤩🤩");
    } else if ((userSelectedIcon.textContent == "✌") && (pcSelectedIcon.textContent == "🖐")) {
        winalert("Congratulations you win🤩🤩");
    }
}

// Check the computer is win
let rpsPcWin = () =>{
    if ((pcSelectedIcon.textContent == "✊") && (userSelectedIcon.textContent == "✌")) {
        loosealert("You loose this match😭😭");
    } else if ((pcSelectedIcon.textContent == "🖐") && (userSelectedIcon.textContent == "✊")) {
        loosealert("You loose this match😭😭");
    } else if ((pcSelectedIcon.textContent == "✌") && (userSelectedIcon.textContent == "🖐")) {
        loosealert("You loose this match😭😭");
    }
}

// Control the game with my keybord
document.addEventListener("keypress", function(key){
    // Press 1
    if((key.keyCode == 49) && (rpsgamewin === true)){
        userSelectedIcon.innerText = "✊";        
        userSelectedIcon.style.visibility = "visible";
        userOption[0].parentElement.style.visibility="hidden";
        iconStopAnimation();
        rpsCheckDraw();
        rpsUserWin();
        rpsPcWin();
    }

    // Press 2
    if((key.keyCode == 50) && (rpsgamewin === true)){
        userSelectedIcon.innerText = "🖐";        
        userSelectedIcon.style.visibility = "visible";
        userOption[0].parentElement.style.visibility="hidden";
        iconStopAnimation();
        rpsCheckDraw();
        rpsUserWin();
        rpsPcWin();
    }

    // Press 3
    if((key.keyCode == 51) && (rpsgamewin === true)){
        userSelectedIcon.innerText = "✌";        
        userSelectedIcon.style.visibility = "visible";
        userOption[0].parentElement.style.visibility="hidden";
        iconStopAnimation();
        rpsCheckDraw();
        rpsUserWin();
        rpsPcWin();
    }

    // Press enter to restart
    if(key.keyCode == 13){
        resetGame();
    }
});

// Working on User movement
userOption.forEach((a) => {
    a.addEventListener("click", function (select) {
        userSelectedIcon.innerHTML = select.target.textContent;
        a.parentElement.style.visibility = "hidden";
        userSelectedIcon.style.visibility = "visible";
        iconStopAnimation();
        rpsCheckDraw();
        rpsUserWin();
        rpsPcWin();
    });
});

// Stop the computer icon changing animation
function iconStopAnimation() {
    clearInterval(pcIconChange);
}

// Restart the game
function resetGame() {
    iconChangeAnimation();
    document.querySelector(winMsg.parentElement.style.visibility = "hidden");
    pcSelectedIcon.style.textShadow = "none";
    userSelectedIcon.style.textShadow = "none";
    userSelectedIcon.style.visibility = "hidden";
    document.querySelector('.userOption').style.visibility = "visible";
    rpsgamewin = true;
}

// This is the bubble game created
// ================================
let bubbleContainer = document.querySelector("#bubble-container");
let bubbleStore = document.querySelector(".bubble-store");
let target = document.querySelector(".target");
let timer = document.querySelector(".timer");
let score = document.querySelector(".score");
let scoreVal = 0;
let bubbleUpdate;


// Create target
function targetFunc() {
    target.innerHTML = Math.floor(Math.random() * 10);
}
targetFunc();


// Create timer
function timerFunc() {
    let time = 59;
    let timeSet = setInterval(() => {
        if (time <= 0) {
            clearInterval(timeSet);
            bubbleStore.style.visibility = "hidden";
            gameOver();
            target.innerHTML = "-";
        }
        timer.innerHTML = time--;
    }, 1000);
}
timerFunc();


// Check Which bubble I clicked and score increase
bubbleContainer.addEventListener('click', function (click) {
    let bubbleNo = click.target.textContent;
    if (bubbleNo == target.textContent) {
        scoreVal++;
        score.innerHTML = scoreVal;
        targetFunc();
        bubbleGenerate();
    }
});


// Create bubbles and generate random number in bubble
function bubbleGenerate() {
    let bubble = "";
    for (let i = 0; i < 150; i++) {
        let rn = Math.floor(Math.random() * 10);
        bubble += `<div class="bubble">${rn}</div>`;
        bubbleStore.innerHTML = bubble;
    }
}
bubbleGenerate();


// Game Over function
function gameOver() {
    let gmOverContainer = document.createElement("div")
    gmOverContainer.classList.add("gmOver-container");
    bubbleContainer.appendChild(gmOverContainer);

    let gmOverH1 = document.createElement("h2");
    gmOverH1.innerText = "GAME OVER";
    gmOverContainer.appendChild(gmOverH1);

    let gmOverBtn = document.createElement("button");
    gmOverBtn.innerText = "Play Again";
    gmOverContainer.appendChild(gmOverBtn);

    gmOverBtn.addEventListener("click", function () {
        targetFunc();
        timerFunc();
        scoreVal = 0;
        score.innerHTML = 0;
        document.querySelector(".gmOver-container").style.display = "none";
        bubbleStore.style.visibility = "visible";
    });
}


// This is Tic Tac Toe game script
// =================================
let box = document.querySelectorAll(".box");
let congrats = document.querySelector(".gameWin");
let winner = document.querySelector(".winner");
let drawSection = document.querySelector(".drawSection");
let tttPoint = document.querySelectorAll(".ttt-point");
let turn = "X";
let count = 0;

// Click to display the user turn
box.forEach((boxes) => {
    boxes.addEventListener("click", function (event) {
        if (event.target.innerHTML == "") {
            ++count;
            event.target.innerHTML = turn;
            turn = turn == "X" ? "O" : "X";
            checkDraw();
        }
    });
});

// This is the pattern of game win
const patternArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkDraw() {
    let isWin = gameWin();
    if (isWin != true && count === 9) {
        drawSection.classList.remove("draw");
        count = 0;
    }
}

// This function is who win the game
function gameWin(){
    for(pattern of patternArr){
        let pattern1 = box[pattern[0]].innerText;
        let pattern2 = box[pattern[1]].innerText;
        let pattern3 = box[pattern[2]].innerText;

        if((pattern1 !== "") && (pattern2 !== "") && (pattern3 !== "")){
            if((pattern1 === pattern2) && (pattern2 === pattern3)){
                congratulation(pattern1);
                box.forEach(function(singleBox){
                    singleBox.classList.add("disable");
                });
                return true;
            }
        }
    }
}

// Reset the game
function tictactoeReset() {
    box.forEach((boxes) => {
        boxes.innerHTML = "";
        boxes.classList.remove("disable");
        turn = "X";
        congrats.classList.add("congrats");
        drawSection.classList.add("draw");
        count = 0;
        return false;
    });
}

// Game winning congrats messege
function congratulation(selectedWinner) {
    congrats.classList.remove("congrats");
    winner.innerText = `"${selectedWinner}"`;
    tttPoint.forEach((pointElement) => {
        // Point restart
        pointElement.parentElement.parentElement.querySelector("button").addEventListener("click", function(){
            pointElement.querySelector("span").textContent = 0;
        });

        // Increase the point
        if(selectedWinner === pointElement.textContent.slice(0, 1)){
            pointElement.querySelector("span").textContent = Number(pointElement.querySelector("span").textContent) + 1;
        }
    });
}

// Snake game 
// =============
const snake = document.querySelector(".snake");
let no = 0;
const snakeDetails = snake.getBoundingClientRect();

let snakeTopMove;
let snakeBottomMove;
let snakeLeftMove;
let snakeRightMove;

document.addEventListener("keyup", function (e) {
    let snakeSpeed = 100;
    // This condition for the Up key
    if (e.keyCode === 38) {
        snake.style.transform = "rotate(-90deg)";
        clearInterval(snakeTopMove);
        clearInterval(snakeLeftMove);
        clearInterval(snakeRightMove);
        var snakeBottomMove = setInterval(function () {
            snake.style.top = `${no -= 1}px`;
        }, snakeSpeed);
    }

    // This condition for the down arrow key
    if (e.keyCode === 40) {
        snake.style.transform = "rotate(90deg)";
        top = true;

        clearInterval(snakeBottomMove);
        clearInterval(snakeLeftMove);
        clearInterval(snakeRightMove);

        var snakeTopMove = setInterval(function () {
            snake.style.top = `${no += 1}px`;
        }, snakeSpeed);

    }

    // This condition for the Right key
    if (e.keyCode === 37) {
        snake.style.transform = "rotate(180deg)";

        clearInterval(snakeTopMove);
        clearInterval(snakeBottomMove);
        clearInterval(snakeLeftMove);

        var snakeRightMove = setInterval(function () {
            snake.style.left = `${no -= 1}px`;
        }, snakeSpeed);

    }

    // This condition for the Right arrow key
    if (e.keyCode === 39) {
        snake.style.transform = "rotate(0deg)";

        clearInterval(snakeTopMove);
        clearInterval(snakeBottomMove);
        clearInterval(snakeRightMove);

        var snakeLeftMove = setInterval(function () {
            snake.style.left = `${no += 1}px`;
        }, snakeSpeed);
    }
});



// This is a fire game
// ======================

// Target all classes and ids
// let game = document.querySelector("#game");
// let heroCharContainer = document.querySelector(".heroChar-container");
// let animeContainer = document.querySelector(".anime-container");
// let triger = document.querySelector(".triger");
// let bullet_container = document.querySelector(".bullet-container");
// let pointer = document.querySelector(".point");
// let heroPosition;
// let animePosition;
// let bulletPosition;
// let bulletWidth;
// let bullet;
// let point = 0;
// let anime;

// document.querySelector(".age_click").style.display = "none";
// // press arrow key to move the hero
// window.addEventListener('keydown', function (keyCode) {
//     heroPosition = heroCharContainer.getBoundingClientRect();
//     let keycode = keyCode.keyCode;
//     if (keycode == 37 && heroPosition.left > 0) {
//         heroCharContainer.style.marginLeft = heroPosition.left - 20 + "px";
//     }
//     let heroWidth = document.querySelector(".hero").offsetWidth;
//     if (keycode == 39 && heroPosition.left < (heroWidth - heroPosition.width)) {
//         heroCharContainer.style.marginLeft = heroPosition.left + 20 + "px";
//     }
// });

// // Hero move by mouse movements
// let heroCharWidth = heroCharContainer.offsetWidth;
// game.addEventListener("mousemove", function (details) {
//     heroCharContainer.style.marginLeft = `${details.clientX - heroCharWidth / 2}px`;
// });

// // This function is generate the bullets
// function bulletGenerate() {
//     bullet = document.createElement("img");
//     bullet.src = "bullet.png"
//     bullet_container.appendChild(bullet);
//     bullet.classList.add("bullet");
//     bulletWidth = bullet.offsetWidth;
//     animeDistroy();
// }

// // Press the space key on keyboard to fire the bullet
// addEventListener('keypress', function (keyCode) {
//     let key = keyCode.keyCode;
//     if (key === 32 || key === 38) {
//         bulletGenerate();
//         bullet.style.left = `${heroPosition.left + (heroCharWidth / 2) - (bulletWidth / 2)}px`;
//     }
// });

// // fire the bullets with mouse click
// game.addEventListener("click", function (e) {
//     bulletGenerate();
//     bullet.style.left = `${e.clientX - bulletWidth / 2}px`;
// });

// // Generate the Anime
// function animeGenerate() {
//     let animeTimeer = setInterval(() => {
//         anime = document.createElement("img");
//         anime.src = "anime.png";
//         animeContainer.appendChild(anime);
//         anime.classList.add("anime");
//         anime.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`;
//     }, 2000);
// }
// animeGenerate();

// // This function is remove the anime by shooting the bullet
// function animeDistroy() {
//     let animeDetector = document.querySelectorAll(".anime");
//     for (let i = 0; i < animeDetector.length; i++) {
//         let getAnime = animeDetector[i];

//         if (getAnime != undefined) {
//             animePosition = getAnime.getBoundingClientRect();
//             bulletPosition = bullet.getBoundingClientRect();

//             let bulletLeft = bulletPosition.left - heroCharWidth / 2;
//             let bulletRight = bulletPosition.right - heroCharWidth / 2;

//             if (bulletLeft >= animePosition.left && bulletRight <= animePosition.right && bulletPosition.bottom >= animePosition.bottom && bulletPosition.top >= animePosition.top) {
//                 getAnime.remove();
//                 pointer.innerHTML = ++point;
//             }
//         }
//     }
// }

// // Game Over
// function gameOver() {
//     // let animePositionForOverTheGame = window.getComputedStyle(document.querySelector(".anime")).getPropertyValue("top")+"px";
//     // if (animePosition.top <= 300) {
//     //     console.log("Game over");
//     // }
// }
// gameOver()


// // Remove the bullet evry second
// game.addEventListener("click", function () {
//     let bulletRemover;
//     if (bullet_container.childElementCount >= 5) {
//         bulletRemover = setInterval(() => {
//             bullet_container.firstElementChild.remove();
//         }, 1000);
//     } else {
//         clearInterval(bulletRemover);
//     }
// });