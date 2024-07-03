// script.js

// Sample data
const lessons = [
    { title: "Greetings and Introductions", content: "Learn basic German greetings and how to introduce yourself." },
    { title: "Numbers and Counting", content: "Master German numbers and learn how to count." },
    { title: "Basic Phrases", content: "Essential phrases for everyday conversations in German." }
];

const vocabulary = [
    { german: "Hallo", english: "Hello" },
    { german: "Auf Wiedersehen", english: "Goodbye" },
    { german: "Bitte", english: "Please" },
    { german: "Danke", english: "Thank you" },
    { german: "Ja", english: "Yes" },
    { german: "Nein", english: "No" }
];

// Function to populate lessons
function populateLessons() {
    const lessonList = document.getElementById('lessonList');
    lessons.forEach(lesson => {
        const lessonItem = document.createElement('div');
        lessonItem.classList.add('lesson-item');
        lessonItem.innerHTML = `<h3>${lesson.title}</h3><p>${lesson.content}</p>`;
        lessonList.appendChild(lessonItem);
    });
}

// Function to populate vocabulary
function populateVocabulary() {
    const wordList = document.getElementById('wordList');
    vocabulary.forEach(word => {
        const wordItem = document.createElement('div');
        wordItem.classList.add('word-item');
        wordItem.innerHTML = `<strong>${word.german}</strong>: ${word.english}`;
        wordList.appendChild(wordItem);
    });
}

// Quiz functionality
let currentQuizWord;

function startQuiz() {
    currentQuizWord = vocabulary[Math.floor(Math.random() * vocabulary.length)];
    document.getElementById('quizQuestion').textContent = `What's the German word for "${currentQuizWord.english}"?`;
    document.getElementById('quizAnswer').value = '';
    document.getElementById('quizResult').textContent = '';
}

function checkAnswer() {
    const userAnswer = document.getElementById('quizAnswer').value.trim().toLowerCase();
    const correctAnswer = currentQuizWord.german.toLowerCase();
    const resultElement = document.getElementById('quizResult');
    
    if (userAnswer === correctAnswer) {
        resultElement.textContent = "Correct! Well done!";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = `Sorry, the correct answer is "${currentQuizWord.german}".`;
        resultElement.style.color = "red";
    }
    
    setTimeout(startQuiz, 3000);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    populateLessons();
    populateVocabulary();
    startQuiz();
    
    document.getElementById('submitAnswer').addEventListener('click', checkAnswer);
});
