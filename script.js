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
    // Gizli çökmeleri engellemek için try-catch eklendi
    try {
        displayStreak(); 
        loadDatabase(); 
    } catch(e) {
        console.error("Yükleme hatası:", e);
    }
};

function loadDatabase() {
    if (typeof vocabularyData !== 'undefined' && vocabularyData.length > 0) {
        fullVocabulary = [...vocabularyData];
        currentCards = [...fullVocabulary];
        updateCard();
    } else {
        if(document.getElementById("germanWord")) document.getElementById("germanWord").innerText = "Veri Bulunamadı 🚨";
    }
}

function searchWord() {
    const searchInput = document.getElementById("searchInput");
    if(!searchInput) return;
    const query = searchInput.value.toLowerCase();
    const selectedCategory = document.getElementById("categorySelect") ? document.getElementById("categorySelect").value : "Alle";
    
    let basePool;
    if (selectedCategory === "Zorlandiklarim") {
        basePool = fullVocabulary.filter(w => difficultIds.includes(w.id));
    } else if (selectedCategory === "Alle") {
        basePool = fullVocabulary;
    } else {
        basePool = fullVocabulary.filter(w => w.category === selectedCategory || (w.type && w.type.includes("🌍 Topluluk")));
    }
    
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
    const flashcardSection = document.getElementById("flashcardSection");
    if(flashcardSection) {
        flashcardSection.scrollIntoView({ behavior: "smooth", block: "center" });
    }
}

function handleSearchInput(event) {
    searchWord();
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
    
    checkLearnedStatus(currentWord.id);
    refreshStarUI(); // Yıldız UI'sini güncelle
}

// --- YENİ EKLENEN FAVORİ MANTIĞI ---
function handleFavClick() {
    if(currentCards.length === 0) return;
    const currentWordId = currentCards[currentIndex].id;
    
    // data.js içindeki toggleFavorite fonksiyonunu çağırıyoruz
    if (typeof toggleFavorite === 'function') {
        toggleFavorite(currentWordId);
    } else {
        // Güvenlik önlemi
        let favorites = JSON.parse(localStorage.getItem('medVokabeln_favs')) || [];
        const index = favorites.indexOf(currentWordId);
        if (index > -1) favorites.splice(index, 1);
        else favorites.push(currentWordId);
        localStorage.setItem('medVokabeln_favs', JSON.stringify(favorites));
    }
    
    refreshStarUI();
}

function refreshStarUI() {
    if(currentCards.length === 0) return;
    const currentWordId = currentCards[currentIndex].id;
    const favBtn = document.getElementById("mainFavBtn");
    if(!favBtn) return;
    
    let isFav = false;
    if (typeof isFavorite === 'function') {
        isFav = isFavorite(currentWordId);
    } else {
        let favorites = JSON.parse(localStorage.getItem('medVokabeln_favs')) || [];
        isFav = favorites.includes(currentWordId);
    }
    
    if(isFav) {
        favBtn.classList.remove("inactive");
        favBtn.classList.add("active");
    } else {
        favBtn.classList.remove("active");
        favBtn.classList.add("inactive");
    }
}
// ------------------------------------

function checkLearnedStatus(wordId) {
    const isLearned = learnedIds.includes(wordId);
    const learnBtn = document.getElementById("btnLearn");
    let currentLang = localStorage.getItem('medVokabeln_lang') || 'tr';

    if(learnBtn) {
        if (isLearned) { 
            learnBtn.innerText = currentLang === 'en' ? "❌ Undo" : "❌ Geri Al"; 
            learnBtn.classList.add("active"); 
            if(document.getElementById("frontBadge")) document.getElementById("frontBadge").style.display = "block"; 
            if(document.getElementById("backBadge")) document.getElementById("backBadge").style.display = "block"; 
        } else { 
            learnBtn.innerText = currentLang === 'en' ? "✅ Learned" : "✅ Öğrendim"; 
            learnBtn.classList.remove("active"); 
            if(document.getElementById("frontBadge")) document.getElementById("frontBadge").style.display = "none"; 
            if(document.getElementById("backBadge")) document.getElementById("backBadge").style.display = "none"; 
        }
    }
    
    // Sayaç (0/0) problemini düzelten yer
    const learnedInCurrentView = currentCards.filter(card => learnedIds.includes(card.id)).length;
    if(document.getElementById("progressText")) {
        document.getElementById("progressText").innerText = `${learnedInCurrentView} / ${currentCards.length}`;
    }
}

function toggleLearned() {
    if(currentCards.length === 0) return;
    const currentWordId = currentCards[currentIndex].id;
    if (learnedIds.includes(currentWordId)) { 
        learnedIds = learnedIds.filter(id => id !== currentWordId); 
    } else { 
        learnedIds.push(currentWordId); 
        updateStreak(); 
        removeFromDifficult(currentWordId);
    }
    localStorage.setItem('medVokabeln_learned', JSON.stringify(learnedIds));
    checkLearnedStatus(currentWordId);
}

