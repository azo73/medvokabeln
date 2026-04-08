let fullVocabulary = []; 
let currentCards = []; 
let currentIndex = 0;
let learnedIds = JSON.parse(localStorage.getItem('medVokabeln_learned')) || [];
let currentQuizCorrectWord = null; 

// SAYFA YÜKLENDİĞİNDE VERİYİ data.js'den ÇEK
window.onload = () => { 
    initTheme(); 
    displayStreak(); 
    loadDatabase(); 
};

function loadDatabase() {
    // data.js'den gelen vocabularyData'yı direkt kullanıyoruz.
    if (typeof vocabularyData !== 'undefined' && vocabularyData.length > 0) {
        fullVocabulary = [...vocabularyData];
        currentCards = [...fullVocabulary];
        updateCard();
    } else {
        document.getElementById("germanWord").innerText = "Veri Bulunamadı 🚨";
    }
}

// TEMA AYARLARI
function initTheme() {
    if (localStorage.getItem('medVokabeln_theme') === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('themeToggle').innerText = '☀️';
    }
}
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    document.getElementById('themeToggle').innerText = isDark ? '☀️' : '🌙';
    localStorage.setItem('medVokabeln_theme', isDark ? 'dark' : 'light');
}

// ARAMA VE KATEGORİ FİLTRELEME
function searchWord() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const selectedCategory = document.getElementById("categorySelect").value;
    let basePool = selectedCategory === "Alle" ? fullVocabulary : fullVocabulary.filter(w => w.category === selectedCategory);
    
    if (query === "") { currentCards = basePool; } 
    else { currentCards = basePool.filter(word => word.german.toLowerCase().includes(query) || word.turkish.toLowerCase().includes(query)); }
    currentIndex = 0;
    if(currentCards.length === 0) {
        document.getElementById("germanWord").innerText = "Yok 😔";
        document.getElementById("turkishWord").innerText = "Sonuç bulunamadı.";
    } else { updateCard(); }
}

function changeCategory() {
    document.getElementById("searchInput").value = ""; 
    searchWord();
}

// SESLİ OKUMA
function speakWord(event) {
    event.stopPropagation(); 
    if(currentCards.length === 0) return; 
    const utterance = new SpeechSynthesisUtterance(currentCards[currentIndex].german);
    utterance.lang = 'de-DE'; utterance.rate = 0.9; 
    window.speechSynthesis.speak(utterance);
}

// KART KONTROLLERİ
function flipCard() { document.getElementById("myCard").classList.toggle("is-flipped"); }
function nextWord() { currentIndex++; if (currentIndex >= currentCards.length) currentIndex = 0; updateCard(); }
function prevWord() { currentIndex--; if (currentIndex < 0) currentIndex = currentCards.length - 1; updateCard(); }

function updateCard() {
    if(currentCards.length === 0) return; 
    document.getElementById("myCard").classList.remove("is-flipped");
    const currentWord = currentCards[currentIndex];
    document.getElementById("germanWord").innerText = currentWord.german;
    document.getElementById("wordType").innerText = currentWord.type;
    document.getElementById("turkishWord").innerText = currentWord.turkish;
    document.getElementById("exampleSentence").innerText = currentWord.example;
    checkLearnedStatus(currentWord.id);
}

// ÖĞRENİLDİ DURUMU VE SERİ
function checkLearnedStatus(wordId) {
    const isLearned = learnedIds.includes(wordId);
    const learnBtn = document.getElementById("learnBtn");
    if (isLearned) { learnBtn.innerText = "❌ Geri Al"; learnBtn.classList.add("active"); document.getElementById("frontBadge").style.display = "block"; document.getElementById("backBadge").style.display = "block"; } 
    else { learnBtn.innerText = "✅ Öğrendim"; learnBtn.classList.remove("active"); document.getElementById("frontBadge").style.display = "none"; document.getElementById("backBadge").style.display = "none"; }
    const learnedInCurrentView = currentCards.filter(card => learnedIds.includes(card.id)).length;
    document.getElementById("progressText").innerText = `${learnedInCurrentView} / ${currentCards.length}`;
}

function toggleLearned() {
    if(currentCards.length === 0) return;
    const currentWordId = currentCards[currentIndex].id;
    if (learnedIds.includes(currentWordId)) { learnedIds = learnedIds.filter(id => id !== currentWordId); } 
    else { learnedIds.push(currentWordId); updateStreak(); }
    localStorage.setItem('medVokabeln_learned', JSON.stringify(learnedIds));
    checkLearnedStatus(currentWordId);
}

function displayStreak() { document.getElementById('streakText').innerText = `🔥 ${localStorage.getItem('medVokabeln_streak') || 0}`; }
function updateStreak() {
    let streakCount = parseInt(localStorage.getItem('medVokabeln_streak')) || 0;
    const today = new Date().toISOString().split('T')[0];
    if (localStorage.getItem('medVokabeln_lastActive') === today) return; 
    streakCount++;
    localStorage.setItem('medVokabeln_streak', streakCount);
    localStorage.setItem('medVokabeln_lastActive', today);
    displayStreak();
}

// MOD DEĞİŞTİRME VE SINAV
function switchMode(mode) {
    if(mode === 'flashcard') {
        document.getElementById("flashcardSection").style.display = "flex"; document.getElementById("quizSection").style.display = "none";
        document.getElementById("btnFlashcard").classList.add("active"); document.getElementById("btnQuiz").classList.remove("active");
    } else {
        document.getElementById("flashcardSection").style.display = "none"; document.getElementById("quizSection").style.display = "flex";
        document.getElementById("btnQuiz").classList.add("active"); document.getElementById("btnFlashcard").classList.remove("active");
        generateQuizQuestion(); 
    }
}

function generateQuizQuestion() {
    document.getElementById("quizFeedback").innerText = ""; document.getElementById("nextQuizBtn").style.display = "none";
    currentQuizCorrectWord = currentCards[Math.floor(Math.random() * currentCards.length)];
    document.getElementById("quizWord").innerText = currentQuizCorrectWord.german;
    let distractors = fullVocabulary.filter(word => word.id !== currentQuizCorrectWord.id).sort(() => 0.5 - Math.random()).slice(0, 3);
    let options = [currentQuizCorrectWord, ...distractors].sort(() => 0.5 - Math.random());
    const optionsContainer = document.getElementById("quizOptionsContainer");
    optionsContainer.innerHTML = ""; 
    options.forEach(option => {
        const btn = document.createElement("button"); btn.className = "quiz-option"; btn.innerText = option.turkish;
        btn.onclick = () => checkAnswer(btn, option.id); optionsContainer.appendChild(btn);
    });
}

function checkAnswer(clickedButton, selectedId) {
    document.querySelectorAll(".quiz-option").forEach(btn => btn.disabled = true);
    if (selectedId === currentQuizCorrectWord.id) { clickedButton.classList.add("correct"); document.getElementById("quizFeedback").innerText = "Richtig! 🎉"; updateStreak(); } 
    else { clickedButton.classList.add("wrong"); document.getElementById("quizFeedback").innerText = "Falsch! ❌"; document.querySelectorAll(".quiz-option").forEach(btn => { if(btn.innerText === currentQuizCorrectWord.turkish) btn.classList.add("correct"); }); }
    document.getElementById("nextQuizBtn").style.display = "block";
}
