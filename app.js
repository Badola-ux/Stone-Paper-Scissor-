// Get all required elements
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreElement = document.querySelector("#user-score");
const compScoreElement = document.querySelector("#comp-score");

let userScore = 0;
let compScore = 0;

// Function to generate computer choice
function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissor"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

// Function to determine the winner
function getWinner(userChoice, compChoice) {
    if (userChoice === compChoice) {
        return "Draw! 🤝";
    }

    if (
        (userChoice === "Rock" && compChoice === "Scissor") ||
        (userChoice === "Paper" && compChoice === "Rock") ||
        (userChoice === "Scissor" && compChoice === "Paper")
    ) {
        userScore++;
        userScoreElement.textContent = userScore;
        return "You Win! 🎉";
    } else {
        compScore++;
        compScoreElement.textContent = compScore;
        return "Computer Wins! 😢";
    }
}

// Function to play the game when user clicks
function playGame(event) {
    const userChoice = event.target.closest(".choice").id; // Get user choice
    const compChoice = getComputerChoice(); // Get computer choice
    const resultMessage = getWinner(userChoice, compChoice); // Get the result

    msg.textContent = `You: ${userChoice} | Computer: ${compChoice} → ${resultMessage}`;
}

// Add event listener to all choice buttons
choices.forEach(choice => {
    choice.addEventListener("click", playGame);
});
