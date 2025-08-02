const questionElement = document.getElementById("question");

let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 10);
let correctAnswer = num1 * num2;

questionElement.innerText = `What is ${num1} Multiply by ${num2}?`;

const form = document.getElementById("main");
const input = document.getElementById("input");
let scoreElement = document.getElementById("score");

let score = Number(localStorage.getItem("score"));
if(!score) {
    score = 0;
}

scoreElement.textContent = `Score: ${score}`;

form.addEventListener(`submit`, function(){
    let userAnswer = +input.value;
    if(correctAnswer === userAnswer) {
        score++;
        updateScore();
    }else {
        score--;
        updateScore();
    }
});

function updateScore() {
    localStorage.setItem("score",String(score));
    console.log("Updated");
}