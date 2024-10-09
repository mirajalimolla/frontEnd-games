// For all game start button
// (function bgBlur(){
    let allStartButton = document.querySelectorAll(".start");
    allStartButton.forEach((e) => {
        e.addEventListener("click", function(){
            e.style.display="none";
            e.parentElement.querySelector(".blur").style.filter="blur(0px)";
        });
    });
// })();
// bgBlur();


// ROCK PAPER SCISSOR
// ================================
// function rpsGameStart(){
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
// }


// This is the bubble game created
// ================================
// function bubbleGameStart(){
    let bubbleContainer = document.querySelector("#bubble-container");
    let bubbleStore = document.querySelector(".bubble-store");
    let target = document.querySelector(".target");
    let timer = document.querySelector(".timer");
    let score = document.querySelector(".score");
    let scoreVal = 0;

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
// }


// This is Tic Tac Toe game script
// =================================
// function tttGameStart(){
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
// }


// Snake game 
// =============
// function snakeStart(){
    const snake = document.querySelector(".snake");
    let snakePosition = [{x:0, y:0}];
    let foodPosition = {x:4, y:6};
    function playSnake(ctime){
        window.requestAnimationFrame(playSnake);
        // snake.style.gridColumnStart = snakePosition[0].x++;
        snakeMoved();
    }

    function snakeGameLogic(){
        // Create the snake
        let snakePart = document.createElement("div");
        snake.appendChild(snakePart);
        snake.style.gridRowStart = snakePosition[0].x;
        snake.style.gridColumnStart = snakePosition[0].y;
        snakePart.classList.add("snakePart");
        snakeMoved();
    }
    snakeGameLogic();

    function snakeMoved(){
        document.addEventListener("keydown", function(key){
            switch(key.code){
                case ("ArrowUp"): 
                    snake.style.gridRowStart = snakePosition[0].y--;
                    console.log("Press top " + snakePosition[0].y);
                    break;

                case ("ArrowDown"):
                    snake.style.gridRowStart = snakePosition[0].y++;
                    console.log("Press down " + snakePosition[0].y);
                    break;
                
                case ("ArrowLeft"):
                    snake.style.gridColumnStart = snakePosition[0].x--;
                    console.log("Press left " + snakePosition[0].x);
                    break;
                
                case ("ArrowRight"): 
                    snake.style.gridColumnStart = snakePosition[0].x++;
                    console.log("Press right " + snakePosition[0].x);
                    break;

                default :
                    break;
            }            
        });
    }
    
    window.requestAnimationFrame(playSnake);
// }



// This is a fire game
// ======================
// function gameStart(){
//     alert("Game was build in");
// }