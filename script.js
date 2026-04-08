const fullVocabulary = [
    { id: 1, category: "Allgemein", german: "Blutdruckmessgerät", type: "Das Nomen", turkish: "Tansiyon Aleti", example: "Ich brauche das Blutdruckmessgerät." },
    { id: 2, category: "Allgemein", german: "Spritze", type: "Die Nomen", turkish: "Şırınga / İğne", example: "Wir müssen eine Spritze geben." },
    { id: 3, category: "Anatomie", german: "Herz", type: "Das Nomen", turkish: "Kalp", example: "Das Herz schlägt schnell." },
    { id: 4, category: "Anatomie", german: "Lunge", type: "Die Nomen", turkish: "Akciğer", example: "Atmen Sie tief in die Lunge ein." },
    { id: 5, category: "Aktion", german: "Blut abnehmen", type: "Das Verb", turkish: "Kan almak", example: "Ich werde Ihnen jetzt etwas Blut abnehmen." },
    { id: 6, category: "Aktion", german: "Verbinden", type: "Das Verb", turkish: "Sarmak / Bandajlamak", example: "Ich muss die Wunde verbinden." }
];

let currentCards = [...fullVocabulary]; 
let currentIndex = 0;
let learnedIds = JSON.parse(localStorage.getItem('medVokabeln_learned')) || [];
let currentQuizCorrectWord = null; 

window.onload = () => { 
    initTheme(); // Sayfa açılır açılmaz temayı yükle
    updateCard(); 
    displayStreak(); 
};

// --- YENİ EKLENEN: GECE MODU FONKSİYONLARI ---
function initTheme() {
    const savedTheme = localStorage.getItem('medVokabeln_theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('themeToggle').innerText = '☀️';
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    
    // İkonu değiştir
    document.getElementById('themeToggle').innerText = isDark ? '☀️' : '🌙';
    
    // Kullanıcının tercihini kaydet (Bir sonraki girişte hatırlaması için)
    localStorage.setItem('medVokabeln_theme', isDark ? 'dark' : 'light');
}

// --- ARAMA MOTORU FONKSİYONU ---
function searchWord() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const selectedCategory = document.getElementById("categorySelect").value;
    
    let basePool = selectedCategory === "Alle" ? fullVocabulary : fullVocabulary.filter(w => w.category === selectedCategory);
    
    if (query === "") {
        currentCards = basePool;
    } else {
        currentCards = basePool.filter(word => 
            word.german.toLowerCase().includes(query) || 
            word.turkish.toLowerCase().includes(query)
        );
    }

    currentIndex = 0;
    
    if(currentCards.length === 0) {
        document.getElementById("germanWord").innerText = "Bulunamadı 😔";
        document.getElementById("turkishWord").innerText = "Sonuç yok.";
        document.getElementById("wordType").innerText = "...";
        document.getElementById("exampleSentence").innerText = "...";
        document.getElementById("frontBadge").style.display = "none";
        document.getElementById("backBadge").style.display = "none";
        document.getElementById("progressText").innerText = "0 / 0";
    } else {
        document.getElementById("myCard").classList.remove("is-flipped");
        updateCard();
    }
}

function displayStreak() {
    let streakCount = parseInt(localStorage.getItem('medVokabeln_streak')) || 0;
    document.getElementById('streakText').innerText = `🔥 ${streakCount}`;
}

function checkAndUpdateStreak() {
    let streakCount = parseInt(localStorage.getItem('medVokabeln_streak')) || 0;
    let lastActiveDate = localStorage.getItem('medVokabeln_lastActive') || "";
    const today = new Date().toISOString().split('T')[0];

    if (lastActiveDate === today) return; 

    const yesterdayDate = new Date();
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    const yesterday = yesterdayDate.toISOString().split('T')[0];

    if (lastActiveDate === yesterday) { streakCount++; } 
    else { streakCount = 1; }

    localStorage.setItem('medVokabeln_streak', streakCount);
    localStorage.setItem('medVokabeln_lastActive', today);
    displayStreak();
}

function speakWord(event) {
    event.stopPropagation(); 
    if(currentCards.length === 0) return; 
    const wordToSpeak = currentCards[currentIndex].german;
    const utterance = new SpeechSynthesisUtterance(wordToSpeak);
    utterance.lang = 'de-DE'; 
    utterance.rate = 0.9; 
    window.speechSynthesis.speak(utterance);
}

function switchMode(mode) {
    const flashcardSec = document.getElementById("flashcardSection");
    const quizSec = document.getElementById("quizSection");
    const btnFlashcard = document.getElementById("btnFlashcard");
    const btnQuiz = document.getElementById("btnQuiz");

    if(mode === 'flashcard') {
        flashcardSec.style.display = "flex"; quizSec.style.display = "none";
        btnFlashcard.classList.add("active"); btnQuiz.classList.remove("active");
        updateCard();
    } else {
        flashcardSec.style.display = "none"; quizSec.style.display = "flex";
        btnQuiz.classList.add("active"); btnFlashcard.classList.remove("active");
        generateQuizQuestion(); 
    }
}

