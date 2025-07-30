function checkAnswer() {
    correctAnswer = "4"; // Variable to hold the correct answer
    
    const selectedAnswer = document.querySelector('input[name="quiz"]:checked');

    if (selectedAnswer) {
        const userAnswer = selectedAnswer.value;
        const feedback = document.getElementById("feedback");

        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        }
        else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    } else {
        alert("Please select an answer before submitting.");
    }
}
document.getElementById("submit-answer").addEventListener("click", checkAnswer);