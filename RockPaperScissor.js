//processing
var comp = genComp();
var player = "paper" //prompt("Rock Paper Scissor?");
var playerScore = 0;
var compScore = 0;
//https://node.readthedocs.io/en/latest/api/readline/
if (player == "rock" || player == "paper" || player == "scissor") {
    console.log(comp + " vs " + player +" and the winner is "+ winOrLose(comp));
    console.log("Player's Score is "+playerScore+" and the computer's score is "+compScore);
}
else if (player == "quit"){

}
else {
    player = prompt("Invalid input, try again.");
    }
    
//function
function prompt(msg) {
    console.log(msg);

    //return readline();
}
function genComp() {
    randomInt = Math.floor(Math.random() * (3) + 1);
    var comp;
    if (randomInt == 1) {
        comp = "rock";
    }
    else if (randomInt == 2) {
        comp = "paper";
    }
    else if (randomInt == 3) {
        comp = "scissor";
    }
    return comp;
}
function winOrLose(genComp) {
    var winner;
    if (comp == "rock" && player == "paper") {
        winner= 'player';
        playerScore++;
    }
    else if (comp == "rock" && player == "scissor") {
        winner= 'computer';
        compScore++;
    }
    else if (comp == "paper" && player == "scissor") {
        winner= 'player';
        playerScore++;
    }
    else if (comp == "paper" && player == "rock") {
        winner= 'computer';
        compScore++;
    }
    
    else if (comp == "scissor" && player == "rock") {
        winner= 'player';
        playerScore++;
    }
    else if (comp == "scissor" && player == "paper") {
        winner= 'computer';
        compScore++;
    }
    else if (comp == player ) {
        winner = "draw"
    }
    return winner;

}

