let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user_score");
const computerScore_span = document.getElementById("computer_score");
let textResult_p = document.getElementById("textResult");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const computerChoiceArr = ["r", "p", "s"];
    let randomComputerChoice = Math.floor(Math.random() * computerChoiceArr.length);
    return computerChoiceArr[randomComputerChoice];
}

function main() {
    rock_div.addEventListener("click", function() {
        game("r");
    })

    paper_div.addEventListener("click", function() {
        game("p");
    })

    scissors_div.addEventListener("click", function() {
        game("s");
    })
}

function win() {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const textWon = "You WON";
    textResult_p.innerHTML = textWon;
}

function lose() {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const textLose = "Computer won :( srry";
    textResult_p.innerHTML = textLose;
}

function tie() {
    textResult_p.innerHTML = "it is a tie";
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win();
            break;
        case "rp":
        case "ps":
        case "sr":
            lose();
            break;
        case "ss":
        case "pp":
        case "rr":
            tie();
            break;

    }
}
main();
game();