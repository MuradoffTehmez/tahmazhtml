const questions = [
    {
        question: {
            en: "What is the highest mountain in the world?",
            az: "Dünyanın ən yüksək dağı hansıdır?",
            ru: "Какая самая высокая гора в мире?"
        },
        answers: [
            { en: "K2", az: "K2", ru: "К2" },
            { en: "Everest", az: "Everest", ru: "Эверест" },
            { en: "Kangchenjunga", az: "Kanchenjunga", ru: "Канченджанга" },
            { en: "Lhotse", az: "Lhotse", ru: "Лходзе" }
        ],
        correct: 1
    },
    {
        question: {
            en: "What colors are on the Turkish flag?",
            az: "Türk bayrağında hansı rənglər var?",
            ru: "Какие цвета на турецком флаге?"
        },
        answers: [
            { en: "Blue and White", az: "Mavi və Ağ", ru: "Синий и Белый" },
            { en: "Red and White", az: "Qırmızı və Ağ", ru: "Красный и Белый" },
            { en: "Green and Yellow", az: "Yaşıl və Sarı", ru: "Зеленый и Желтый" },
            { en: "Black and White", az: "Qara və Ağ", ru: "Черный и Белый" }
        ],
        correct: 1
    },
    {
        question: {
            en: "Who is the creator of the Python programming language?",
            az: "Python proqramlaşdırma dilinin yaradıcısı kimdir?",
            ru: "Кто создатель языка программирования Python?"
        },
        answers: [
            { en: "Brendan Eich", az: "Brendan Eich", ru: "Брендан Эйх" },
            { en: "Guido van Rossum", az: "Guido van Rossum", ru: "Гвидо ван Россум" },
            { en: "James Gosling", az: "James Gosling", ru: "Джеймс Гослинг" },
            { en: "Rasmus Lerdorf", az: "Rasmus Lerdorf", ru: "Расмус Лердорф" }
        ],
        correct: 1
    },{
        question: {
            en: "What is the capital of Azerbaijan?",
            az: "Azərbaycanın paytaxtı haradır?",
            ru: "Какая столица Азербайджана?"
        },
        answers: [
            { en: "Ganja", az: "Gəncə", ru: "Гянджа" },
            { en: "Baku", az: "Bakı", ru: "Баку" },
            { en: "Nakhchivan", az: "Naxçıvan", ru: "Нахичевань" },
            { en: "Sumqayit", az: "Sumqayıt", ru: "Сумгаит" }
        ],
        correct: 1
    },
    {
        question: {
            en: "Which element has the chemical symbol 'Au'?",
            az: "Hansı elementin kimyəvi simvolu 'Au'-dur?",
            ru: "У какого элемента химический символ 'Au'?"
        },
        answers: [
            { en: "Silver", az: "Gümüş", ru: "Серебро" },
            { en: "Gold", az: "Qızıl", ru: "Золото" },
            { en: "Copper", az: "Mis", ru: "Медь" },
            { en: "Aluminum", az: "Alüminium", ru: "Алюминий" }
        ],
        correct: 1
    },
    {
        question: {
            en: "What is the smallest country in the world?",
            az: "Dünyanın ən kiçik ölkəsi hansıdır?",
            ru: "Какая самая маленькая страна в мире?"
        },
        answers: [
            { en: "Monaco", az: "Monako", ru: "Монако" },
            { en: "Nauru", az: "Nauru", ru: "Науру" },
            { en: "Tuvalu", az: "Tuvalu", ru: "Тувалу" },
            { en: "Vatican City", az: "Vatikan Şəhəri", ru: "Ватикан" }
        ],
        correct: 3
    },
    {
        question: {
            en: "What is the name of the longest river in the world?",
            az: "Dünyanın ən uzun çayının adı nədir?",
            ru: "Как называется самая длинная река в мире?"
        },
        answers: [
            { en: "Nile", az: "Nil", ru: "Нил" },
            { en: "Amazon", az: "Amazon", ru: "Амазонка" },
            { en: "Yangtze", az: "Yantszı", ru: "Янцзы" },
            { en: "Mississippi", az: "Missisipi", ru: "Миссисипи" }
        ],
        correct: 1
    },
    {
        question: {
            en: "Which planet is known as the 'Red Planet'?",
            az: "Hansı planet 'Qırmızı Planet' kimi tanınır?",
            ru: "Какая планета известна как 'Красная планета'?"
        },
        answers: [
            { en: "Jupiter", az: "Yupiter", ru: "Юпитер" },
            { en: "Mars", az: "Mars", ru: "Марс" },
            { en: "Mercury", az: "Merkuri", ru: "Меркурий" },
            { en: "Venus", az: "Venera", ru: "Венера" }
        ],
        correct: 1
    },
    {
        question: {
            en: "In what year did the Titanic sink?",
            az: "Titanik nə vaxt batıb?",
            ru: "В каком году затонул Титаник?"
        },
        answers: [
            { en: "1910", az: "1910", ru: "1910 год" },
            { en: "1912", az: "1912", ru: "1912 год" },
            { en: "1914", az: "1914", ru: "1914 год" },
            { en: "1916", az: "1916", ru: "1916 год" }
        ],
        correct: 1
    },
    {
        question: {
            en: "Which animal is known to have the longest lifespan?",
            az: "Hansı heyvanın ən uzun ömür müddəti olduğu bilinir?",
            ru: "Какое животное известно самым долгим продолжительностью жизни?"
        },
        answers: [
            { en: "Elephant", az: "Fil", ru: "Слон" },
            { en: "Blue Whale", az: "Mavi Kit", ru: "Синий кит" },
            { en: "Giant Tortoise", az: "Nəhəng Tısbağa", ru: "Гигантская черепаха" },
            { en: "Greenland Shark", az: "Qrenland Köpəkbalığı", ru: "Гренландская акула" }
        ],
        correct: 2
    }

];

