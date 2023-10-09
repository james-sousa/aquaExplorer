for (let i = 1; i <= 4; i++) {
    document.getElementById(`level${i}`).addEventListener("click", function() {
        const questions = document.getElementById(`questions${i}`);
        if (questions.style.display === "none" || questions.style.display === "") {
            questions.style.display = "block";
        } else {
            questions.style.display = "none";
        }
    });
}


const levels = document.querySelectorAll(".level");
const questionElement = document.querySelector(".question");
const answerButtons = document.querySelectorAll(".answer-button");
const nextButton = document.querySelector(".next-button");

// Array de perguntas e respostas
const questions = [
    {
        question: "1. Water is a remarkable substance that covers a big part of the Earth's surface. This vast expanse of water includes oceans, seas, and even the water in the air and underground. What proportion of the Earth's surface is covered by water? ",
        answers: [
            { text: "A) 50%.", correct: false },
            { text: "B) 70%.", correct: true },
            { text: "C) 90%.", correct: false },
            { text: "D) 30%.", correct: false },
        ],
        
    },
   
    {
        question: "2. The water cycle is the continuous movement that water undergoes on Earth; it is a natural process of recycling water molecules from the land to the air and back to the land. When water vapor cools and condenses in the atmosphere, it forms clouds. What is the name of this process? ",
        answers: [
            { text: "A) Condensation.", correct: true },
            { text: "B) Evaporation.", correct: false },
            { text: "C) Precipitation.", correct: false },
            { text: "D) Infiltration.", correct: false },
        ]
    },
   
    {
        question: "3. Climate change, driven by factors like greenhouse gas emissions, has notable effects on the ocean. One consequence is the ocean warning, which can lead to shifts in ecosystems and water availability. How does climate change affect the water ecossistem? ",
        answers: [
            { text: "A) It accelerates evaporation.", correct: false },
            { text: "B) It disrupts rainfall patterns.", correct: true },
            { text: "C) It increases groundwater levels.", correct: false },
            { text: "D) It reduces the effects of droughts.", correct: false },
        ]
    },
    
    {
        question: "4. Conserving water is a responsibility we all share. Simple actions in our daily lives can make a significant difference. For example, taking shorter showers not only saves water but also reduces energy consumption. What is one small action you can take to conserve water? ",
        answers: [
            { text: "A) Leaving the tap running while brushing teeth.", correct: false },
            { text: "B) Turn off lights and TVs when you leave a room .", correct: true },
            { text: "C) Running the dishwasher half full.", correct: false },
            { text: "D) Watering plants during the hottest part of the day.", correct: false },
        ]
    },

];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    currentQuestion.answers.forEach((answer, index) => {
        const button = answerButtons[index];
        button.textContent = answer.text;
        if (answer.correct) {
            button.dataset.correct = true;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    answerButtons.forEach(button => {
        button.classList.remove("correct", "incorrect");
        button.disabled = false;
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct == "true";

    if (isCorrect) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("incorrect");
    }

    answerButtons.forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    if (currentQuestionIndex < questions.length - 1) {
        nextButton.style.display = "block";
        nextButton.innerHTML = "Next";
    } else {
        nextButton.style.display = "block";
        nextButton.innerHTML = "Finish";
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        // Fim do quiz
        alert(`Você acertou ${score} de ${questions.length} perguntas.`);
        // Reiniciar o quiz
        startQuiz();
    }
}

nextButton.addEventListener("click", nextQuestion);
startQuiz();