function addToDifficult(wordId) {
    if (!difficultIds.includes(wordId)) {
        difficultIds.push(wordId);
        localStorage.setItem('medVokabeln_difficult', JSON.stringify(difficultIds));
    }
}

function removeFromDifficult(wordId) {
    difficultIds = difficultIds.filter(id => id !== wordId);
    localStorage.setItem('medVokabeln_difficult', JSON.stringify(difficultIds));
}

function displayStreak() { 
    const streakEl = document.getElementById('streakText');
    if(streakEl) streakEl.innerText = `🔥 ${localStorage.getItem('medVokabeln_streak') || 0}`; 
}

function updateStreak() {
    let streakCount = parseInt(localStorage.getItem('medVokabeln_streak')) || 0;
    const today = new Date().toISOString().split('T')[0];
    if (localStorage.getItem('medVokabeln_lastActive') === today) return; 
    streakCount++;
    localStorage.setItem('medVokabeln_streak', streakCount);
    localStorage.setItem('medVokabeln_lastActive', today);
    displayStreak();
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

function generateQuizQuestion() {
    if(document.getElementById("quizFeedback")) document.getElementById("quizFeedback").innerText = ""; 
    if(document.getElementById("nextQuizBtn")) document.getElementById("nextQuizBtn").style.display = "none";
    
    let pool = fullVocabulary;
    const selectedCategory = document.getElementById("categorySelect") ? document.getElementById("categorySelect").value : "Alle";
    
    if(selectedCategory === "Zorlandiklarim") pool = fullVocabulary.filter(w => difficultIds.includes(w.id));
    else if(selectedCategory !== "Alle") pool = fullVocabulary.filter(w => w.category === selectedCategory);
    
    if(pool.length === 0) {
        if(document.getElementById("quizWord")) document.getElementById("quizWord").innerText = "Kelime yok!";
        if(document.getElementById("quizOptionsContainer")) document.getElementById("quizOptionsContainer").innerHTML = "";
        return;
    }

    currentQuizCorrectWord = pool[Math.floor(Math.random() * pool.length)];
    if(document.getElementById("quizWord")) document.getElementById("quizWord").innerText = currentQuizCorrectWord.german;
    
    let distractors = fullVocabulary.filter(word => word.id !== currentQuizCorrectWord.id).sort(() => 0.5 - Math.random()).slice(0, 3);
    let options = [currentQuizCorrectWord, ...distractors].sort(() => 0.5 - Math.random());
    
    let currentLang = localStorage.getItem('medVokabeln_lang') || 'tr';
    const optionsContainer = document.getElementById("quizOptionsContainer");
    if(!optionsContainer) return;
    
    optionsContainer.innerHTML = ""; 
    options.forEach(option => {
        const btn = document.createElement("button"); 
        btn.className = "quiz-option"; 
        btn.innerText = (currentLang === 'en' && option.english) ? option.english : option.turkish;
        btn.onclick = () => checkAnswer(btn, option.id); 
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(clickedButton, selectedId) {
    document.querySelectorAll(".quiz-option").forEach(btn => btn.disabled = true);
    let currentLang = localStorage.getItem('medVokabeln_lang') || 'tr';

    if (selectedId === currentQuizCorrectWord.id) { 
        clickedButton.classList.add("correct"); 
        if(document.getElementById("quizFeedback")) document.getElementById("quizFeedback").innerText = currentLang === 'en' ? "Correct! 🎉" : "Richtig! 🎉"; 
        updateStreak(); 
        removeFromDifficult(currentQuizCorrectWord.id);
    } else { 
        clickedButton.classList.add("wrong"); 
        if(document.getElementById("quizFeedback")) document.getElementById("quizFeedback").innerText = currentLang === 'en' ? "Wrong! ❌" : "Falsch! ❌"; 
        
        let correctText = (currentLang === 'en' && currentQuizCorrectWord.english) ? currentQuizCorrectWord.english : currentQuizCorrectWord.turkish;
        document.querySelectorAll(".quiz-option").forEach(btn => { 
            if(btn.innerText === correctText) btn.classList.add("correct"); 
        }); 
        addToDifficult(currentQuizCorrectWord.id);
    }
    if(document.getElementById("nextQuizBtn")) document.getElementById("nextQuizBtn").style.display = "block";
}

let communityWordsCache = [];
db.collection("communityWords").onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
            const data = change.doc.data();
            const newCard = {
                id: change.doc.id,
                german: data.german,
                turkish: data.turkish,
                type: `🌍 Topluluk (${data.author})`, 
                category: "Alle",
                example: "Topluluk tarafından eklendi."
            };
            
            if (typeof fullVocabulary !== 'undefined' && !fullVocabulary.find(w => w.id === newCard.id)) {
                fullVocabulary.push(newCard);
                currentCards.push(newCard);
                communityWordsCache.push(newCard); 
                if(currentCards.length === 1) updateCard();
            }
        }
    });
    localStorage.setItem('medVokabeln_communityWords', JSON.stringify(communityWordsCache));
});