function changeCategory() {
    document.getElementById("searchInput").value = ""; 
    const selectedCategory = document.getElementById("categorySelect").value;
    if (selectedCategory === "Alle") { currentCards = [...fullVocabulary]; } 
    else { currentCards = fullVocabulary.filter(word => word.category === selectedCategory); }
    currentIndex = 0; 
    document.getElementById("myCard").classList.remove("is-flipped");
    setTimeout(updateCard, 200);
    if(document.getElementById("quizSection").style.display === "flex") { generateQuizQuestion(); }
}

function flipCard() { 
    if(currentCards.length === 0) return; 
    document.getElementById("myCard").classList.toggle("is-flipped"); 
}
function nextWord() { 
    if(currentCards.length === 0) return;
    currentIndex++; if (currentIndex >= currentCards.length) currentIndex = 0; updateCard(); 
}
function prevWord() { 
    if(currentCards.length === 0) return;
    currentIndex--; if (currentIndex < 0) currentIndex = currentCards.length - 1; updateCard(); 
}

function updateCard() {
    if(currentCards.length === 0) return; 
    document.getElementById("myCard").classList.remove("is-flipped");
    setTimeout(() => {
        const currentWord = currentCards[currentIndex];
        document.getElementById("germanWord").innerText = currentWord.german;
        document.getElementById("wordType").innerText = currentWord.type;
        document.getElementById("turkishWord").innerText = currentWord.turkish;
        document.getElementById("exampleSentence").innerText = currentWord.example;
        checkLearnedStatus(currentWord.id);
    }, 200);
}

function checkLearnedStatus(wordId) {
    const isLearned = learnedIds.includes(wordId);
    const learnBtn = document.getElementById("learnBtn");
    const frontBadge = document.getElementById("frontBadge");
    const backBadge = document.getElementById("backBadge");

    if (isLearned) {
        learnBtn.innerText = "❌ Öğrenmedim (Geri Al)"; learnBtn.classList.add("active");
        frontBadge.style.display = "block"; backBadge.style.display = "block";
    } else {
        learnBtn.innerText = "✅ Öğrendim"; learnBtn.classList.remove("active");
        frontBadge.style.display = "none"; backBadge.style.display = "none";
    }
    const learnedInCurrentView = currentCards.filter(card => learnedIds.includes(card.id)).length;
    document.getElementById("progressText").innerText = `${learnedInCurrentView} / ${currentCards.length} Öğrenildi`;
}

function toggleLearned() {
    if(currentCards.length === 0) return;
    const currentWordId = currentCards[currentIndex].id;
    if (learnedIds.includes(currentWordId)) { 
        learnedIds = learnedIds.filter(id => id !== currentWordId); 
    } else { 
        learnedIds.push(currentWordId); 
        checkAndUpdateStreak(); 
    }
    localStorage.setItem('medVokabeln_learned', JSON.stringify(learnedIds));
    checkLearnedStatus(currentWordId);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function generateQuizQuestion() {
    document.getElementById("quizFeedback").innerText = "";
    document.getElementById("nextQuizBtn").style.display = "none";
    if(currentCards.length === 0) return;
    
    currentQuizCorrectWord = currentCards[Math.floor(Math.random() * currentCards.length)];
    document.getElementById("quizWord").innerText = currentQuizCorrectWord.german;

    let distractors = fullVocabulary.filter(word => word.id !== currentQuizCorrectWord.id);
    distractors = shuffleArray(distractors).slice(0, 3); 

    let options = shuffleArray([currentQuizCorrectWord, ...distractors]);
    const optionsContainer = document.getElementById("quizOptionsContainer");
    optionsContainer.innerHTML = ""; 

    options.forEach(option => {
        const btn = document.createElement("button");
        btn.className = "quiz-option";
        btn.innerText = option.turkish;
        btn.onclick = () => checkAnswer(btn, option.id, currentQuizCorrectWord.id);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(clickedButton, selectedId, correctId) {
    const allButtons = document.querySelectorAll(".quiz-option");
    allButtons.forEach(btn => btn.disabled = true);
    const feedbackEl = document.getElementById("quizFeedback");

    if (selectedId === correctId) {
        clickedButton.classList.add("correct");
        feedbackEl.innerText = "Richtig! (Doğru!) 🎉";
        feedbackEl.style.color = "var(--success)";
        checkAndUpdateStreak();
    } else {
        clickedButton.classList.add("wrong");
        feedbackEl.innerText = "Falsch! (Yanlış!) ❌";
        feedbackEl.style.color = "var(--danger)";
        allButtons.forEach(btn => { if(btn.innerText === currentQuizCorrectWord.turkish) btn.classList.add("correct"); });
    }
    document.getElementById("nextQuizBtn").style.display = "block";
}