let currentQuestionIndex = 0;
let score = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let timer;
let timeLeft = 10;
let helpUsed = {
    '5050': false,
    'phone': false,
    'audience': false
};
let currentLanguage = 'en';

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').innerText = currentQuestion.question[currentLanguage];
    const answerButtons = document.querySelectorAll('.answer');
    let answers = [...currentQuestion.answers];
    shuffleArray(answers);
    answerButtons.forEach((button, index) => {
        button.innerText = answers[index][currentLanguage];
        button.classList.remove('correct', 'incorrect');
        button.disabled = false;
        if (answers[index][currentLanguage] === currentQuestion.answers[currentQuestion.correct][currentLanguage]) {
            button.dataset.correct = true;
        } else {
            button.dataset.correct = false;
        }
    });
    document.getElementById('result').innerText = '';
    timeLeft = 10;
    document.getElementById('timer').innerText = `Süre: ${timeLeft}`;
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    timeLeft--;
    document.getElementById('timer').innerText = `Süre: ${timeLeft}`;
    if (timeLeft <= 0) {
        clearInterval(timer);
        document.getElementById('timesup-sound').play();
        checkAnswer(null); // Time's up
    }
}

function checkAnswer(buttonIndex) {
    clearInterval(timer);
    const answerButtons = document.querySelectorAll('.answer');
    answerButtons.forEach(button => button.disabled = true);
    if (buttonIndex !== null) {
        const selectedButton = answerButtons[buttonIndex];
        if (selectedButton.dataset.correct === 'true') {
            correctAnswers++;
            score++;
            selectedButton.classList.add('correct');
            document.getElementById('correct-sound').play();
            document.getElementById('result').innerText = 'Doğru cevap!';
        } else {
            incorrectAnswers++;
            selectedButton.classList.add('incorrect');
            document.getElementById('incorrect-sound').play();
            document.getElementById('result').innerText = 'Yanlış cevap. Tekrar deneyin.';
        }
    } else {
        incorrectAnswers++;
        document.getElementById('incorrect-sound').play();
        document.getElementById('result').innerText = 'Süre doldu. Yanlış cevap.';
    }
    document.getElementById('score').innerText = `Skor: ${score}`;
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setTimeout(loadQuestion, 1000);
    } else {
        setTimeout(endGame, 1000);
    }
}

function useHelp(type) {
    if (helpUsed[type]) return;

    helpUsed[type] = true;
    document.getElementById(`help-${type}`).disabled = true;

    switch (type) {
        case '5050':
            use5050();
            break;
        case 'phone':
            usePhoneHelp();
            break;
        case 'audience':
            useAudienceHelp();
            break;
    }
}

function use5050() {
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.answers[currentQuestion.correct][currentLanguage];
    const answerButtons = document.querySelectorAll('.answer');
    let removed = 0;

    answerButtons.forEach(button => {
        if (button.dataset.correct !== 'true' && removed < 2) {
            button.disabled = true;
            button.innerText = '';
            removed++;
        }
    });
}

function usePhoneHelp() {
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.answers[currentQuestion.correct][currentLanguage];
    alert(`Telefonla yardım: Doğru cevabın ${correctAnswer} olduğunu düşünüyorum.`);
}

function useAudienceHelp() {
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.answers[currentQuestion.correct][currentLanguage];
    alert(`Seyirciye sorma: Seyircilerin %70'i ${correctAnswer} cevabını verdi.`);
}

function startGame() {
    const playerName = document.getElementById('player-name').value.trim();
    if (playerName === '') {
        alert('Lütfen isminizi girin.');
        return;
    }

    currentQuestionIndex = 0;
    score = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    helpUsed = {
        '5050': false,
        'phone': false,
        'audience': false
    };
    document.querySelectorAll('.help-button').forEach(button => button.disabled = false);
    shuffleArray(questions);
    document.getElementById('score').innerText = `Skor: ${score}`;
    document.getElementById('game').style.display = 'block';
    document.getElementById('player-name-section').style.display = 'none';
    document.getElementById('final').style.display = 'none';
    document.getElementById('settings').style.display = 'none';
    loadQuestion();
}

function endGame() {
    document.getElementById('final-score').innerText = `Toplam Skor: ${score}\nDoğru Cevaplar: ${correctAnswers}\nYanlış Cevaplar: ${incorrectAnswers}`;
    document.getElementById('game').style.display = 'none';
    document.getElementById('final').style.display = 'block';
    saveHighScore(score);
    displayHighScores();
}

function changeTheme() {
    const theme = document.getElementById('theme').value;
    document.body.className = theme;
}

function changeLanguage() {
    currentLanguage = document.getElementById('language').value;
    loadQuestion();
}

function saveHighScore(score) {
    const playerName = document.getElementById('player-name').value.trim();
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    highScores.push({ name: playerName, score: score });
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);
    localStorage.setItem('highScores', JSON.stringify(highScores));
}

function displayHighScores() {
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    const leaderboard = document.getElementById('leaderboard');
    leaderboard.innerHTML = '';
    highScores.forEach(score => {
        const li = document.createElement('li');
        li.textContent = `${score.name}: ${score.score}`;
        leaderboard.appendChild(li);
    });
    document.getElementById('leaderboard-section').style.display = 'block';
}

function hideLeaderboard() {
    document.getElementById('leaderboard-section').style.display = 'none';
}

function showLeaderboard() {
    displayHighScores();
    document.getElementById('leaderboard-section').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('start-button').style.display = 'block';
});
