
    let compChoices =['rock','paper','scissor'];
    //selection of player choices 
    
    //randomizes the computer selection from the comp choices list'
    function computerPlay(choices){
        return choices[Math.floor(Math.random() * choices.length)];
    }
    let computerSelection=computerPlay(compChoices);
    let playerSelection;
    let playerWin = 0;
    let round;
    let computerWin = 0; 
    var element = document.getElementById("score");
    
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
      button.addEventListener('click', (e) => {
        playerSelection = (button.id)
        computerSelection=computerPlay(compChoices);
        round=playRound(playerSelection,computerSelection);
        alert(round);
        result = gameResults(round);
        if (result === "win"){
            playerWin++; 
        }
        else {
            computerWin++;
        }
        totalGames = playerWin+computerWin;
        if (totalGames > 4) {
            element.textContent = computerWin + " total losses and "+ playerWin + " total wins!!!!" 
        }
    
    
      });
    });
    
    function playRound(playerSelection, computerSelection){
        
        if (playerSelection===computerSelection) { //player and compter have the same selection  
            return ("It's a tie you both chose:"+playerSelection);
        }
        //compares the selection of the player to the computer and then returns a winner 
        else if (playerSelection === "rock" && computerSelection ==="scissor"){
            return ("You win! Rock beats scissors!");
            }
        else if (playerSelection ==="rock" && computerSelection ==="paper") {
            return ("You lose! Paper beats Rock!");
        }
        else if (playerSelection ==="paper" && computerSelection === "scissor") { 
            return ("You lose! Scissor beats paper!");
        }
        else if (playerSelection ==="paper" && computerSelection ==="rock") {
            return ("You win! Paper beats Rock!");
        }
        else if (playerSelection ==="scissor" && computerSelection ==="rock") {
            return ("You lose! Rock beats scissors!");
        }
        else if (playerSelection ==="scissor" && computerSelection ==="paper") {
            return ("You win! Scissor beats paper!");
        }
        else {
          return "Oops you made a mistake!"
        }
        
    } 
    
    
    function gameResults (round){ 
        if (round.includes("win")){
          return "win" 
        }
        else {
            return "loss"
        }
    }
    function refreshPage(){
        window.location.reload();
    } 
    //Announces total wins to the console. 
    //function finalScore (loss, win){
        //const score = document.querySelector('div');
        //score.classList.add('score');
        //score.textContent = loss + " total losses and "+ win + " total wins!!!!" 
    //}

    
    