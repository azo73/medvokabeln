// --- FIREBASE BAĞLANTISI ---
const firebaseConfig = {
    apiKey: "AIzaSyClCQ8oQDKfH8lIrEdhwqlHfzvQzW9rAIA",
    authDomain: "medvokabeln.firebaseapp.com",
    projectId: "medvokabeln",
    storageBucket: "medvokabeln.firebasestorage.app",
    messagingSenderId: "983844382469",
    appId: "1:983844382469:web:78737dbc24a869db66f96c"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

let fullVocabulary = []; 
let currentCards = []; 
let currentIndex = 0;
let learnedIds = JSON.parse(localStorage.getItem('medVokabeln_learned')) || [];
let difficultIds = JSON.parse(localStorage.getItem('medVokabeln_difficult')) || [];
let currentQuizCorrectWord = null; 

window.onload = () => { 
    initTheme(); 
    displayStreak(); 
    loadDatabase(); 
};

function loadDatabase() {
    if (typeof vocabularyData !== 'undefined' && vocabularyData.length > 0) {
        fullVocabulary = [...vocabularyData];
        currentCards = [...fullVocabulary];
        updateCard();
    }
}

// Siyah/Sarı Tema Başlangıç Ayarları
function initTheme() {
    if (localStorage.getItem('medVokabeln_theme') === 'light') {
        document.body.classList.add('light-mode');
        if(document.getElementById('themeToggle')) document.getElementById('themeToggle').innerText = '🌙';
    } else {
        if(document.getElementById('themeToggle')) document.getElementById('themeToggle').innerText = '☀️';
    }
}

function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    if(document.getElementById('themeToggle')) document.getElementById('themeToggle').innerText = isLight ? '🌙' : '☀️';
    localStorage.setItem('medVokabeln_theme', isLight ? 'light' : 'dark');
}

// --- YENİ EKLENEN ARAMA MANTIĞI ---
function searchWord() {
    const searchInput = document.getElementById("searchInput");
    if(!searchInput) return;
    const query = searchInput.value.toLowerCase();
    const selectedCategory = document.getElementById("categorySelect") ? document.getElementById("categorySelect").value : "Alle";
    
    let basePool = selectedCategory === "Alle" ? fullVocabulary : fullVocabulary.filter(w => w.category === selectedCategory);
    
    currentCards = query === "" ? basePool : basePool.filter(word => word.german.toLowerCase().includes(query) || word.turkish.toLowerCase().includes(query) || (word.english && word.english.toLowerCase().includes(query))); 
    
    currentIndex = 0;
    if(currentCards.length === 0) {
        let currentLang = localStorage.getItem('medVokabeln_lang') || 'tr';
        if(document.getElementById("germanWord")) document.getElementById("germanWord").innerText = "Yok 😔";
        if(document.getElementById("turkishWord")) document.getElementById("turkishWord").innerText = currentLang==='en' ? "No results found." : "Sonuç bulunamadı.";
        if(document.getElementById("wordType")) document.getElementById("wordType").innerText = "";
        if(document.getElementById("exampleSentence")) document.getElementById("exampleSentence").innerText = "";
    } else {
        updateCard(); 
    }
}

function executeSearch() {
    searchWord();
    // Arama yapıldıktan sonra flashcard kısmına kaydırır
    const flashcardSection = document.getElementById("flashcardSection");
    if(flashcardSection) {
        flashcardSection.scrollIntoView({ behavior: "smooth", block: "center" });
    }
}

function handleSearchInput(event) {
    searchWord();
    // Enter tuşuna basılırsa ekrana kaydır
    if(event.key === "Enter") {
        executeSearch();
    }
}

function changeCategory() {
    const searchInput = document.getElementById("searchInput");
    if(searchInput) searchInput.value = ""; 
    searchWord();
}

function speakWord(event) {
    if(event) event.stopPropagation(); 
    if(currentCards.length === 0) return; 
    const utterance = new SpeechSynthesisUtterance(currentCards[currentIndex].german);
    utterance.lang = 'de-DE'; utterance.rate = 0.9; 
    window.speechSynthesis.speak(utterance);
}

function flipCard() { 
    const card = document.getElementById("myCard");
    if(card) card.classList.toggle("is-flipped"); 
}
function nextWord() { currentIndex++; if (currentIndex >= currentCards.length) currentIndex = 0; updateCard(); }
function prevWord() { currentIndex--; if (currentIndex < 0) currentIndex = currentCards.length - 1; updateCard(); }

function updateCard() {
    if(currentCards.length === 0) return; 
    const card = document.getElementById("myCard");
    if(card) card.classList.remove("is-flipped");
    
    const currentWord = currentCards[currentIndex];
    if(document.getElementById("germanWord")) document.getElementById("germanWord").innerText = currentWord.german;
    if(document.getElementById("wordType")) document.getElementById("wordType").innerText = currentWord.type || "";
    
    let currentLang = localStorage.getItem('medVokabeln_lang') || 'tr';
    const trEl = document.getElementById("turkishWord");
    if(trEl) trEl.innerText = (currentLang === 'en' && currentWord.english) ? currentWord.english : currentWord.turkish;

    if(document.getElementById("exampleSentence")) document.getElementById("exampleSentence").innerText = currentWord.example || "";
}

function displayStreak() { 
    const streakEl = document.getElementById('streakText');
    if(streakEl) streakEl.innerText = `🔥 ${localStorage.getItem('medVokabeln_streak') || 0}`; 
}

function switchMode(mode) {
    const flashSection = document.getElementById("flashcardSection");
    const quizSection = document.getElementById("quizSection");
    const btnFlash = document.getElementById("btnFlashcard");
    const btnQuiz = document.getElementById("btnQuiz");
    
    if(!flashSection || !quizSection) return;

    if(mode === 'flashcard') {
        flashSection.style.display = "flex"; quizSection.style.display = "none";
        btnFlash.classList.add("active"); btnQuiz.classList.remove("active");
    } else {
        flashSection.style.display = "none"; quizSection.style.display = "flex";
        btnQuiz.classList.add("active"); btnFlash.classList.remove("active");
        generateQuizQuestion(); 
    }
}
